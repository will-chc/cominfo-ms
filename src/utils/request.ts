//封装统一请求方法
import axios from 'axios'
import {message} from 'antd'
axios.defaults.headers["Content-Type"] = "application/x-www-form-urlencoded";
const BASE_URL = 'http://localhost:5000'
export default (url:string,data:object={},type:string="GET")=>{
    return new Promise((reslove:Function,reject:Function)=>{
        let promise;
        //执行异步ajax请求
        url= BASE_URL+url;
        if(type === 'GET'){
            promise = axios.get(url,{
                params:data
            })
        }
        else{
            promise = axios.post(url,data)
        }
        promise.then((res:any)=>{
            reslove(res.data)
        }).catch(err=>{
            message.info('请求出错了:'+err.message)
        })
    })
}