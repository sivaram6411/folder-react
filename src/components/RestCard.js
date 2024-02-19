import { CARD_URL } from "../uttils/constants";

const RestCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  return (
    <div className="m-1 p-1 min-h-96 border w-[200px] rounded-lg bg-purple-200 hover:bg-purple-300 hover:border-lime-400 shadow-md">
      <img
        src={CARD_URL + cloudinaryImageId}
        alt="image"
        className="w-[200px] rounded-md"
      />
      <h3 className="font-bold text-slate-800">{name}</h3>
      <h5 className="font-normal text-slate-700">{cuisines.join(", ")}</h5>
      <h5 className="font-normal text-slate-700">{avgRating}</h5>
      <h5 className="font-normal text-slate-700">{costForTwo}</h5>
      <h5 className="font-normal text-slate-700">{sla.slaString}</h5>
    </div>
  );
};

export default RestCard;
