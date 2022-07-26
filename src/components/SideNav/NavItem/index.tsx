import { useContext, useEffect, useRef, useState } from "react"
import { Link, Route } from "react-router-dom"
import './index.css'
import curRouteContext from '../../../context/curRouteContext'

interface IProps {
    to: string,
    title: string,
    show:Function
}
const NavItem = (props: IProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const curRoute = useContext(curRouteContext);
    function stopPop(e:any){
        e.stopPropagation()
    }
    useEffect(()=>{        
        if(curRoute==props.to){
            ref.current!.className +=' nav_item_active'
            props.show();
        }
        else{
            ref.current!.className = 'nav_item';
        }
    },[curRoute])
    return (
        <div onClick={stopPop} ref={ref} className="nav_item">
            <li >
                <Link to={props.to}>{props.title}</Link>
            </li>
        </div>

    )
}
export default NavItem

// interface IProps {
//     path:string,
//     element:ReactNode
// }
// const NavItem = (props:IProps) => {
//         return (
//             <div className="nav_item">
//                  <Route path={props.path} element={props.element}/>
//             </div>
//         )
// }