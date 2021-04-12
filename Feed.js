import React,{useEffect, useState} from 'react'
import './Feed.css';
import Posts from './Posts';
import Tweetbox from './Tweetbox';
import db from '../firebase.js'

function Feed() {
    const [posts,setPosts]=useState([]);
    const data=() => {
        db.collection('posts').onSnapshot(snapshot =>{
            setPosts(snapshot.docs.map(doc => doc.data()))
        })
    };
    useEffect(data,[])
    return (
        <div className="feed"> 
            {/* Home */}
            <div className="feed__header" >
                <h3>Home</h3>
            </div>
            {/* Tweet */}
            <Tweetbox/>
            {/* posts */}
            { posts.map((post)=>(
                
                <Posts
                displayName={post.displayName}
                userName={post.userName}
                text={post.text}
                verified={post.true}
                avatar={post.avatar}
                image={post.image}

                />
            ))}
        </div>
    )
}



export default Feed
