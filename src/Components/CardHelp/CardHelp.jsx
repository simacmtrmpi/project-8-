import { useEffect, useState } from "react";
import Card from "./Card";

const CardHelp = () => {


const [cards, setCards]= useState([]);


useEffect(() =>{
    fetch('people.json')
    .then(res => res.json())
    .then(data => setCards(data))
},[])





    return (
        <div>
            
            <div className=" border border-2 my-20 border-blue-400"></div>

            <div className=" my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    cards.map(card => <Card key={card.id} card={card}></Card>)
                }
            </div>
        </div>
    );
};

export default CardHelp;