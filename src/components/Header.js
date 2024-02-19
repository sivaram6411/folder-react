import { useState } from "react";
import { LOGO_URL } from "../uttils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../uttils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <nav className="flex justify-between place-items-center border border-pink-300 hover:border-2 bg-orange-50 bg-transparent">
      <div>
        <img src={LOGO_URL} alt="logo" className="w-28" />
      </div>
      <div>
        <h2 className="font-bold text-2xl text-lime-500">
          GOOD FOOD GOOD MOOD
        </h2>
      </div>
      <div>
        <ul className="flex font-medium text-slate-600">
          <li className="m-1">OnlineStatus {onlineStatus ? "💚" : "🔴"}</li>
          <li className="m-1">
            <Link to="/">Home</Link>
          </li>
          <li className="m-1">
            <Link to="/about">About us</Link>
          </li>
          <li className="m-1">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="m-1">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="m-1">Cart</li>
          <button
            className="m-1 px-4 py-1 text-sm text-purple-600 font-semibold rounded-2xl border border-purple-200 hover:text-white hover:bg-purple-400 hover:border-transparent focus:outline-none focus:ring-1 focus:ring-purple-500 focus:ring-offset-2"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
