import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide} from "swiper/react"; // basic
import SwiperCore, {Pagination, Navigation} from "swiper";
import "swiper/css"; //basic
import "swiper/css/pagination";
import "swiper/css/navigation";
import '../style/styles.scss';

const StyleProject = styled.div`
    position:relative;
    width:100%;
    height:93vh;
    top:100vh;
    @media screen and (max-width:1023px) {
        width:100%;
        top:40vh;
        height:40vh;
    }
`;

const StyleProjectDiv = styled.div`
    position:relative;
    width:80%;
    height:75%;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
    border: 1px dashed #175dc6;
    @media screen and (max-width:1023px) {
        width:80%;
        height:75%;
    }
`;

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
                        <img src={process.env.PUBLIC_URL + '/images/project1.jpg'} className='StyleSwiperLi'/>
                        <a href='https://github.com/Seongye0n/sy_coowoshop.git' target='_blank' alt='프로젝트1'
                            className='StyleA' onMouseOver={styleOnA} onMouseLeave={styleOnA2} >    
                            https://github.com/Seongye0n/sy_coowoshop.git</a>
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src={process.env.PUBLIC_URL + '/images/waiting.jpg'} className='StyleSwiperLi'/>
                    </SwiperSlide>
                </Swiper>
            </StyleProjectDiv>
        </StyleProject>
    );
};

export default Project;