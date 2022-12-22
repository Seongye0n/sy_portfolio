import React, {useState} from 'react';
import { Swiper, SwiperSlide} from "swiper/react"; // basic
import  {Navigation} from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import '../style/styles.scss';

const Project = () => {

    const [hover, setHover] = useState(false);

    return(
        <div className='projectDiv' id="3">
            <div className='projectDiv2'>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    breakpoints={{
                        1023: { //1023px 이상 slidesPerView가 2개로 보임
                          slidesPerView: 2,
                          spaceBetween:-30,
                        },
                    }}
                    style={{
                        width:'95%',
                        height:'90%',
                        top:'50%',
                        transform: 'translateY(-50%)',
                    }}
                >

                    <SwiperSlide className='swiperSlide'>
                        <div className={hover === false? "project active" : "project" } >
                            <div className='front'>
                                <div className='projectStart'><h1>Portfolio</h1></div>
                                <div className='projectMiddle'>
                                    <img src={process.env.PUBLIC_URL + '/images/project_portfoli.png'} className='contentImg'/>
                                </div>
                                <div className='projectEnd'>
                                    <p> React.js를 사용하여 개발한 반응형 포트폴리오 웹사이트입니다.</p>
                                    <div className='homepage' onMouseOver={()=>setHover(false)} onMouseLeave={()=>setHover(true)}>
                                        <img src={process.env.PUBLIC_URL + '/images/homepage.png'} style={{marginRight:'40px'}} onClick={()=>{window.open('https://seongye0n.github.io/sy_portfolio/', '_blank')}} />
                                        <img src={process.env.PUBLIC_URL + '/images/github.png'} onClick={()=>{window.open('https://github.com/Seongye0n/sy_portfolio', '_blank')}} />
                                    </div>
                                </div>
                            </div>
                            <div className='back'>
                                <div className='projectStart'>
                                    <img src={process.env.PUBLIC_URL + '/images/star.png'} className='iconImg'/>
                                    <h3 className='styleH3'> 개발일지</h3>
                                    <p> 2022.10 ~ 2022.12</p>
                                </div>
                                <div className='projectMiddle'>
                                    <img src={process.env.PUBLIC_URL + '/images/star.png'} className='iconImg'/>
                                    <h3 className='styleH3'> 개발참여인원</h3>
                                    <p> 1인개발</p>
                                </div>
                                <div className='projectEnd'>
                                    <img src={process.env.PUBLIC_URL + '/images/star.png'} className='iconImg'/>
                                    <h3 className='styleH3'> 기술스택</h3>
                                    <span className='skillSpan'> - Html</span>
                                    <span className='skillSpan'> - Css</span>
                                    <span className='skillSpan'> - Javascript</span>
                                    <span className='skillSpan'> - Rect</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiperSlide'>
                    <div className={hover === false? "project active" : "project" } >
                            <div className='front'>
                                <div className='projectStart'><h1>Memo</h1></div>
                                <div className='projectMiddle'>
                                    <img src={process.env.PUBLIC_URL + '/images/project2.png'} className='contentImg'/>
                                </div>
                                <div className='projectEnd'>
                                    <p> 각 회원들이 본인의 메모를 관리하도록 개발한 프로젝트입니다.<br/>
                                    퍼블리싱부터 프론트엔드, 백엔드 모두 직접 개발한 반응형 웹사이트입니다.</p>
                                    <div className='homepage' onMouseOver={()=>setHover(false)} onMouseLeave={()=>setHover(true)}>
                                        <img src={process.env.PUBLIC_URL + '/images/homepage.png'} style={{marginRight:'40px'}} onClick={()=>{window.open('https://seongye0n.github.io/sy_memo/', '_blank')}} />
                                        <img src={process.env.PUBLIC_URL + '/images/github.png'} onClick={()=>{window.open('https://github.com/Seongye0n/sy_memo', '_blank')}} />
                                    </div>
                                </div>
                            </div>
                            <div className='back'>
                                <div className='projectStart'>
                                    <img src={process.env.PUBLIC_URL + '/images/star.png'} className='iconImg'/>
                                    <h3 className='styleH3'> 개발일지</h3>
                                    <p> 2022.11 ~ 2022.12</p>
                                </div>
                                <div className='projectMiddle'>
                                    <img src={process.env.PUBLIC_URL + '/images/star.png'} className='iconImg'/>
                                    <h3 className='styleH3'> 개발참여인원</h3>
                                    <p> 1인개발</p>
                                </div>
                                <div className='projectEnd'>
                                    <img src={process.env.PUBLIC_URL + '/images/star.png'} className='iconImg'/>
                                    <h3 className='styleH3'> 기술스택</h3>
                                    <span className='skillSpan'> - Html</span>
                                    <span className='skillSpan'> - Css</span>
                                    <span className='skillSpan'> - Javascript</span>
                                    <span className='skillSpan'> - Rect</span>
                                    <span className='skillSpan'> - Maria DB</span>
                                    <span className='skillSpan'> - Heidi SQL</span>
                                    <span className='skillSpan'> - Cafe24</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiperSlide'>
                    <div className={hover === false? "project active" : "project" } >
                            <div className='front'>
                                <div className='projectStart'><h1>CoowoShop</h1></div>
                                <div className='projectMiddle'>
                                    <img src={process.env.PUBLIC_URL + '/images/project1.jpg'} className='contentImg'/>
                                </div>
                                <div className='projectEnd'>
                                    <p> 애견 미용을 예약하고, 관리할 수 있도록 개발한 반응형 웹사이트입니다.<br/>
                                    웹퍼블링싱과 프론트엔드 개발을 진행하였습니다.</p>
                                    <div className='homepage' onMouseOver={()=>setHover(false)} onMouseLeave={()=>setHover(true)}>
                                        <img src={process.env.PUBLIC_URL + '/images/homepage.png'} style={{marginRight:'40px'}} 
                                            onClick={()=>{window.open('https://seongye0n.github.io/sy_coowoshop/', '_blank')}} />
                                        <img src={process.env.PUBLIC_URL + '/images/github.png'} onClick={()=>{window.open('https://github.com/Seongye0n/sy_coowoshop/', '_blank')}} /> 
                                    </div>
                                </div>
                            </div>
                            <div className='back'>
                                <div className='projectStart'>
                                    <img src={process.env.PUBLIC_URL + '/images/star.png'} className='iconImg'/>
                                    <h3 className='styleH3'> 개발일지</h3>
                                    <p> 2022.10 ~ </p>
                                </div>
                                <div className='projectMiddle'>
                                    <img src={process.env.PUBLIC_URL + '/images/star.png'} className='iconImg'/>
                                    <h3 className='styleH3'> 개발참여인원</h3>
                                    <p className='member'> 2인개발</p>
                                </div>
                                <div className='projectEnd'>
                                    <img src={process.env.PUBLIC_URL + '/images/star.png'} className='iconImg'/>
                                    <h3 className='styleH3'> 기술스택</h3>
                                    <span className='skillSpan' style={{float:'left'}}> - Html</span>
                                    <span className='skillSpan'> - Css</span>
                                    <span className='skillSpan'> - Javascript</span>
                                    <span className='skillSpan'> - Rect</span>
                                    <span className='skillSpan'> - Maria DB</span>
                                    <span className='skillSpan'> - Heidi SQL</span>
                                    <span className='skillSpan'> - Cafe24</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>                    
                </Swiper>
            </div>
        </div>
    );
};

export default Project;