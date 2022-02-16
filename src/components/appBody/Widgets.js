/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState } from 'react'
import styled from 'styled-components';
import feedIcon from '../../images/feed-icon.svg';
import rightArrowIcon from '../../images/right-icon.svg';
import plusIcon from '../../images/plus-icon.svg';
import transIcon from '../../images/transparent.svg';
import elonMask from '../../images/user/elonmask.jpg';
import markBhai from '../../images/user/Mark Zuckerberg.jpg';
import monty from '../../images/user/monty.jpg';
import linkedinBlackLogo from '../../images/app/linkedin-black-logo.png';
import ArrowDownward from '@material-ui/icons/KeyboardArrowDown';

function Widgets() {

    const [follow1, setFollow1] = useState(false);
    const [follow2, setFollow2] = useState(false);
    const [follow3, setFollow3] = useState(false);
    return (
        <Container>
            <FollowCard>
                <Title>
                    <h2>Add to your friend</h2>
                    <img src={feedIcon} alt="feed icon" />
                </Title>
                <FeedList>
                    <li>
                        <a>
                            <img className='profile-pic' src={ elonMask } alt="" />
                        </a>
                        <div>
                            <span>Elon Mask</span>
                            <p>Enterprenuer at Tesla</p>
                            <div className='follow-button' onClick={ () => setFollow1(!follow1) }>
                                <img className='icon' src={ follow1 ? transIcon : plusIcon} alt="plus icon" />
                                <span>{follow1 ? 'Unfollow' : 'Follow'}</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a>
                            <img className='profile-pic' src={ markBhai } alt="" />
                        </a>
                        <div>
                            <span>mark zuckerberg</span>
                            <p>CEO at Facebook</p>
                            <div className='follow-button' onClick={ () => setFollow2(!follow2) }>
                                <img className='icon' src={ follow2 ? transIcon : plusIcon } alt="plus icon" />
                                <span>{ follow2 ? 'Unfollow' : 'Follow' }</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a>
                            <img className='profile-pic' src={ monty } alt="" />
                        </a>
                        <div>
                            <span>monir hossain</span>
                            <p>Owner at Cofe Nir</p>
                            <div className='follow-button' onClick={ () => setFollow3(!follow3) }>
                                <img className='icon' src={ follow3 ? transIcon : plusIcon } alt="plus icon" />
                                <span>{ follow3 ? 'Unfollow' : 'Follow' }</span>
                            </div>
                        </div>
                    </li>
                </FeedList>
                <Recomendation>
                    <span>View all recomendations</span>
                    <img src={ rightArrowIcon } alt="right icon" />
                </Recomendation>
            </FollowCard>
            <BannnerCard>
                <img src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg" alt="job" />
            </BannnerCard>
            <Footer>
                <div className="links">
                    <div>
                        <p>About</p>
                        <p>Accessibility</p>
                        <p>Help Center</p>
                    </div>
                    <div>
                        <p>
                            Privacy &amp; Terms
                            <ArrowDownward />
                        </p>
                        <p>Ad Choice</p>
                    </div>
                    <div>
                        <p>Advertising</p>
                        <p>
                            Business Services
                            <ArrowDownward />
                        </p>
                    </div>
                    <div>
                        <p>Get the Linkedin app</p>
                        <p>More</p>
                    </div>
                </div>
                <div className="copyrights">
                    <img src={ linkedinBlackLogo} alt="" />
                    <p>Linkedin Corporation &copy; 2022</p>
                </div>
            </Footer>
        </Container>
    )
}

const Container = styled.div`
    grid-area: rightside;
    
    @media (max-width: 1200px) {
        display: none;
    }
`;

const FollowCard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    background-color: #fff;
    border-radius: 5px;
    position: relative;
    border: none;
    padding: 12px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

`;
const Title = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    font-size: 11px;
    width: 100%;
    color: rgba(0, 0, 0, 0.7);
`;
const FeedList = styled.div`
    margin-top: 16px;
    li {
        display: flex;
        align-items: center;
        margin: 12px 0;
        position: relative;
        font-size: 14px;

        .profile-pic {
            margin-top: -30px;
            width: 48px;
            height: 48px;
            border-radius: 50%;
        }
        
        & > div {
            margin-left: 10px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;

            & > span {
                text-transform: capitalize;
                font-size: 15px;
                font-weight: 600;
                color: rgba(0, 0, 0, 0.8);
            }
            & > p {
                margin: 5px 0;
                font-size: 13px;
                color: rgba(0, 0, 0, 0.7);
            }
        }

        .follow-button {
            cursor: pointer;
            display: flex;
            align-items: center;
            background-color: transparent;
            color: rgba(0, 0, 0, 0.6);
            box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.5);
            padding: 16px 20px;
            align-items: center;
            border-radius: 15px;
            box-sizing: border-box;
            font-weight: 600;
            display: inline-flex;
            justify-content: center;
            max-height: 32px;
            max-width: 480px;
            text-align: center;
            outline: none;
            
            .icon{
                height: 17px;
                margin-right: 3px;
            }

            span {
                font-size: 15px;
            }

            &:active {
                transform: scale(0.98);
            }
            
            &:hover {
                background-color: rgba(255, 128, 149, 0.1);
                color: rgba(0, 0, 0, 0.8);
                box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.7);
                transition: 0.1s all ease-in-out;
            }
        }
        
    }

`;

const Recomendation =styled.div`
    cursor: pointer;
    width: fit-content;
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 0.7);
    padding: 5px;
    border-radius: 5px;

    &:hover{
        background-color: rgba(0, 0, 0, 0.07);
        color: rgba(0, 0, 0, 0.9);
        transition: .2s all ease;
    }
    &:active{
        transform: scale(0.97);
        transition: .2s all ease;
    }
`;
const BannnerCard =styled.div``;
const Footer =styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .links {
        display: flex;
        flex-direction: column;
        div {
            display: flex;
            align-items: center;
            padding: 8px auto;
            margin: auto;
            font-size: 13px;
            color: rgba( 0, 0, 0, 0.7 );

            p{
                cursor: pointer;
                display: flex;
                align-items: center;
                margin: auto 5px;

                &:hover{
                    text-decoration: underline;
                    color: rgba( 0, 0, 255, 0.6 );
                }
            }
        }
    }
    .copyrights{
        display: flex;
        align-items: center;
        margin-top: 20px;
        font-size: 13px;
        img {
            cursor: pointer;
            height:20px;
            margin-right: 4px;
        }
    }
`;

export default Widgets