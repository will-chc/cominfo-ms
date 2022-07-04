//防抖
//不能使用箭头函数
let timer;
export default function debounce(fn:Function,delay:number){
    clearTimeout(timer);
    return function(){
        let arg = arguments
        timer = setTimeout(()=>{
            fn.apply(this,arg);
        },delay)
    }
}