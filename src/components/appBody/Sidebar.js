/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import backgroundPic from '../../images/card-bg.svg';
import itemIcon from '../../images/item-icon.svg';
import addPhoto from '../../images/photo.svg';
import premiumIcon from '../../images/premium-icon.svg';
import widgetIcon from '../../images/widget-icon.svg';
import plusIcon from '../../images/plus-icon.svg';


function Sidebar() {
    return (
        <Container>
            <ArtCard>
                <UserInfo>
                    <CardBackground/>
                    <a href="/profile">
                        <Photo/>
                        <Link>Welcome, there!</Link>
                    </a>
                    <a href="/">
                        <AddPhotoText>Add a photo</AddPhotoText>
                    </a>
                </UserInfo>
                <Widget>
                    <a href="/">
                        <div>
                            <span>Connections</span>
                            <span>Grow your network</span>
                        </div>
                        <img src={widgetIcon} alt="plus icon" />
                    </a>
                </Widget>
                <Premium>
                    <p>Access exclusive tools &amp; insights</p>
                    <div>
                        <img src={ premiumIcon} alt="premium icon" />
                        <h6>Get Hired faster,try premium free</h6>
                    </div>
                </Premium>
                <Item>
                    <span>
                        <img src={itemIcon} alt="plus icon" />
                        My Items
                    </span>
                </Item>
            </ArtCard>
            <CommunityCard>
                <a>
                    <span>Groups</span>
                </a>
                <a>
                    <span>
                        Events
                        <img src={plusIcon} alt="" />
                    </span>
                </a>
                <a>
                    <span>Follow Hashtags</span>
                </a>
                <div className='border-bottom'/>
                <button>Discover more</button>
            </CommunityCard>
        </Container>
    )
}

const Container = styled.div`
    grid-area: leftside;
`;
const ArtCard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    background-color: #fff;
    border-radius: 5px;
    transition: box-shadow 83ms;
    position: relative;
    border: none;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const UserInfo = styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    padding: 12px 12px 16px;
    word-wrap: break-word;
    word-break: break-word;
    
    & > a {
        text-decoration: none; 
    }
`;
const CardBackground = styled.div`
    background: url(${ backgroundPic });
    background-position: center;
    background-size: 462px;
    height: 54px;
    margin: -12px -12px 0;
`;
const Photo = styled.div`
    box-shadow: none;
    background-image: url(${ addPhoto });
    width: 72px;
    height: 72px;
    box-sizing: border-box;
    background-color: white;
    background-position: center;
    background-size: 60%;
    background-repeat: no-repeat;
    border: 2px solid white;
    margin: -38px auto 12px;
    border-radius: 50%;
`;
const Link = styled.div`
    line-height: 1.5;
    font-size: 16px;
    font-weight: 600;
    color: rgba( 0, 0, 0, 0.9 );
`;
const AddPhotoText = styled.div`
    color: #0166c2;
    margin-top: 4px;
    font-size: 12px;
    line-height: 1.33;
    font-weight: 400;
`;

const Widget = styled.div`
    border-bottom: 1px solid rgba( 0, 0, 0, 0.15 );
    & > a {
        text-decoration:none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 12px;

        &:hover {
            background-color: rgba( 0, 0, 0, 0.08 );
        }

        div {
            display: flex;
            flex-direction: column;
            text-align: left;
            span {
                font-size: 13px;
                font-weight: 600;
                line-height: 1.33;
                &:first-child {
                    color: rgba( 0, 0, 0, 0.6 );
                }
                &:nth-child(2) {
                    color: rgba( 0, 0, 0, 1 );
                }
            }
        }
    }

    svg {
        color: rgba( 0, 0, 0, 1 );
    }
`;

const Premium = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid rgba( 0, 0, 0, 0.15 );
    p{
        padding-top: 12px;
        font-size: smaller;
        color: rgba( 0, 0, 0, 0.5 );
    }
    div {
        display: flex;
        align-items: center;
        margin: 5px auto;
        padding-bottom: 12px;

        img{
            margin-right: 5px;
        }

        h6 {
            color: rgba( 0, 0, 0, 0.8 );
            font-size: 13px;
            text-transform: capitalize;
        }
    }
    &:hover {
        background-color: rgba( 0, 0, 0, 0.08 );
    }
`;

const Item = styled.a`
    border-color: rgba( 0, 0, 0, 0.8 );
    text-align: left;
    padding: 12px;
    font-size: 12px;
    display: block;
    span {
        display: flex;
        align-items:center;
        font-weight: 600;
        color: rgba( 0, 0, 0, 1 );
        svg {
            color: rgba( 0, 0, 0, 0.6 );
        }
    }
    &:hover {
        background-color: rgba( 0, 0, 0, 0.08 );
    }
`;

const CommunityCard = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px;
    overflow: hidden;
    margin-bottom: 8px;
    background-color: #fff;
    border-radius: 5px;
    transition: box-shadow 83ms;
    position: relative;
    border: none;
    color: rgba(0, 0, 200, 0.7);
    font-weight: 600;
    font-size: 12px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    a {
        text-decoration: none;
        margin: 5px 0 5px 10px;
        max-width: fit-content;

        span {
            cursor: pointer;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;

            img {
                cursor: pointer;
                padding: 5px;
                border-radius: 10px;
                transition: .3s ease-in-out;
            }
            img:hover {
                background-color: rgba( 0, 0, 0, 0.15 );
                padding: 5px;
            }
        }
        &:nth-child(2){
            max-width: 100%;
        }
    }

    .border-bottom{
        border-bottom: 1px solid rgba( 0, 0, 0, 0.15 );
        margin: 3px;
    }
    button {
        cursor: pointer;
        background-color: transparent;
        border: none;
        color: rgba( 0, 0, 0, 0.6 );
        font-weight: 600;
        padding: 10px 0;
        &:hover {
            background-color: rgba( 0, 0, 0, 0.15 );
            border-radius: 5px;
        }
        &:active {
            transform: scale(0.95);
        }
    }

`;

export default Sidebar