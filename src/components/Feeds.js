import CalenderViewIcon from '@material-ui/icons/CalendarViewDay';
import CreateIcon from '@material-ui/icons/Create';
import EventIcon from '@material-ui/icons/EventNote';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionIcon from '@material-ui/icons/Subscriptions';
import '../styles/feeds.css';
import FeedInputOption from './FeedInputOption';


function Feeds() {
    return (
        <div className='feeds'>
            <div className="feed-input-container">
                <div className="feed-input">
                    <CreateIcon/>
                    <form action="">
                        <input type="text" />
                        <button type='submit'>Send</button>
                    </form>
                </div>
                <div className="feed-input-options">
                    <FeedInputOption Icon={ImageIcon} title="photo" color="#70B5F9"/>
                    <FeedInputOption Icon={SubscriptionIcon} title="Video" color="#E7A33E"/>
                    <FeedInputOption Icon={EventIcon} title="Event" color="#C0CBCD"/>
                    <FeedInputOption Icon={CalenderViewIcon} title="Write Article" color="#7FC15E"/>
                </div>
            </div>
        </div>
    )
}

export default Feeds