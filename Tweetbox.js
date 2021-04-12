import {useState } from 'react';
import { Avatar, Button, IconButton } from '@material-ui/core';
import './Tweetbox.css';
import ImageIcon from '@material-ui/icons/Image';
import React from 'react';
import GifIcon from '@material-ui/icons/Gif';
import PollIcon from '@material-ui/icons/Poll';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import db from '../firebase.js';


function Tweetbox() {
    const [tweet,setTweet]=useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet=(e)=>{
       e.preventDefault();
       db.collection('posts').add({
           displayName:"PavanIlla",
           userName:"Pavan457",
           verified:true,
           text:tweet,
           image:tweetImage,
           avatar:"https://media-exp1.licdn.com/dms/image/C5603AQEfEzEJJsS_vw/profile-displayphoto-shrink_400_400/0/1608176723340?e=1623888000&v=beta&t=cohbZ5BiBNLCmUJGGgP06_dFdUpCimNf0gNbVVnKVRM"
       })
       setTweet("");
       setTweetImage("");
    }
    return (
        <div className="tweet_box">
            <form>
                <div className="tweetBox_Input">
                     <Avatar
                     src="https://media-exp1.licdn.com/dms/image/C5603AQEfEzEJJsS_vw/profile-displayphoto-shrink_400_400/0/1608176723340?e=1623888000&v=beta&t=cohbZ5BiBNLCmUJGGgP06_dFdUpCimNf0gNbVVnKVRM"/>
                     <input 
                     type="text"
                     value={tweet}
                     onChange={(e)=>{setTweet(e.target.value)}}
                     placeholder="Whats happening ?"
                     autoComplete="off"/>
                     <input 
                    onChange = { (e) => setTweetImage(e.target.value) }
                    value = {tweetImage}
                    className = "tweetBox__imageInput"
                    placeholder = "Urls"
                    type = "text"
                />
                     
                </div>
                     <div className="tweetBox-icons">
                         <ImageIcon className="tweetBoxIcons_color"/>
                        <GifIcon className="tweetBoxIcons_color"/>
                        <PollIcon className="tweetBoxIcons_color"/>
                        <EmojiEmotionsIcon className="tweetBoxIcons_color"/>
                        <EventAvailableIcon className="tweetBoxIcons_color"/>
                        <Button onClick={sendTweet} >Tweet</Button>
                    </div>
            </form>
        </div>
    )
}

export default Tweetbox;
