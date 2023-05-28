import styled from "styled-components";
import mainBackground from "../../asset/images/mainBackground.jpg";

export const BodyDiv = styled.div`
    
    width: 100%;

    /* 배경 흐리게 하기 */
    position: relative;

    &::before {
        content: "";
        background-image: url(${mainBackground});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        position: absolute;
        opacity: 0.3;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        z-index: -1;
    }

    form{
        margin-top: 5%;
    }

    form p{
        margin: 0 auto;
        text-align: right;
        display: block;
        width: 40%;
        font-family: serif;
    }

    form p:nth-child(1){

        select{
                opacity: 0.7;
                width: 100%;
                text-align: center;
                border: none;
                border-radius: 5px;
                height: 25px;
        }
    }

    form p:nth-child(2){

    }

    form p:nth-child(3){

    }

    form p:nth-child(4){

    }

    form p:nth-child(5){

    }

    form p:nth-child(6){

    }

    form p:nth-child(7){

    }

    form p:nth-child(8){

    }

    form p input{
        opacity: 0.7;
        width:40%;
        margin-top: 4%;
        border: none;
        border-radius: 5px;
        height: 25px;
        text-align: center;
    }
`

export const Title = styled.h1`
    text-align: center;
    font-family: 'Times New Roman', Times, serif;
    font-size: 170%;
    margin: 0 auto;
    padding-top: 10%;

    p{
        margin: 0 auto;
        margin-top: 3%;
        display: block;
        width:70%;
    }
    p:nth-child(1){
        
    }
    p:nth-child(2){

    }
    p:nth-child(3){
        font-size: 70%;
    }
    p:nth-child(4){
        font-size: 70%;
        transform: translateX(-30%);
    }
    p:nth-child(5){
        font-size: 70%;
        transform: translateX(10%);
    }
`

export const ResultBox = styled.div`
    display: flex;
    width: 60%;
    margin: 0 auto;
    margin-top: 5%;
    margin-bottom: 5%;
    text-align: center;
    height: 50px;
    line-height: 50px;
    font-family: serif;

    div{
        width: calc(100% / 3);
        opacity: 0.7;
        border-radius: 20px;
    }
    
    div:nth-child(1){
        
    }

    div:nth-child(2){

    }

    div:nth-child(3){

    }

    .win{
        background-color: skyblue;
        color:#fff;
    }

    .draw{
        background-color: yellow;
        color:#000;
    }

    .lose{
        background-color: red;
        color:#fff;
    }

    .initial{

    }
    
`

export const Comment = styled.p`
    font-family: serif;
    text-align: center;
    padding-bottom: 10%;
`