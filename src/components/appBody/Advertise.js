import React from 'react'
import styled from 'styled-components';

function Advertise() {
  return (
  <Container>
    <h5>
      <a href="https://www.upwork.com/">Hiring in a hurry?</a>
    </h5>
    <p>- Find talented pros in record time with Upwork and keep business moving</p>
  </Container>
  )
}

const Container = styled.div`
  margin-top: 50px;
  min-height: 50px;
  padding: 16px 0;
  box-sizing: content-box;
  text-align: center;
  text-decoration: none;
  display: none;
  justify-content: center;

  h5 {
    color: #0166c2;
    font-size: 14px;
    a {
      font-weight: 700;
      text-decoration: none;
    }
  }

  p{
    margin-left: 3px;
    font-size: 14px;
    color: #434649;
    font-weight: 600;
  }
  @media (max-width: 768px){
    display: flex;
    flex-direction: column;
      h5 {
        font-size: 17px;
        a {
          font-weight: 700;
          text-decoration: underline;
        }
      }
      p {
        font-size: 14px;

        &:first-letter{
          color: transparent;
        }
      }
  }
`;

export default Advertise