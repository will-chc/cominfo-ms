//防抖
//不能使用箭头函数
export default function debounce(fn:Function,delay:number){
    clearTimeout(fn.id);
    return function(){
        let arg = arguments
        fn.id = setTimeout(()=>{
            fn.apply(this,arg);
        },delay)
    }
}