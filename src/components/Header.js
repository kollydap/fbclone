import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import {Avatar,IconButton} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from "./StateProvider";
import "../styles/Header.css";



function Header(){
    const[{user},dispatch] = useStateValue();
    return(
        <div className="header">
{/* header left */}
            <div className="header__left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/800px-2021_Facebook_icon.svg.png" alt="" />
                <div className="header__input">
                    <SearchIcon fontSize="large" />
                    <input
                    placeholder="Search flexbook"
                    type="text" />
                </div>
            </div>
{/* header middle */}
            <div className="header__center">
                <div className="header__option header__option--active">
                    <HomeIcon fontSize="large"/> 
                </div>
                <div className="header__option">
                    <FlagIcon fontSize="large"/>  
                </div>
                <div className="header__option">
                    <SubscriptionsOutlinedIcon fontSize="large"/>  
                </div>
                <div className="header__option">
                    <StorefrontOutlinedIcon fontSize="large"/>  
                </div>
                <div className="header__option">
                    <SupervisedUserCircleIcon fontSize="large"/>  
                </div>   
            </div>
        {/*header right  */}
            <div className="header__right">
                <div className="header__info">
                    <Avatar src={user.photoURL} />
                    <h4>{user.displayName}</h4>
                </div>
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>
        </div>
    )
}
export default Header;