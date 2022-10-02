import React from 'react';
import {PieChart} from "react-minimal-pie-chart";

const donutData = {
    options:{
        plotOptions: {
            eveal:80,
            lineWidth:5,
            background:'#f3f3f3',
            lengthAngle:360,
            label:({dataEntry}) => dataEntry.value + "%",
            labelStyle : {
                fontSize: "26px",
                fill: "#333333",
            },
            labelPosition:0,
        },
    },    
}


const Pratice = () => {
    return(
        <div>
            <PieChart
                data={[
                    {
                        value:80,
                        color:"black",
                        name:"name1",
                    },
                ]}
                options={donutData.options}
            />
        </div>
    );

    // return(
    //     <div>
    //         <PieChart
    //          data={[
    //             {
    //                 value:80,
    //                 color:"#F6CB44",
    //                 name:"name1",
    //             },
    //          ]}
    //          reveal={80}
    //          lineWidth={5}
    //          background='#f3f3f3'
    //          lengthAngle={360}
    //          rounded
    //          animate
    //          label={({dataEntry}) => dataEntry.value + "%"}
    //          labelStyle = {{
    //             fontSize: "26px",
    //             fill: "#333333",
    //          }}
    //          labelPosition={0}
    //          />
    //     </div>
    // );
};

export default Pratice;