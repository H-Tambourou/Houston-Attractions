import React from "react";

function Museum({data}) {
    const newData = [...data];
    const relData = newData.filter(relData => relData.id === 2);
    console.log(relData);
    return(
        <div>
        <h1>{relData[0].name}</h1>
        <img src={relData[0].img}/>
        <p>{relData[0].description}</p>
        <img src={relData[0].img2}/>
        <p>{relData[0].info}</p>
        </div>
    );
}
export default Museum;