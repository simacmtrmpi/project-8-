import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredApplication } from "../utility/localStorage";
import DonationCard from "./DonationCard";


const Donation = () => {


const cards = useLoaderData();
 

const [appliedCards, setAppliedCards] = useState([]);
// const [displayCards, setDisplayCards] = useState([]);
const [dataLength, setDataLength] = useState(4);
const [isShow,setIsShow] = useState(false)

useEffect(() => {
    const storedCard = getStoredApplication();
    if(cards.length > 0) {
        const cardApplied = [];
        for(const id of storedCard){
            const card = cards.find(card => card.id === id);
            if(card){
                cardApplied.push(card);
            }
        }

        setAppliedCards(cardApplied)
    }
},[cards])




    return (
        <div className="my-14">
            <h1 className="text-4xl font-bold text-center my-8"> <span className="text-blue-500">A</span><span className="text-orange-500">pp</span><span className="text-orange-900">li</span><span className="text-rose-600">ed</span> : {appliedCards.length} </h1>
           


<div className=" my-10 grid grid-cols-1 md:grid-cols-2 gap-7">
                {
                    appliedCards.slice(0,dataLength).map(card => <DonationCard key={card.id} card={card}></DonationCard>)
                }
            </div>
                  {appliedCards.length > 4 &&  <div className="text-center">
                   <div className={ dataLength === appliedCards.length && 'hidden' }>
                    <button onClick={()=> setDataLength(appliedCards.length)} className="btn btn-success text-white my-5 mx-auto">Show All</button>
                   </div>
                   </div>}


        </div>
    );
};

export default Donation;