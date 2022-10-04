import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const StyleMain = styled.div`
    position:absolute;
    width:100%;
    height:93vh;
`;

const StyleMainDiv = styled.div`
    position:absolute;
    width:80%;
    height:75%;
    left:50%;
    top:60%;
    transform: translate(-50%,-50%);
`;

const StyleProfile = styled.div`
    position: absolute;
    display: inline-grid;
    grid-template-columns: 0.8fr 1.2fr;
    width:90%;
    height:80%;
    margin: auto;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
`;

const Styleimg = styled.div`
    position: relative;
    padding-top:3%;
    padding-left:12%;
`;

const ProfileText = styled.div`
    position: ablsolute;
    padding:100px 0px;
`;

const Styledivimg = {
    top: '50%',
    transform: 'translateY(-50%)',
    position: "relative"
};

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
                        <p><img src="/images/Profile.png" alt="Profile" style={{Styledivimg}}/></p>
                    </Styleimg>
                    <ProfileText>
                        <p style={{color:'#175dc6', 'font-size': '22px', 'white-space': 'pre-wrap', '-webkit-text-stroke': '0.5px #175dc6'}}> 
                            {Text} </p>
                    </ProfileText>
                </StyleProfile>
            </StyleMainDiv>
        </StyleMain>
    );
};

export default Main;
