import './index.css'
import NavItem from './NavItem'
import NavSubItem from './NavSubItem'
import { useEffect, useState } from 'react'
import curRouteContext from '../../context/curRouteContext'
import { useLocation } from 'react-router'

const SideNav: React.FC = () => {
    const list = [
        {
            to: '/',
            title: '首页',
            children: [
                {
                    to: '/',
                    title: '首页',
                    children: []
                }
            ]
        },
        {
            to: '/message',
            title: '信息管理',
            children: [
                {
                    to: '/message',
                    title: '公告查看',
                    children: []
                },
                {
                    to: '/message/publish',
                    title: '发布公告',
                    children: []
                },
            ]
        },
        {
            to: '/examine',
            title: '审核',
            children: [
                {
                    to: '/post',
                    title: '团队审核',
                    children: []
                },
                {
                    to: '/examine/works',
                    title: '作品审核',
                    children: []
                },
            ]
        }, {
            to: '/putin',
            title: '作品入库',
            children: [
                {
                    to: '/putin',
                    title: '作品入库',
                    children: []
                }
            ]
        },
        {
            to: '/judge',
            title: '裁判管理',
            children: [
                {
                    to: '/judge',
                    title: '裁判管理',
                    children: []
                }
            ]
        },
        {
            to: '/score',
            title: '录入分数',
            children: [
                {
                    to: '/score',
                    title: '录入分数',
                    children: []
                }
            ]
        },

    ]
    const location = useLocation()
    const [curRoute, setCurRoute] = useState<string>('/');
    useEffect(() => {
        setCurRoute(location.pathname);
        console.log(curRoute);

    }, [location.pathname])
    return (
        <curRouteContext.Provider value={curRoute}>
            <div className="nav_container">
                <ul>
                    {list.map((item, index) => {
                        if (item.children.length > 1) {
                            return (
                                <NavSubItem title={item.title} items={item.children} />
                            )
                        }
                        else {
                            return (
                                <NavItem to={item.to} title={item.title} key={index} show={() => { }} />
                            )
                        }

                    })}
                </ul>

            </div>
        </curRouteContext.Provider>
    )


}
export default SideNav
{/* <Menu theme='dark' mode='inline'>
                {list.map((item, index) => {
                    if (item.children.length) {
                        return (
                            <Menu.SubMenu
                                title={item.title}
                                key={index}
                            >
                                {item.children.map((child,i) =>{
                                    return (
                                        <NavItem key={i} {...child}></NavItem>
                                    )
                                })}
                            </Menu.SubMenu>
                        )
                    }
                    return (
                        <NavItem key={index} {...item}></NavItem>
                    )

                })}
            </Menu> */}