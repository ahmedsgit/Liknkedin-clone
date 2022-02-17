/* eslint-disable jsx-a11y/anchor-is-valid */
import PhotoIcon from '@material-ui/icons/PhotoSizeSelectActual';
import VideoIcon from '@material-ui/icons/SubscriptionsRounded';
import EllipsIcon from '@material-ui/icons/MoreHoriz';
import EventIcon from '@material-ui/icons/Event';
import ThumbUpIcon from '@material-ui/icons/ThumbUpAlt';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Reply';
import SendIcon from '@material-ui/icons/Send';
import ArticleIcon from '@material-ui/icons/CalendarViewDay';
import PublicIcon from '@material-ui/icons/Public';
import React, { useState } from 'react';
import styled from 'styled-components';
import userIcon from '../../images/user.svg'
import downIcon from '../../images/down-icon.svg'
import sharedImg from '../../images/user/cover.jpg'

function Feeds() {

    const [filterPopup, setFilterPopup] = useState(false);
    console.log(filterPopup);
    return (
        <Container>
            <ShareBox>
                <div>
                    <img src={ userIcon } alt="" />
                    <button>Start a post</button>
                </div>
                <div>
                    <button>
                        <PhotoIcon className='icon1'/>
                        <span>photo</span>
                    </button>
                    <button>
                        <VideoIcon className='icon2'/>
                        <span>video</span>
                    </button>
                    <button>
                        <EventIcon className='icon3'/>
                        <span>event</span>
                    </button>
                    <button>
                        <ArticleIcon className='icon4'/>
                        <span>Write article</span>
                    </button>
                </div>
            </ShareBox>
            <Filter>
                <hr/>
                <div>
                    <span>Sort by:</span>
                    <div>
                        <span>Top</span>
                        <img src={ downIcon } alt="icon" onClick={ () => setFilterPopup(!filterPopup) }/>
                    </div>
                </div>
            </Filter>
            <Popup className={ `${filterPopup ? "filter-popup" : " "}`}>
                <div>
                    <p>Recent</p>
                    <p>Top</p>
                </div>
            </Popup>
            <Article>
                <SharedActor>
                    <a>
                        <img src={userIcon} alt="userIcon" />
                        <div>
                            <span>Ahmed Sazzad</span>
                            <span>Web Designer</span>
                            <span>
                                Date
                                <p>.</p>
                                <PublicIcon className="privacy-icon"/>
                            </span>
                        </div>
                    </a>
                    <button>
                        <EllipsIcon/>
                    </button>
                </SharedActor>
                <SharedDescription>
                    <span>Description</span>
                    <SharedImg>
                        <img src={sharedImg} alt="postImg" />
                    </SharedImg>
                </SharedDescription>
                <SocialCounts>
                    <li>
                        <button>
                            <img src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb" alt="" />
                            <img src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f" alt="" />
                        </button>
                        <span>Monir Hossain &amp; 20 others</span>
                    </li>
                    <li>
                        <a> 2 comments</a>
                    </li>
                </SocialCounts>
                <SocialActions>
                    <button>
                        <ThumbUpIcon />
                        <span>Like</span>
                    </button>
                    <button>
                        <CommentIcon />
                        <span>Comment</span>
                    </button>
                    <button>
                        <ShareIcon />
                        <span>Share</span>
                    </button>
                    <button>
                        <SendIcon />
                        <span>Send</span>
                    </button>
                </SocialActions>
            </Article>
        </Container>
    );
}

const Container = styled.div``;

const CommonCard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    background-color: #fff;
    border-radius: 5px;
    position: relative;
    border: none;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
const ShareBox = styled(CommonCard)`
    display: flex;
    flex-direction: column;
    color: #958b7b;
    margin: 0 0 8px;
    background: #fff;
    padding: 15px;
    div {
        button{
            cursor: pointer;

            &:active{
                transform: scale(0.99);
            }
        }
        &:nth-child(1){
            display: flex;
            align-items: center;
            margin-bottom: 10px;
            img {
                cursor: pointer;
                height: 45px;
                border-radius: 50%;
            }
            button {
                background-color: rgba( 0, 0, 0, 0.07);
                border: 1px solid rgba( 0, 0, 0, 0.4);
                padding: 15px;
                width: 100%;
                margin-left: 10px;
                border-radius: 35px;
                text-align: left;
                color: rgba( 0, 0, 0, 0.5);
                font-weight: bold;
                font-size: 14px;
            }
        }
        &:nth-child(2){
            margin: 5px -10px 0 -10px;
            display: flex;
            align-items: center;
            justify-content: space-around;

            button {
                display: flex;
                align-items: center;
                text-transform: capitalize;
                background-color: transparent;
                padding: 8px 6px;
                border-radius: 5px;
                border: 0;
                span {
                    color: rgba( 0, 0, 0, 0.6);
                    font-weight: bold;
                    font-size: 14px;
                    margin-left: 5px;
                }
                .icon1 {
                    color: rgba(102, 102, 255, 0.8);
                }
                .icon2 {
                    color: rgba(0, 179, 0, 0.8);
                }
                .icon3 {
                    color: rgba(255, 175, 26, 0.8);
                }
                .icon4 {
                    color: rgba(255, 102, 128, 0.8);
                }
                &:hover{
                    background-color: rgba( 0, 0, 0, 0.1);
                    transition: background-color 0.4s ease-in-out;
                }
            }
        }
    }
`;
const Filter = styled.div`
display: flex;
align-items: center;
    margin: 10px;
    hr {
        height: 1px;
        width: 80%; 
        border-width: 0; 
        background-color: rgba( 0, 0, 0, 0.3);
    }
    div {
        position: relative;
        margin-left: 10px;
        width: 20%; 
        display: flex;
        align-items: center;

        span {
            font-size: 13px;
            color: rgba( 0, 0, 0, 0.7);
        }

        img {
            cursor: pointer;
        }
        div {
            font-weight: 700;
        }
    }
`;

const Popup = styled.div`
        display: none;
        width: 100%;
        height: 90px;
        position: relative;
        margin-top:-10px;
        div {
            position: absolute;
            width: 100px;
            height: 70px;
            right: 0;
            background-color: #fff;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin: 5px 20px 30px 0;
            border-radius: 5px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            p{
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 3px auto;
                width: 100%;
                height: 30px;
                text-align: center;
                background-color: rgba();
                font-size: 13px;
                &:hover{
                    background-color: rgba(0, 0, 0, 0.07);
                    border-radius: 5px;
                }
                &:active{
                    transform: scale(0.95);
                }
            }
        }

        &.filter-popup{
            display: block;
        }
`;

const Article = styled(CommonCard)`
    padding: 0;
    margin: 0 0 8px;
    overflow: visible;
`;

const SharedActor = styled.div`
    padding-right: 40px;
    flex-wrap: nowrap;
    padding: 12px 16px 0;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    a {
        margin-right: 12px;
        display:flex;
        flex-grow: 1;
        overflow: hidden;
        text-decoration: none;

        img {
            height: 48px;
            width: 48px;
            border-radius: 50%;
        }

        div {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            flex-basis: 0;
            margin-left: 8px;
            overflow: hidden;
            span {
                text-align: left;

                &:first-child {
                    font-size: 14px;
                    font-weight: 700;
                    color: rgba(0, 0, 0, 0.8);
                }
                &:nth-child(2) {
                    margin-top: 3px;
                    font-size: 12px;
                    color: rgba(0, 0, 0, 0.8);
                }
                &:last-child {
                    display: flex;
                    align-items: center;
                    margin-top: 3px;
                    font-size: 11px;
                    color: rgba(0, 0, 0, 0.8);
                    p {
                        margin-left: 4px;
                        margin-top: -10px;
                        font-size: 20px;
                        font-weight: bolder;
                        color: rgba(0, 0, 0, 0.7);
                    }
                    .privacy-icon{
                        margin-left: 5px;
                        font-size: 20px;
                        color: rgba(0, 0, 0, 0.7);
                    }
                }
            }
        }
    }

    button {
        cursor: pointer;
        position: absolute;
        right: 12px;
        top: 0;
        background-color: transparent;
        border: none;
        outline: none;

        &:active{
            transform: scale(0.95);
        }
    }
`;

const SharedDescription = styled.div`
    padding: 0 16px;
    overflow: hidden;
    color: rgba( 0, 0, 0, 0.9);
    font-size: 14px;
    text-align: left;
`;
const SharedImg = styled.div`
    margin-top: 8px;
    width: 100%;
    display: block;
    position: relative;
    background-color: #f9fafb;
    img {
        object-fit: contain;
        width: 100%;
        height: 100%;
    }
`;

const SocialCounts = styled.div`
    line-height: 1.3;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: auto;
    margin: 0 16px;
    padding: 8px 0;
    border-bottom: 1px solid #e9e5df;
    list-style: none;
    color: rgba(0, 0, 0, 0.7 );
    li {
        display: flex;
        align-items: center;
        margin-right: 5px;
        font-size: 12px;
        button {
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: transparent;
            border: none;
            img {
                margin-left: -5px;
                height: 20px;
                padding: 1px;
                border-radius: 50%;
            }
        }
        span, a {
            cursor: pointer;
        }
        span:hover, a:hover {
            text-decoration: underline;
            color: rgba( 0, 0, 230, 0.7 );
        }
        span:active, a:active {
            transform: scale(0.97);
        }

        a {
            text-decoration: none;
            text-transform: capitalize;
        }
    }

`;

const SocialActions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 5px;
    button {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        margin-bottom: 5px;
        padding: 10px 20px;
        border-radius: 5px;
        border: none;
        color: rgba(0, 0, 0, 0.5 );
        span {
            font-size: 15px;
            margin-left: 3px;
            color: rgba(0, 0, 0, 0.6 );
            font-weight: 600;
        }
        &:hover {
            background-color: rgba(0, 0, 0, 0.08 );
            transition: 0.2s ease-in;
        }
    }
`;

export default Feeds;