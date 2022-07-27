import { Outlet } from "react-router-dom";
import SideNav from "../../components/SideNav";
import UserMessage from "../../components/UserMessage";
import css from './index.module.css'
const Home:React.FC = () => {
   return (
      <div className={css.home_container}>
         <div className={`${css.side_nav} ${css.left}`}>
            <div className={css.logo}>logo</div>
              <SideNav />
         </div>
         <div className={`${css.contont} ${css.right}`}>
            <div className={css.header}>
               <div className={css.header_avatar}><UserMessage/></div>
            </div>
            <Outlet/>
         </div>
      </div>
   )
}
export default Home;