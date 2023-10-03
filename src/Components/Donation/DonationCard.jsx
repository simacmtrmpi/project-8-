import { Link } from "react-router-dom";


const DonationCard = ({card}) => {


    const {id, image, title, price, category, color_category_bg, color_card_bg, color_text } = card;



    return (
        <div>

             
        <div>

             <div style={{backgroundColor:color_card_bg}} className="card h-64 card-side shadow-xl">
             <figure><img className="h-full" src={image} alt="Movie"/></figure>
             <div className="card-body">

                <div className="w-20 text-center"><p style={{color:color_text, backgroundColor:color_category_bg}} className="font-semibold">{category} </p></div>


               <h2 className="card-title font-bold">{title}</h2>

               <p style={{color:color_text}} className="font-bold">${price}</p>
               
               <div className="card-actions ">
                <Link to ={`/donations/${id}`}>
                <button style={{backgroundColor:color_text}}  className="btn  border-none text-white">View Details</button>
                </Link>
               </div>
             </div>
               </div>
                
           </div>

      </div>
    );
};

export default DonationCard;