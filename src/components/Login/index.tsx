import React,{Component,createRef,useEffect,useRef,useState} from 'react'
import { Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import request from '../../utils/request'
import debounce from '../../utils/debounce';
import '../../../assest/iconfont/iconfont.css'
import './index.css'
interface IProps {
    name:string
}
interface IPla {
    data:string
}
interface LoginForm {
    email:string,
    passWord:string
}
interface SignForm {
    userName:string,
    email:string,
    passWord:string,
    comfirmPassWord:string
}
 const Placeholder = (props:IPla)=>{
     //点击focus
     function focusInput(e:any){
        e.target.previousElementSibling.focus()
    }
    return (<span data-placeholder={props.data} onClick={focusInput}></span>)
 }

 const Login = (props:IProps)=>{
    const navigate = useNavigate();
    let [loginForm,setLoginForm] = useState<LoginForm>({
        email:'',
        passWord:''
    });
    let [signForm,setSignForm] = useState<SignForm>({
        userName:'',
        email:'',
        passWord:'',
        comfirmPassWord:''
    });
    let [loading,setLoading] = useState<boolean>(false);
    let loadingRef = useRef<boolean>();
    let [count,setCount] = useState<number>(4);
    let [page,setPage] = useState<string>('signUp');
    let [pwDisplay,setpwDisplay] = useState<boolean>(false);
    // ref指向LoginBox
    const loginBoxRef = useRef<HTMLDivElement|null>(null)
    const pwRef = useRef<HTMLInputElement|null>(null)
    const sPwRef = useRef<HTMLInputElement|null>(null)
    //useRef,解决hook异步
    useEffect(()=>{
        loadingRef.current = loading; 
    },[loading]);
    // 跳转注册
    function handleToSignUp() {
        pwDisplay = false;
        page = 'signIn'
        setPage(page);
        setpwDisplay(pwDisplay);
        if(loginBoxRef.current){
            loginBoxRef.current.className+=' right-panel-active';
            console.log(loginBoxRef.current.className);
        }
    }
    // 跳转登录
    function handleToSignIn(){
        pwDisplay = false;
        page = 'signUp'
        setPage(page);
        setpwDisplay(pwDisplay);
        if(loginBoxRef.current){
            loginBoxRef.current.className='container';
        }
    }
    //双向绑定数据
    function handleChange(e:any){
        //登录页面
        if(page==='signUp'){
            let data = {...loginForm}
            if(loginForm){
                if(e.target.id == 'email'){
                    data.email = e.target.value;
                }
                else if(e.target.value.length<=16){
                    data.passWord = e.target.value;                
                }
                setLoginForm(data);
            }
        }
        // 注册页面
        else{
            if(signForm){
                let data = {...signForm}
                if(e.target.id == 's-email'){
                    data.email = e.target.value;
                }
                else if(e.target.id == 'userName') {
                    data.userName = e.target.value;
                }
                else if(e.target.id == 's-pw'&&e.target.value.length<=16) {
                    data.passWord = e.target.value;
                }
                else if(e.target.id == 'cpw') {
                    //只能输入数字
                    if(/^\d+$/.test(e.target.value)||e.target.value==""){
                        if(e.target.value.length>6){
                            return 
                        }
                        data.comfirmPassWord = e.target.value;
                    }
                }
               setSignForm(data)
            }
        }
    }
    //表单focus
    function handleFocus (e:any){
        e.target.className ='focus';         
    }
    //input 失去焦点
    function handleBlur(e:any){
        if(!e.target.value){
            e.target.className = ""; 
        }
    }
    //passworld isShow
    function displayPw(e:any){
        setpwDisplay(!pwDisplay)  
        if(!pwDisplay){
            e.target.className ='iconfont icon-yanjing_xianshi'
            if(page ==='signUp'){ 
                pwRef.current&&(pwRef.current.type = 'text')
            }
            else{
                sPwRef.current&&(sPwRef.current.type = 'text')
            }
            
        }
        else{
            e.target.className ='iconfont icon-yanjing_yincang' 
            if(page==='signUp'){ 
                pwRef.current&&(pwRef.current.type = 'password')
                console.log(123);
                
            }
            else{
                sPwRef.current&&(sPwRef.current.type = 'password')
            }
           
        }
    }
    //登录
    function handleLoign (e:any){
        e.preventDefault();
        //表单验证
        if(loginForm.email==''){
            message.info('邮箱不能为空')
            return 
        }
        if(!(/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(loginForm.email))){
            message.info('邮箱错误')
            return ;
        }
        if(loginForm.passWord==''){
            message.info('密码不能为空')
            return 
        }
        //立即执行函数 防抖
        (debounce(loginRequest,300)) ()
    }
    function loginRequest(){
       request('/login',loginForm).then(res=>{
            console.log(res);
            if(res === 'ok'){
                console.log('跳转home');
                navigate('/',{replace:true})
            }
       })
    }
    //注册
    async function handleRegister (e:any){
        e.preventDefault();
        //表单验证
        if(!signForm.userName){
            message.info('用户名不能为空')
            return ;
        }
        if(!signForm.email){
            message.info('邮箱不能为空');
            return;
        }
        if(!signForm.passWord){
            message.info('密码不能为空');
            return;
        }
        if(!signForm.comfirmPassWord){
            message.info('请输入验证码')
            return
        }
        await request('/register',signForm,"POST").then(res=>{
            message.info(res);
            handleToSignIn();
        });
    }
    //获取验证码
    function getCode(){
            request('/api/email',{email:signForm.email},'GET').then(res=>{
                console.log(res);
                
            })
    }
    //倒计时
    async function countDown(){
        getCode();
        setLoading(true);
        if(loadingRef){
            let  c = count;
            let t = setInterval(()=>{
                if(c>0){
                    c--;
                    setCount(c);
                }else{
                    clearInterval(t);
                    setCount(60);
                    setLoading(false);
                } 
            },1000)
        }
        
    }
    return (
        <div className="container" id="login-box"
            ref={loginBoxRef}
        >
            {/* 注册 */}
            <div className="form-container sign-up-container">
                <form>
                    <h1>注册</h1>
                    <div className='txtb'>
                        <input type="text" 
                        id='userName'
                        value={signForm.userName}
                        onChange={handleChange}
                         onFocus={handleFocus}
                         onBlur={handleBlur}
                        />
                        {/* <span data-placeholder='Username'></span> */}
                        <Placeholder data='Username'/>

                    </div>
                    <div className='txtb'>
                        <input type="text"
                        id='s-email'
                        value={signForm.email}
                        onChange={handleChange}
                         onFocus={handleFocus}
                         onBlur={handleBlur}
                        />
                        {/* <span data-placeholder='Email'></span> */}
                        <Placeholder data='Email'/>
                    </div>
                    <div className='txtb'>
                        <input type="password"
                        id='s-pw'
                        ref={sPwRef}
                         value={signForm.passWord}
                         onChange={handleChange}
                         onFocus={handleFocus}
                         onBlur={handleBlur}
                        />
                        {/* <span data-placeholder='Password'></span> */}
                        <Placeholder data='Password'/>
                        <i className='iconfont icon-yanjing_yincang'
                            onClick={displayPw}
                        ></i>
                    </div>
                    <div className='txtb confirm-box'>
                        <input type="text" 
                        id='cpw'
                         value={signForm.comfirmPassWord}
                         onChange={handleChange}
                         onFocus={handleFocus}
                         onBlur={handleBlur}
                        />
                        {/* <span data-placeholder='Confirm Password'></span> */}
                        <Placeholder data='Confirm Password'/>
                        <Button loading={loading} shape='round' className='confirm-btn' onClick={countDown}>{loading?`${count}秒后再试`:'获取验证码'}</Button>
                    </div>
                    <button onClick={handleRegister}>注册</button>
                </form>
            </div>
            {/* 登录 */}
            <div className='form-container sign-in-container'>
                <form action="#">
                    <h1>登录</h1>
                    <div className='txtb'>
                        <input type="text" 
                            id='email'
                            value={loginForm.email}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            />
                        {/* <span data-placeholder = 'Email'></span> */}
                        <Placeholder data='Email'/>
                    </div>
                    <div className='txtb'>
                        <input type="password"
                       id='pw'
                       ref={pwRef}
                        value={ loginForm.passWord}
                        onChange={ handleChange}
                         onFocus={ handleFocus}
                         onBlur={ handleBlur}
                        />
                        {/* <span data-placeholder = 'Password'></span> */}
                        <Placeholder data='Password'/>
                        <i className='iconfont icon-yanjing_yincang'
                            onClick={ displayPw}
                        ></i>
                    </div>
                    <a href='#'>忘记密码</a>
                    <button onClick={ handleLoign}>登录</button>
                </form>
            </div>
            {/* 覆盖层 */}
            <div className='overlay-container'>
                <div className='overlay'>
                    <div className='overlay-panel overlay-left'>
                        <h1>已有账号</h1>
                        <p>请你使用账号登录</p>
                        <button className='ghost' id = 'signIn'onClick={ handleToSignIn}>登录</button>
                    </div>
                    <div className='overlay-panel overlay-right'>
                        <h1>还没有账号?</h1>
                        <p>立即注册加入我们</p>
                        <button className='ghost' id = 'signUp' onClick={ handleToSignUp}>注册</button>
                    </div>
                </div>
            </div>
        </div>)
 }
export default Login;