import { Avatar } from 'antd';
import './index.css'
import MyWorkList from './MyWorkList';
function WorkSpace() {
    return (
        <div className="workspace">
            <div className="workspace_header"><div className='title'>工作台</div></div>
            <div className="workspace_content">
                <div className="content_top clearfix">
                    <div className='title'>工作台</div>
                    <div className="left">
                        <div className='avatar'>  <Avatar size={84} /></div>
                        <div className='text'>
                            <div className='welcome_text'>上午好，lalalalalala</div>
                            <div className='tag'>前端攻城狮 | 峡谷召唤师 | 提瓦特旅行者</div>
                        </div>
                    </div>

                    <div className="right">
                        <div className="tagList clearfix">
                            <div className='taglist_item'>
                                <div className='item_title'>项目数</div>
                                <div className='item_number'>56</div>
                            </div>
                            <div className='dividing_line'></div>
                            <div className='taglist_item'>
                                <div className='item_title'>项目数</div>
                                <div className='item_number'>56</div>
                            </div>
                            <div className='dividing_line'></div>
                            <div className='taglist_item'>
                                <div className='item_title'>项目数</div>
                                <div className='item_number'>56</div>
                            </div>

                        </div>
                    </div>
                </div>
                <MyWorkList />
            </div>
        </div>
    )
}
export default WorkSpace;