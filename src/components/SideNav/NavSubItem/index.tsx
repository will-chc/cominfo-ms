import { useRef, useState } from "react"
import NavItem from "../NavItem"
import './index.css'
interface IProps {
    title: string,
    items: Array<object>
}
const NavSubItem = function (props: IProps) {
    const [isShow,setIsShow] = useState<boolean>(false);
    const subGroupRef = useRef<HTMLDivElement>(null)
    function showSubGroup(){
        if(isShow){
            subGroupRef.current!.className = 'sub_group sub_group_hidden';
            setIsShow(false)
        }
        else{
            subGroupRef.current!.className = 'sub_group sub_group_show';
            setIsShow(true)

        }
    }
    function show(){
        subGroupRef.current!.className = 'sub_group sub_group_show';
        setIsShow(true)
    }
    return (
        <div className="nav_sub" onClick ={showSubGroup}>
            <div className="nav_sub_title">
                <span>{props.title}</span>
            </div>
            <div  ref={subGroupRef} className="sub_group sub_group_hidden">
                {props.items.map((item, index) => {
                    return (
                        <NavItem to={item.to} title={item.title} key={index} show={show} />
                    )
                })}
            </div>

        </div>
    )
}
export default NavSubItem