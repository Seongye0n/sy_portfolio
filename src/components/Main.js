import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import '../style/styles.scss';

const StyleMain = styled.div`
    position:absolute;
    width:100%;
    height:93vh;

    @media screen and (max-width:1023px) {
        width:100%;
        height:40vh;
    }
`;

const StyleMainDiv = styled.div`
    position:absolute;
    width:80%;
    height:75%;
    left:50%;
    top:60%;
    transform: translate(-50%,-50%);

    @media screen and (max-width:1023px) {
        width:90%;
        height:100%;
        left:50%;
        height:75%;
        top:58.5%;
    }
`;

const StyleProfile = styled.div`
    position: absolute;
    display: grid;
    grid-Template-Columns:0.8fr 1.2fr;
    width:90%;
    height:80%;
    margin: auto;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
    @media screen and (max-width:1023px) {
        width:100%;
        height:100%;
    }
`;

const Styleimg = styled.div`
    position: relative;
    padding-top:3%;
    padding-left:12%;
    @media screen and (max-width:1023px) {
        padding-top:10%;
        padding-left:5%;
    }
`;

const ProfileText = styled.div`
    position: relative;
    padding:100px 0px;
    @media screen and (max-width:1023px) {
        margin-left:10%;
    }
`;


const Main = () => {
    const txt = "Welcome to Park Seong-yeon's portfolio. \n I'm hoping to be a front-end developer.";
    const [Text, setText] = useState('');  //Text = ''
    const [Count,setCount] = useState(0);  //Count = 0

    useEffect(() => {
        const interval = setInterval(() => {
            setText(Text + txt[Count]); //이전 set문자 + 다음문자
            setCount(Count + 1);  //개수 체크
        }, 30);
        if(Count == txt.length){
            clearInterval(interval); //문자열 체크를 통해 setInterval 해제함.
        }
        return() => clearInterval(interval); //언마운트시 setInterval을 해제함.
    })

    return(
        <StyleMain id="1">
            <StyleMainDiv>
                <StyleProfile>
                    <Styleimg>
                        <p style={{display:'inline'}}><img src="/images/Profile.png" alt="Profile" className='Styledivimg'/></p>
                    </Styleimg>
                    <ProfileText>
                        <p style={{float: 'left', color:'#175dc6', fontSize: '22px', whiteSpace: 'preWrap', WebkitTextStroke: '0.5px #175dc6'}}> 
                            {Text} </p>
                    </ProfileText>
                </StyleProfile>
            </StyleMainDiv>
        </StyleMain>
    );
};

export default Main;
