import RestCard from "./RestCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { SWIGGY_REST_URL } from "../uttils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../uttils/useOnlineStatus";

const Body = () => {
  const [TopRatedRest, setTopRatedRestList] = useState([]);

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  // used swiggy data
  const fetchData = async () => {
    const data = await fetch(SWIGGY_REST_URL);

    const json = await data.json();
    console.log(json);

    setTopRatedRestList(
      //optional chaining
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (onlineStatus === false) {
    return <h1>Please check, the network connection has been lost!!!...</h1>;
  }

  /**
   if (TopRatedRest.length === 0) {
    return <Shimmer />;
  }
   */

  //   used terinary operator
  return TopRatedRest.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="m-2">
      <div className="flex justify-between">
        <div className="m-2">
          <input
            type="text"
            className="px-4 py-1 text-base font-medium border-[1px] border-orange-400 rounded-s-lg"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-1 text-base font-medium border-[1px] border-l-0 border-orange-400 rounded-e-lg"
            onClick={() => {
              //filter the restaurant cards and update UI
              const filterSearchRest = TopRatedRest.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filterSearchRest);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="m-2 mr-10 px-4 py-1 text-base font-medium border-[1.5px] border-violet-700 rounded-lg"
          onClick={() => {
            const filteredLst = TopRatedRest.filter(
              (res) => res.info.avgRating > 4.5
            );
            setTopRatedRestList(filteredLst);
          }}
        >
          Top Rated Restuarants
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restuarant) => (
          <Link to={"/restmenu/" + restuarant.info.id}>
            <RestCard key={restuarant.info.id} resData={restuarant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
