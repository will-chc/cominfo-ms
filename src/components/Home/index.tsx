import React,{Component,createRef,useEffect,useRef,useState,useContext,useReducer} from 'react'
import request from '../../utils/request'
interface IState {
   name:string,
   pwd:string,
   isLoading:boolean,
   error:string,
   isLoggedIn:boolean
}
interface Iaction {
   type:string,
   payload?:{}
}
const Home = ()=>{
    
}
export default Home;