import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide} from "swiper/react"; // basic
import SwiperCore, {Pagination, Navigation} from "swiper";
import "swiper/css"; //basic
import "swiper/css/pagination";
import "swiper/css/navigation";

const StyleProject = styled.div`
    position:relative;
    width:100%;
    height:93vh;
    top:100vh;
`;

const StyleProjectDiv = styled.div`
    position:relative;
    width:80%;
    height:75%;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
    border: 1px solid #175dc6;
`;

const StyleSwiperLi = {
    position:'relative', 
    left:'50%', 
    transform: 'translate(-50%, 0%)'
}

const StyleA = {
    TextDecoder: 'none',
    position:'absolute', 
    width: '50%', 
    padding: '0.5% 0%', 
    textAlign:'center', 
    top: '50%', 
    left:'50%', 
    transform: 'translate(-50%, -50%)', 
    backgroundColor:'rgba(255, 255, 255, 0.7)'
};

function styleOnA(e){
    e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
    e.target.style.color = '#ffffff';
};

function styleOnA2(e){
    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
    e.target.style.color = '#000000';
};

SwiperCore.use([Navigation, Pagination]);

const Project = () => {
    return(
        <StyleProject id="3">
            <StyleProjectDiv>
                <Swiper
                    className="banner"
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide>
                        <img src={process.env.PUBLIC_URL + '/images/project1.jpg'} style={StyleSwiperLi}/>
                        <a href='https://github.com/Seongye0n/sy_coowoshop.git' target='_blank' alt='프로젝트1'
                            style={StyleA} onMouseOver={styleOnA} onMouseLeave={styleOnA2} >    
                            https://github.com/Seongye0n/sy_coowoshop.git</a>
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src={process.env.PUBLIC_URL + '/images/waiting.jpg'} style={StyleSwiperLi}/>
                    </SwiperSlide>
                </Swiper>
            </StyleProjectDiv>
        </StyleProject>
    );
};

export default Project;