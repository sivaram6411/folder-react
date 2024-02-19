import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestMenu from "../uttils/useRestMenu";
import { CARD_URL } from "../uttils/constants";

const RestMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    totalRatingsString,
    cloudinaryImageId,
  } = resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  //   const { cards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;

  return (
    <div className="m-1 p-1 border min-h-[500px] w-[500px] rounded-lg bg-purple-200 hover:bg-purple-300 hover:border-lime-400 shadow-md">
      <div className="flex items-start">
        <div>
          <h1 className="text-2xl font-extrabold text-orange-600 font-serif">
            {name}
          </h1>
          <p className="text-xl font-semibold text-lime-600 font-serif">
            {cuisines.join(", ")} - {costForTwoMessage}
          </p>
        </div>
        <img
          src={CARD_URL + cloudinaryImageId}
          alt="image"
          className="w-[150px] rounded-md ml-5"
        />
      </div>

      <h5 className="text-lg font-semibold text-slate-950">MENU</h5>
      <ul className="font-light">
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - {" Rs. "}
            {item?.card?.info?.price / 100 ||
              item?.card?.info?.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestMenu;
