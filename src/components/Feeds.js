import firebase from 'firebase/compat/app';
import { Avatar } from '@material-ui/core';
import CalenderViewIcon from '@material-ui/icons/CalendarViewDay';
import CreateIcon from '@material-ui/icons/Create';
import EventIcon from '@material-ui/icons/EventNote';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionIcon from '@material-ui/icons/Subscriptions';
import { useEffect, useState } from 'react';
import { db } from '../backend/firebase';
import user from '../images/user/ahmed.jpg';
import '../styles/feeds.css';
import FeedInputOption from './FeedInputOption';
import Post from './Post';


function Feeds() {
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").orderBy("timeStamp", "desc").onSnapshot((snapshot) =>
        setPosts(
            snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
                }
            ))
        ))
    }, [])
    
    const sendPost = (event) =>{
        event.preventDefault();

        db.collection('posts').add({
            audience: 'friends',
            name: 'ahmed Sazzad',
            desc: 'Web Designer',
            photoUrl: user,
            message: input,
            timeStamp: firebase.firestore.FieldValue.serverTimestamp(),

        });
        setInput("");
    }
    return (
        <div className='feeds'>
            <div className="feed-input-container">
                <div className='feed-input-with-avatar'>
                    <Avatar className='user-avatar' src={user} sizes='large'/>
                    <div className="feed-input">
                        <CreateIcon />
                        <form action="">
                            <input value={ input } onChange={ e => setInput(e.target.value)} type="text" placeholder='Start a post' />
                            <button onClick={sendPost} type='submit'>Send</button>
                        </form>
                    </div>
                </div>
                <div className="feed-input-options">
                    <FeedInputOption Icon={ImageIcon} title="photo" color="#70B5F9"/>
                    <FeedInputOption Icon={SubscriptionIcon} title="Video" color="#E7A33E"/>
                    <FeedInputOption Icon={EventIcon} title="Event" color="#C0CBCD"/>
                    <FeedInputOption Icon={CalenderViewIcon} title="Write Article" color="#7FC15E"/>
                </div>
            </div>
            { posts.map(({ id, data: { audience, name, desc, message, photoUrl} }) => (
                <Post key={ id } audience={ audience } name={ name } desc={ desc } photoUrl={ photoUrl } message={ message }/>
            ))}
        </div>
    )
}

export default Feeds