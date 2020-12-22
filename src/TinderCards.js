import React,{useState} from 'react';
import "./TinderCards.css";


function TinderCards() {

    const [people , setPeople] = useState([
        {
            name:"Henry Golding",
            url:"./tinder-cards/HG.jpg",
        },

        {
            name:"Justin Timberlake",
            url:"./tinder-cards/JT.jpg",
        },
    ]); 

    return (
        <div className="tinderCards">

            <div className="tinderCards__cardContainer">
            
                {people.map(person =>(

                    <h1>{person.name}</h1>

                ))}
            </div>    



           

        </div>

    )
}

export default TinderCards 