import React from 'react';
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
    border:2px solid #175DC6;
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
    border:2px solid #175DC6;
`;

const Styleimg = styled.div`
    position: relative;
    padding-top:3%;
    padding-left:12%;
`;

const ProfileText = styled.div`
    position: ablsolute;
`;

const Styledivimg = {
    position: "relative"
};

const Styledivp = {
    position: "relative",
    height: "45%",
    top: "50%",
    left:"50%",
    transform: "translate(-50%,-57%)",
    padding: "0% 5%"
};

const Main = () => {
    return(
        <StyleMain>
            <StyleMainDiv>
                <StyleProfile>
                    <Styleimg>
                        <p><img src="/images/Profile.png" alt="Profile" style={{Styledivimg}}/></p>
                    </Styleimg>
                    <ProfileText>
                        <p style={Styledivp}>
                        안녕하세요 박성연입니다.<br/>
                        프론트엔드 개발을 희망하고 있습니다.<br/>
                        정돈된 코딩과, 전문성을 가질 수 있는 개발자가 되기 위해 노력<br/> 
                        진행중 &gt; 진행중 (로딩중 디자인 사용하기)<br/>
                        입니다.</p>
                    </ProfileText>
                </StyleProfile>
            </StyleMainDiv>
        </StyleMain>
    );
};

export default Main;
