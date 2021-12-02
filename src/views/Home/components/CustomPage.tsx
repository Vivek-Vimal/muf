import React from 'react'
import styled from 'styled-components'
import TwitterCard from './TwitterCard'

const StyledCustomPage  = styled.section`
    background-image: url('/bg.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-color: #FFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 0 3rem  0;
     @media only screen and (max-width: 998px) {
        background-size: auto 100%;
       }
`
const MainImage = styled.div`
    height: 25rem;
    width: 20rem;
    margin: 4rem 0 3rem 0;
`
const IconContainer = styled.div`
      width: 100%;
    background-color: rgb(242, 242, 242);
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 9rem;
    @media only screen and (max-width: 768px) {
      width: 100%;
      display: grid;
    grid-template-columns: repeat(auto-fit, minmax(3rem, 1fr));
    place-items: center;
     }
`
const Icon = styled.div`
  width: 4rem;
  height: 4rem;
  cursor: pointer;
  @-webkit-keyframes hvr-pop {
    50% {
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
    }
  }
  @keyframes hvr-pop {
    50% {
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
    }
  }
 
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  
  &:hover,&:focus, &:active {
    -webkit-animation-name: hvr-pop;
    animation-name: hvr-pop;
    -webkit-animation-duration: 0.3s;
    animation-duration: 0.3s;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
  }
  @media only screen and (max-width: 768px) {
    
    width: 2rem;
  height: 2rem;
   }
`


const CustomPage = () => {
    return (
        <StyledCustomPage>
              <IconContainer>
            <Icon>
              <img src="/1.png" alt="" style={{width:"100%",height:"100%"}} />
            </Icon>
            <Icon>
              <img src="/2.png" alt="" style={{width:"100%",height:"100%"}} />
            </Icon>
            <Icon>
              <img src="/3.png" alt="" style={{width:"100%",height:"100%"}} />
            </Icon>
            <Icon>
              <img src="/4.png" alt="" style={{width:"100%",height:"100%"}} />
            </Icon>
            <Icon>
              <img src="/5.webp" alt="" style={{width:"100%",height:"100%"}} />
            </Icon>
            <Icon>
              <img src="/6.png" alt="" style={{width:"100%",height:"100%"}} />
            </Icon>
            <Icon>
              <img src="/7.png" alt="" style={{width:"100%",height:"100%"}} />
            </Icon><Icon>
              <img src="/8.png" alt="" style={{width:"100%",height:"100%"}} />
            </Icon>
        </IconContainer>
            <MainImage>
                <img src="/man.png" alt="" style={{width:"100%",height:"100%"}} />
            </MainImage>
            <TwitterCard />
        </StyledCustomPage>
    )
}

export default CustomPage
