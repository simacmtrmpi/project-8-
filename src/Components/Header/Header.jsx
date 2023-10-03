import { NavLink } from "react-router-dom";


const Header = () => {

   

return (
    <div>
        

        <div className="navbar bg-base-100">
  <div className="flex-1">
    <img src="/src/assets/image/Logo.png" alt="" />
  </div>
  <div >
  <ul className="flex gap-5">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-400 font-bold underline" : ""
              }
            >
              Home
            </NavLink>

          </li>

          <li>
            <NavLink
              to='/donation' 
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-400 font-bold underline" : ""
              }
              >Donation
            </NavLink>

            
          </li>
          
          <li>
            <NavLink
             to='/statistics'
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-400 font-bold underline" : ""
              }
            >
             Statistics
            </NavLink>

            
          </li>
        </ul>
  </div>
</div>



    </div>
  );
};

export default Header;
