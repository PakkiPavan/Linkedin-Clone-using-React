import { Avatar } from '@material-ui/core';
import React from 'react'
import { useSelector } from 'react-redux';
import "./HeaderOption.css";

const HeaderOption = ({ avatar, Icon, title, onClick }) => {
    const user = useSelector(state => state.user.user);
    return (
        <div onClick={onClick} className="headerOption">
            {Icon &&
                <Icon className="headerOption__icon" />
            }
            {
                avatar &&
                <Avatar className="headerOption__icon" src={user?.photoUrl}>
                    {user?.email[0].toUpperCase()}
                </Avatar>
            }
            <h3 className="headerOption__title">{title}</h3>
        </div>
    )
}

export default HeaderOption
