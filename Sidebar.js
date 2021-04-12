import React from 'react';
import'./sidebar.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOptions from './SidebarOptions';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import EmailIcon from '@material-ui/icons/Email';
import ListIcon from '@material-ui/icons/List';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizTwoToneIcon from '@material-ui/icons/MoreHorizTwoTone';
import { Button } from '@material-ui/core';


function Sidebar() {
    return (
        <div className="sidebar">
            <TwitterIcon className="sidebar__twitterIcons"/>
            <SidebarOptions active
            Text="Home"
            Icon={HomeIcon}/>
            <SidebarOptions Text="Explore"
            Icon={ExploreIcon}/>
            <SidebarOptions Text="Notifications"
            Icon={NotificationsActiveIcon}/>
            <SidebarOptions Text="Messages"
            Icon={EmailIcon}/>
            <SidebarOptions Text="Lists"
            Icon={ListIcon}/>
            <SidebarOptions Text="Profile"
            Icon={PermIdentityIcon}/>
            <SidebarOptions Text="More" 
            Icon={MoreHorizTwoToneIcon}/>
            <Button  className="tweet__button" varaiant="outlined">Tweet</Button>
        </div>
    )
}

export default Sidebar;
