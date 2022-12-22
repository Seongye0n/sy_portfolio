import React, {useEffect, useState} from 'react';
import '../style/styles.scss';
import { Link } from 'react-scroll';


const Header = () => {

    const [scroll, setScroll] = useState(false);
    const [menu, setMenu] = useState('');

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        
        return () => {
        window.removeEventListener('scroll', handleScroll); //clean up
        };
    }, [scroll]);

    const handleScroll = () => {

        if(window.innerWidth >= 1024 ){ //PC
            if(scroll < 200){ //Main
                setMenu('Main');
            }else if(250 <= scroll && scroll < 800){ //About
                setMenu('About');
            }else if(800<= scroll && scroll< 1100){ //Project
                setMenu('Project');
            }else{
                setMenu('Contact');
            }
        }else if(window.innerWidth < 1024 && window.innerWidth >= 768){ //tablet
            if(scroll < 150){ //Main
                setMenu('Main');
            }else if(150 <= scroll && scroll < 500){ //About
                setMenu('About');
            }else if(500 <= scroll && scroll< 1000){ //Project
                setMenu('Project');
            }else{
                setMenu('Contact');
            }
        }else if( window.innerWidth < 768){ //mobile
            if(scroll < 150){ //Main
                setMenu('Main');
            }else if(150 <= scroll && scroll < 500){ //About
                setMenu('About');
            }else if(500 <= scroll && scroll< 900){ //Project
                setMenu('Project');
            }else{
                setMenu('Contact');
            }
        }
    };
    


    return(
        <div className='header'>
            <div className='logo'>
                <img src={process.env.PUBLIC_URL + '/images/logo.jpg'} alt="logo" style={{width:"100%", height:"100%"}}/>
            </div>
                <ul className='headerUl'>
                    <li className='headerLi'>
                        <Link to="1" spy={true} style={menu === 'Main'? {color:'#175dc6'} : {color:'#9CD8F8'}}>Main</Link>
                    </li>
                    <li className='headerLi'>
                        <Link to="2" spy={true} style={menu === 'About'? {color:'#175dc6'} : {color:'#9CD8F8'}}>About me</Link>
                    </li>
                    <li className='headerLi'>
                        <Link to="3" spy={true} style={menu === 'Project'? {color:'#175dc6'} : {color:'#9CD8F8'}}>Project</Link>
                    </li>
                    <li className='headerLi'>
                        <Link to="4" spy={true} style={menu === 'Contact'? {color:'#175dc6'} : {color:'#9CD8F8'}}>Contact</Link>
                    </li>
                </ul>
        </div>
    );
};

export default Header;