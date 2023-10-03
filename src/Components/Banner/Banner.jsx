import { useEffect, useState } from "react";


const Banner = () => {

  const [cards, setCards]= useState([]);
  const [value, setValue] = useState('');
  const [search, setSearch] = useState([]);

useEffect(() =>{
    fetch('people.json')
    .then(res => res.json())
    .then(data => setCards(data))
},[search])



const handleSubmit = e => {
 e.preventDefault();
 
  const newcards = [];
  const card = cards.filter(card=> card.category === value)
 
     if(card){
      newcards.push(card);
     }

setSearch(newcards);


}

console.log(search)

const handleGetValue = e => {
 
  setValue(e.target.value)
}




    return (
        <div>
           
           <div className="hero md:h-[500px]" style={{backgroundImage: 'url(https://i.ibb.co/gRSnR99/Clothing.png)'}}>
            
  <div className="hero-overlay bg-opacity-70  bg-white backdrop-brightness-75"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="">
      <h1 className="mb-5 text-3xl text-black font-bold">I Grow By Helping People In Need</h1>

    <form onSubmit={handleSubmit} action="">
    <input onChange={handleGetValue} type="text" placeholder="Type here" className="input  input-bordered input-secondary w-full max-w-xs" />
     <input type="submit" value="Scerch" className="bg-orange-500 p-3 text-white rounded-lg" />
    </form>
     
    </div>
  </div>
</div>




           
        </div>
    );
};

export default Banner;