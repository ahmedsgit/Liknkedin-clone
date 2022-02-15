import React from 'react'
import styled from 'styled-components';
import backgroundPic from '../../images/card-bg.svg';
import addPhoto from '../../images/photo.svg';


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
                        <img src="" alt="" />
                    </a>
                </Widget>
                <Item>
                    <span>
                        <img src="" alt="" />
                    </span>
                </Item>
            </ArtCard>
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

const Widget = styled.div``;
const Item = styled.a``;

export default Sidebar