import Echarts from './DataChart';
import './index.css'
import WorkSpace from './WorkSpace';

function HomePage(){
    return (
        <div className="home_page">
            <div className="home_page_container">
                <div className="charts_container clearfix">
                    <div className='charts'><Echarts/></div>
                    <div className='charts_right'>
                        <div className='data_number'><span>100,800</span><div className='item'>浏览量</div></div>
                        <div className='data_number'><span>78,880</span><div className='item'>注册数</div></div>
                        <div className='data_number'><span>64,230</span><div className='item'>报名数</div></div>
                    </div>
                </div>
                <WorkSpace/>
            </div>
        </div>
    )
}
export default HomePage;