import React, {useState} from 'react';
import styled, {keyframes} from 'styled-components';
import '../style/graph.scss';

const fade = keyframes`
    0%{ 
        width: 0; 
        opacity:0;
    }
    100%{
        opacity:1;
    }
    `;
    const Percent = styled.div`
        animation: ${fade} 3s 1;
    `;

const About_graph = () => {
    
    


    return(
        <div className='graph'>
            <span className='span' style={{marginTop:'10px'}}>HTML</span>
            <div className='graphBar' style={{marginTop:'10px'}}>
                <Percent className='graphPercent' style={{width:'80%'}}/>
            </div>
            <span className='span'>Css</span>
            <div className='graphBar'>
                <Percent className='graphPercent' style={{width:'80%'}}/>
            </div>
            <span className='span'>Javascript</span>
            <div className='graphBar'>
                <Percent className='graphPercent' style={{width:'70%'}} />
            </div>
            <span className='span'>React</span>
            <div className='graphBar'>
                <Percent className='graphPercent' style={{width:'70%'}} />
            </div>
            <span className='span'>Php</span>
            <div className='graphBar'>
                <Percent className='graphPercent' style={{width:'50%'}} />
            </div>
            <span className='span'>Maria DB</span>
            <div className='graphBar'>
                <Percent className='graphPercent' style={{width:'60%'}} />
            </div>
            <span className='span other'>
                <img src={process.env.PUBLIC_URL + '/images/star.png'} className='icon'/>
                <img src={process.env.PUBLIC_URL + '/images/star.png'} className='icon' style={{marginRight:'5px'}}/>
                 Heidi SQL, Cafe24, Github
            </span>
        </div>
    );
};

export default About_graph;