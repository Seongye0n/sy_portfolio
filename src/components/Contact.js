import React from 'react';
import '../style/styles.scss';

const Contact = () => {
    return(
        <div className='contact' id="4">
            <h3 className='styleH3'>Contact</h3>
            <div className='contactDiv'>
                <img src={process.env.PUBLIC_URL + '/images/kakao.png'} className='contactImg' 
                    onClick={()=>{window.open('https://open.kakao.com/o/sYEpyCEe', '_blank')}} />
                <img src={process.env.PUBLIC_URL + '/images/blog.png'} className='contactImg' 
                    onClick={()=>{window.open('https://blog.naver.com/tjddus0630', '_blank')}} />
                <img src={process.env.PUBLIC_URL + '/images/instagram.png'} className='contactImg' 
                    onClick={()=>{window.open('https://www.instagram.com/ye0.7n_s/', '_blank')}} />
                <img src={process.env.PUBLIC_URL + '/images/email.png'} className='contactImg'/>  
                <span className='contactSpan'>tjddus0630@gmail.com</span>
            </div>  
        </div> 
    );
};

export default Contact;
