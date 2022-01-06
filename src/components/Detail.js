import React from 'react';
import styled from 'styled-components';

function Detail() {
    return (
        <Container>
            <Background>
                <img src="/images/886732.jpg" alt=''/>
            </Background>
            <ImageTitle>
                <img src='/images/bvs.png' alt=''/>
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src='/images/play-icon-black.png' alt=''/>
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                    <img src='/images/play-icon-white.png' alt=''/>
                    <span>Trailer</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src='/images/group-icon.png' alt=''/>
                </GroupWatchButton>
            </Controls>
            <SubTitle>
                2016 * 3h 30m * Sci-fi * Not for kids or MARVEL fans
            </SubTitle>
            <Description>
            The subtitle "Dawn of Justice" isn't just a tease for the eventual JUSTICE LEAGUE movie,<br/>
            it is also the second most important theme right behind hope because BATMAN V SUPERMAN:<br/>
            DAWN OF JUSTICE is a movie that explores the concept of how realism and cynicism come<br/> 
            together to overthrow idealism.
            </Description>
        </Container>
    )
}

export default Detail;

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(2.5vw + 5px); 
    position : relative;
`
const Background = styled.div`
    position : fixed;
    top : 68px;
    left: 0;
    bottom : 0;
    right : 0;
    z-index: -1;
    opacity : 0.8;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const ImageTitle = styled.div`
    height : 30vh;
    width: 35vw;
    min-height: 170px;
    min-width: 200px;
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`
const Controls = styled.div`
    display: flex;
    margin-left: 50px;
    align-items: center;

`
const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 12px;
    padding: 0px 24px;
    margin-right: 20px;
    display: flex;
    align-items: center;
    height: 40px;
    background: rgb(249, 249, 249);
    border:none;
    letter-spacing: 1.8px;
    cursor:pointer;

    &:hover{
        background : rgb(198, 198, 198);

    }
`
const TrailerButton = styled(PlayButton)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
    text-transform: uppercase;    
`

const AddButton = styled.button`
    margin-right: 16px;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius : 50%;
    border: 2px solid white;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;

    span {
        font-size : 30px;
        color: white;
        }
`

const GroupWatchButton = styled(AddButton)`
    background : rgb(0, 0, 0);
`
const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    margin-left: 50px;
    font-size: 15px;
    min-height : 20px;
    margin-top: 26px;
`
const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-left: 50px;
    margin-top:16px;
    color: rgb(249, 249, 249)
`