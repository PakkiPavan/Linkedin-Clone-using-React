import { Avatar } from '@material-ui/core';
import React from 'react'
import { useSelector } from 'react-redux';
import "./Sidebar.css";

const Sidebar = () => {
    const user = useSelector(state => state.user.user);

    const recentItem = (topic) => {
        return (
            <div className="sidebar__recentItem">
                <span className="sidebar__hash">#</span>
                <p>{topic}</p>
            </div>
        )
    }
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img
                    src="https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"
                    alt=""
                />
                <Avatar src={user.photoUrl} className="sidebar__avatar" >
                    {user.email[0].toUpperCase()}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2,343</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">2,448</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem("React JS")}
                {recentItem("Programming")}
                {recentItem("SoftwareEngineering")}
                {recentItem("Design")}
                {recentItem("Developer")}
            </div>
        </div>
    )
}

export default Sidebar
