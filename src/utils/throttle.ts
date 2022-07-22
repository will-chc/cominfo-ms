//节流
export default function throttle(fn:Function,delay:number){
   let timer:any=null;
   //不能使用箭头函数
    return function (){
        let args = arguments;
        if(timer){
            return ;
        }
        timer = setTimeout(()=>{
            fn.call(this,args);
            timer = null;
        },delay)
    }

}