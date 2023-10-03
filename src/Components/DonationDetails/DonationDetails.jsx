import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveApplication } from "../utility/localStorage";



const DonationDetails = () => {

  const donations = useLoaderData();
  const {id} = useParams();
  const intId = parseInt(id);
  const card = donations.find(card => card.id === intId);

const { title,image, price, color_text, description} = card;

const handleApply = () => {
    saveApplication(intId)
    toast("You have successfully");
  };

    return (
        <div className="my-14">
           

           <div className=" relative ">
           <img className="w-full md:h-[700px] mt-10 " src={image} alt="" />
           <div className="bg-gradient-to-r from-blue-500 to-transparent">
            <button style={{backgroundColor:color_text}} onClick={handleApply} className="btn relative text-white border-none bottom-20 -right-20">Donate ${price}</button>
           </div>
           </div>

            <h1 className="text-6xl font-bold my-5">{title} </h1>

            <p className="text-slate-700">{description} </p>

             
            <ToastContainer />
        </div>
    );
};

export default DonationDetails;