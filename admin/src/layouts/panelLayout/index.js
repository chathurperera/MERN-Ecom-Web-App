import React from 'react'
import { Outlet } from "react-router-dom";
import Sidebar from '../../components/Sidebar';
import classes from './panelLayout.module.scss';

const PanelLayout = () => {
  return (
    <div className={classes.layout}>
        <Sidebar />
        <Outlet />
    </div>
  )
}

export default PanelLayout