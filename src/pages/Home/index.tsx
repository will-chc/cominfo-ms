import { Outlet } from "react-router-dom";
import SideNav from "../../components/SideNav";
import UserMessage from "../../components/UserMessage";
import './index.css'
const Home:React.FC = () => {
   return (
      <div className="home_container">
         <div className="side_nav left">
            <div className="logo">logo</div>
              <SideNav />
         </div>
         <div className="contont right">
            <div className="header">
               <div className="header_avatar"><UserMessage/></div>
            </div>
            <Outlet/>
         </div>
      </div>
   )
}
export default Home;