import React from 'react';
import About_graph from './About_graph';
import '../style/styles.scss';


const About = () => {
    return( 
        <div className='about' id="2">
                    <div style={{gridRow: "span 2"}} className='aboutGrid'>
                        <h3 className='styleH3'>Skills</h3>
                        <About_graph/>
                    </div>
	                <div className='aboutGrid'>
                        <h3 className='styleH3'>Certificat</h3>
                        <ul className='styleUl'>
                            <li className='styleli'> &nbsp;정보처리기사 (2019.08.16)</li>
                            <li className='styleli'> &nbsp;웹디자인기능사 (2022.06.24)</li>
                        </ul>
                    </div>
	                <div className='aboutGrid'>
                        <h3 className='styleH3'> Timeline</h3>
                        <ul className='styleUl'>
                            <li className='styleli'><span className='spanLeft'>2016</span><span className='spanRight'>신라대학교 컴퓨터공학과 입학</span></li>
                            <li className='styleli'><span className='spanLeft'>2019 ~ 2020</span><span className='spanRight'>웹 인턴 및 신라대학교 IT 학과 졸업</span></li>
                            <li className='styleli'><span className='spanLeft'>2021 ~ 2022</span><span className='spanRight'>인제대학교 약물유전체연구센터 근무<br/></span>
                            <span className='aboutSpan'>웹디자인 기능사 자격증 취득 및 Portfolio 제작</span></li>
                        </ul>
                    </div>
        </div>
    );
};

export default About;