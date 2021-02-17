import React, { useState, useEffect } from 'react';

function AstronautDisplay({id}) { 
    const [astronaut, setAstronaut] = useState("");

    useEffect (() => {
        async function getAstronaut(){
            let response = await fetch (`${process.env.REACT_APP_ASTRONAUT_API_URL}/${id}`);
            let data = await response.json();
            console.log(data);
            setAstronaut(data);
        }
        getAstronaut();
    }, [id]);


    return (
        <div>
            <h1>Name: {astronaut.name} </h1>
            <h1>Id: {astronaut.id} </h1>
            <h1>Image:</h1>
                <img id="imageId" src= {astronaut.sprites?.front_default} alt={astronaut.name}></img>
        </div>
    )
}

export default AstronautDisplay;
