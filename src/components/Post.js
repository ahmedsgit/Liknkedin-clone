import { Avatar } from '@material-ui/core';
import Public from '@material-ui/icons/Public';
import Friends from '@material-ui/icons/People';
import OnlyMe from '@material-ui/icons/Lock';
import ThumbUp from '@material-ui/icons/ThumbUpOutlined';
import Comment from '@material-ui/icons/Comment';
import Share from '@material-ui/icons/ShareOutlined';
import Send from '@material-ui/icons/SendOutlined';
import '../styles/post.css';
import FeedInputOption from './FeedInputOption';


function Post({ name, desc, message, photoUrl, audience}) {
    
    const getAudience = (audienceType) => {
        if(audienceType==='onlyMe')
            return OnlyMe;
        else if(audienceType === 'friends')
            return Friends;
        else return Public;
    }
    const AudienceValue = getAudience(audience);
    return (
        <div className='post'>
            <div className="post-header">
                <Avatar src={ photoUrl } />
                <div className="post-info">
                    <h2>{ name }</h2>
                    <p>{ desc }</p>
                    <div className='audience'>
                        <p>1 w</p>
                        <p className='dot'>.</p>
                        <AudienceValue style={ { fontSize: 15, color:'gray' } }/>
                    </div>
                </div>
            </div>
            <div className="post-body">
                <p>{ message }</p>
            </div>
            <div className='post-button'>
                <FeedInputOption title="Like" Icon={ ThumbUp} color="gray"/>
                <FeedInputOption title="Comment" Icon={ Comment } color="gray"/>
                <FeedInputOption title="Share" Icon={ Share } color="gray"/>
                <FeedInputOption title="Send" Icon={ Send } color="gray"/>
            </div>
        </div>
    )
}

export default Post;