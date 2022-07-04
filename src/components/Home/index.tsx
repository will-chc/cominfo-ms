import {Button} from 'antd'
import request from '../../utils/request'
interface IProps {
    name:String
}
export default (props:IProps)=>{
    function sendEmail(){
        request('/api/email',{},'POST')
    }
    return (
        <div className="wcontainer">
            <Button onClick={sendEmail}>发送邮件</Button>
        </div>
    )
}