import React, {useState, useEffect} from 'react';
import '../style/styles.scss';


const Main = () => {
    const txt = "Welcome to Park Seong-yeon's portfolio. \n I'm hoping to be a web publisher & front-end developer.";
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
        <div className='main' id="1">
            <div className='mainImg'>
                <p style={{display:'inline'}}><img src={process.env.PUBLIC_URL + '/images/Profile.jpg'} alt="Profile" className='Styledivimg'/></p>
            </div>
            <div className='mainProfile'>
                <p className='mainText'>{Text} </p>
            </div>
        </div>
    );
};

export default Main;
