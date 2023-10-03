import { Link } from "react-router-dom";


const Card = ({card}) => {

const {id, image, title, category, color_category_bg, color_card_bg, color_text } = card;





    return (
        <div>
            

    <Link to ={`/donations/${id}`}>
    <div>
     <div style={{backgroundColor:color_card_bg}} className="card card-compact h-72  shadow-xl">
             <figure><img className=" w-full h-3/1" src={image} alt="" /></figure>
             
             <div className="card-body ">

            <div className="w-20 text-center"><p style={{color:color_text, backgroundColor:color_category_bg}} className="font-semibold">{category} </p></div>

               <p style={{color:color_text}}  className="font-bold">{title}</p>
               
             </div>
                      </div>
     </div>
    </Link>


        </div>
    );
};

export default Card;