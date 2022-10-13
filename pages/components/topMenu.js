import React,{useEffect} from 'react'
import {Text, Grid} from '@mantine/core'
import { useStyles } from './__styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default function TopMenu({ScrollTarget, page}){

const {classes} = useStyles()
    return(
    <>
     <div>
          <ul className={classes.topMenu}>
            <li className={classes.homeLi} onClick={() => ScrollTarget("home")}><a href='#' className={page=="home"?classes.active:''}>Home</a></li>
            <li className={classes.workLi} onClick={() => ScrollTarget("servicos")}><a href="#" className={page=="servicos"?classes.active:''}>Serviços</a></li>
            <li className={classes.clientLi} onClick={() => ScrollTarget("clientes")}><a href="#" className={page=="clientes"?classes.active:''}>Clientes</a></li>
            <li className={classes.businessLi} onClick={() => ScrollTarget("empresa")}><a href="#" className={page=="empresa"?classes.active:''}>A Empresa</a></li>
          </ul>
          <div className="content">
             
          </div>
        </div>
    </>
    )
}