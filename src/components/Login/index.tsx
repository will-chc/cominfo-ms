import {ReactNode } from 'react';
import React,{Component,createRef} from 'react'
import request from '../../utils/request'
import '../../../assest/iconfont/iconfont.css'
import './index.css'
import {message} from 'antd'
interface IProps {
    name:string
}
interface IState {
    loginForm:LoginForm,
    signForm:SignForm,
    page:string,
    pwDisplay:boolean
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

 class Login extends React.Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
        this.state = {
            // 登录表单
            loginForm:{
                email:'',
                passWord:''
            },
            // 注册表单
            signForm:{
                userName:'',
                email:'',
                passWord:'',
                comfirmPassWord:''
            },
            //signUp登录 signIn注册
            page:'signUp',
            pwDisplay:false
        }
    }
    // ref指向LoginBox
    loginBoxRef = React.createRef<HTMLDivElement>()
    pwRef = React.createRef<HTMLInputElement>()
    sPwRef = React.createRef<HTMLInputElement>()
    // 跳转注册
    handleToSignUp = ()=>{
        let {page,pwDisplay} = this.state;
        pwDisplay = false;
        page = 'signIn'
        this.setState({
            page,
            pwDisplay
        })
        if(this.loginBoxRef.current){
            this.loginBoxRef.current.className+=' right-panel-active';
            console.log(this.loginBoxRef.current.className);
        }
    }
    // 跳转登录
    handleToSignIn = ()=>{
        let {page,pwDisplay} = this.state;
        pwDisplay = false;
        page = 'signUp'
        this.setState({
            page,
            pwDisplay
        })
        if(this.loginBoxRef.current){
            this.loginBoxRef.current.className='container';
        }
    }
    handleChange = (e:any)=>{
        //登录页面
        if(this.state.page==='signUp'){
            let {loginForm} = this.state;
            if(e.target.id == 'email'){
                loginForm.email = e.target.value;
            }
            else if(e.target.value.length<=16){
                loginForm.passWord = e.target.value;                
            }
            this.setState({
                loginForm
            })
        }
        // 注册页面
        else{
            console.log(1231);
            let {signForm} = this.state;
            if(e.target.id == 's-email'){
                signForm.email = e.target.value;
            }
            else if(e.target.id == 'userName') {
                signForm.userName = e.target.value;
            }
            else if(e.target.id == 's-pw'&&e.target.value.length<=16) {
                signForm.passWord = e.target.value;
            }
            else if(e.target.id == 'cpw') {
                signForm.comfirmPassWord = e.target.value;
            }
            this.setState({
                signForm
            })
        }
        
        // if(e.target.id == 'email'){
        //     loginForm.email = e.target.value;
        //     signForm.email = e.target.value;
        // }
        
    }
    handleFocus = (e:any)=>{
        e.target.className ='focus';         
    }
    handleBlur = (e:any)=>{
        if(!e.target.value){
            e.target.className = ""; 
        }
    }
    //passworld isShow
    displayPw = (e:any)=>{
        let {pwDisplay} = this.state;
        pwDisplay=!pwDisplay   
        if(!pwDisplay){

            e.target.className ='iconfont icon-yanjing_xianshi'
            if(this.state.page ==='signUp'){ 
                this.pwRef.current&&(this.pwRef.current.type = 'text')
            }
            else{
                this.sPwRef.current&&(this.sPwRef.current.type = 'text')
            }
            
        }
        else{
            e.target.className ='iconfont icon-yanjing_yincang' 
            if(this.state.page==='signUp'){ 
                this.pwRef.current&&(this.pwRef.current.type = 'password')
            }
            else{
                this.sPwRef.current&&(this.sPwRef.current.type = 'password')
            }
           
        }
        this.setState({
            pwDisplay
        })

    }
    //登录
    handleLoign = async (e:any)=>{
        e.preventDefault();
        let res = await request('/login',this.state.loginForm);
        console.log(res);
        
    }
    handleRegister = async (e:any)=>{
        e.preventDefault();
        await request('/register',this.state.signForm,"POST");
    }
    render(): ReactNode {
        return (
            <div className="container" id="login-box"
                ref={this.loginBoxRef}
            >
                {/* 注册 */}
                <div className="form-container sign-up-container">
                    <form>
                        <h1>注册</h1>
                        <div className='txtb'>
                            <input type="text" 
                            id='userName'
                            value={this.state.signForm.userName}
                            onChange={this.handleChange}
                             onFocus={this.handleFocus}
                             onBlur={this.handleBlur}
                            />
                            <span data-placeholder='Username'></span>
                        </div>
                        <div className='txtb'>
                            <input type="text"
                            id='s-email'
                            value={this.state.signForm.email}
                            onChange={this.handleChange}
                             onFocus={this.handleFocus}
                             onBlur={this.handleBlur}
                            />
                            <span data-placeholder='Email'></span>
                        </div>
                        <div className='txtb'>
                            <input type="password"
                            id='s-pw'
                            ref={this.sPwRef}
                             value={this.state.signForm.passWord}
                             onChange={this.handleChange}
                             onFocus={this.handleFocus}
                             onBlur={this.handleBlur}
                            />
                            <span data-placeholder='Password'></span>
                            <i className='iconfont icon-yanjing_yincang'
                                onClick={this.displayPw}
                            ></i>
                        </div>
                        <div className='txtb'>
                            <input type="text" 
                            id='cpw'
                             value={this.state.signForm.comfirmPassWord}
                             onChange={this.handleChange}
                             onFocus={this.handleFocus}
                             onBlur={this.handleBlur}
                            />
                            <span data-placeholder='Confirm Password'></span>
                        </div>
                        <button onClick={this.handleRegister}>注册</button>
                    </form>
                </div>
                {/* 登录 */}
                <div className='form-container sign-in-container'>
                    <form action="#">
                        <h1>登录</h1>
                        <div className='txtb'>
                            <input type="text" 
                                id='email'
                                value={this.state.loginForm.email}
                                onChange={this.handleChange}
                                onFocus={this.handleFocus}
                                onBlur={this.handleBlur}
                                />
                            <span data-placeholder = 'Email'></span>
                        </div>
                        <div className='txtb'>
                            <input type="password"
                           id='pw'
                           ref={this.pwRef}
                            value={this.state.loginForm.passWord}
                            onChange={this.handleChange}
                             onFocus={this.handleFocus}
                             onBlur={this.handleBlur}
                            />
                            <span data-placeholder = 'Password'></span>
                            <i className='iconfont icon-yanjing_yincang'
                                onClick={this.displayPw}
                            ></i>
                        </div>
                        <a href='#'>忘记密码</a>
                        <button onClick={this.handleLoign}>登录</button>
                    </form>
                </div>
                {/* 覆盖层 */}
                <div className='overlay-container'>
                    <div className='overlay'>
                        <div className='overlay-panel overlay-left'>
                            <h1>已有账号</h1>
                            <p>请你使用账号登录</p>
                            <button className='ghost' id = 'signIn'onClick={this.handleToSignIn}>登录</button>
                        </div>
                        <div className='overlay-panel overlay-right'>
                            <h1>还没有账号?</h1>
                            <p>立即注册加入我们</p>
                            <button className='ghost' id = 'signUp' onClick={this.handleToSignUp}>注册</button>
                        </div>
                    </div>
                </div>
            </div>)
    }
 }
export default Login;