import React from "react";
import styled from 'styled-components';

function Movies(){
    return(
        <Container>
            <h4>Recommended for you</h4>
            <Content>
                <Wrap>
                    <img src="https://www.teahub.io/photos/full/104-1046174_batman-v-superman-first-poster.jpg" alt=""/>
                </Wrap>
                <Wrap>
                    <img src="https://everydayshouldbetuesday.files.wordpress.com/2021/07/captain-america-winter-soldier-poster.jpeg" alt=""/>
                </Wrap>
                <Wrap>
                    <img src="https://static-koimoi.akamaized.net/wp-content/new-galleries/2017/02/logan-review-1.jpg" alt=""/>
                </Wrap>                
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6502670F26B5BC47D3C0906D2C05D3B02A3FFA28C553BA0B5271D3495641AA24/scale?width=1200&aspectRatio=1.78&format=jpeg" alt=""/>
                </Wrap>
            </Content>
        </Container>
    )
}

export default Movies;

const Container = styled.div`
     
`
const Content = styled.div`
    grid-gap : 25px;
    display : grid;
    grid-template-columns : repeat(4, minmax(0, 1fr)); 
`
const Wrap = styled.div`
    border-radius : 10px;
    cursor : pointer;
    overflow : hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow : rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45,0.94) 0s;

    img {
        width: 100%;
        height : 100%;
        object-fit : cover; 
    }

    &:hover {
        transform : scale(1.05);
        box-shadow : rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        border-color : rgba(249, 249, 249, 0.8);
    }

`