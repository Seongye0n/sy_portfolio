import React from 'react';
import {PieChart} from "react-minimal-pie-chart";
import styled from 'styled-components';
import '../style/styles.scss';

const StyleChart = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 0% 12%;
    @media screen and (max-width:1023px) {
        width:100%;
        height:90%;
        padding:0;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
    }
    @media screen and (max-width:767px) {
        width:100%;
        height:77%;
        display:flex;
    }
`;

const StyleItem = styled.div`
    padding:20px;
    text-align : center;
    @media screen and (max-width:767px) {
        padding:20px 5px;
    }
`;

const StyleSpan = styled.span`
    position: relative;
    color:#fff;
    -webkit-text-stroke: 1px #175dc6;
    @media screen and (max-width:767px) {
        font-size:14px;
        -webkit-text-stroke: 1px #175dc6;
    }
`;


const About_donut = () => {
    

    return(
        <StyleChart>
            <StyleItem>
            <StyleSpan>HTML</StyleSpan>
            <PieChart
                data={[
                    {
                        value:80,
                        color:"#175dc6",
                        name:"HTML",
                        startAngle:270,
                    },
                ]}
                reveal={80}
                lineWidth={5}
                background='#ffffff'
                lengthAngle={360}
                rounded
                animate
                label={({dataEntry}) => dataEntry.value + "%"}
                labelStyle = {{
                    fontSize: "18px",
                    fill: "#175dc6",
                }}
                labelPosition={0}
                className='styleChart'
            />
            </StyleItem>
            <StyleItem>
            <StyleSpan>CSS</StyleSpan>
            <PieChart
                data={[
                    {
                        value:70,
                        color:"#175dc6",
                        name:"CSS",
                        startAngle:270,
                    },
                ]}
                reveal={70}
                lineWidth={5}
                background='#ffffff'
                lengthAngle={360}
                rounded
                animate
                label={({dataEntry}) => dataEntry.value + "%"}
                labelStyle = {{
                    fontSize: "18px",
                    fill: "#175dc6",
                }}
                labelPosition={0}
                className='styleChart'
            />
            </StyleItem>
            <StyleItem>
            <StyleSpan>Javascript</StyleSpan>
            <PieChart
                data={[
                    {
                        value:60,
                        color:"#175dc6",
                        name:"Javascript",
                        startAngle:270,
                    },
                ]}
                reveal={60}
                lineWidth={5}
                background='#ffffff'
                lengthAngle={360}
                rounded
                animate
                label={({dataEntry}) => dataEntry.value + "%"}
                labelStyle = {{
                    fontSize: "18px",
                    fill: "#175dc6",
                }}
                labelPosition={0}
                className='styleChart'
            />
            </StyleItem>
            <StyleItem>
            <StyleSpan>React</StyleSpan>
            <PieChart
                data={[
                    {
                        value:50,
                        color:"#175dc6",
                        name:"React",
                        startAngle:270,
                    },
                ]}
                reveal={50}
                lineWidth={5}
                background='#ffffff'
                border='1px solid #175dc6'
                lengthAngle={360}
                rounded
                animate
                label={({dataEntry}) => dataEntry.value + "%"}
                labelStyle = {{
                    fontSize: "18px",
                    fill: "#175dc6",
                }}
                labelPosition={0}
                className='styleChart'
            />
            </StyleItem>
        </StyleChart>
    );
};

export default About_donut;