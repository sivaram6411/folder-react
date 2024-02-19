import { useEffect, useState } from "react";
import { USERFUN_URL } from "../uttils/constants";

//.......Function component...........//

UserFun = () => {
  const [userInfo, setUserInfo] = useState({
    name: "shivaramakrishna",
    location: "Hyderabad",
    avatar_url: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(USERFUN_URL);

    const json = await data.json();
    console.log(json);
    setUserInfo(json);
  };

  const { name, location, avatar_url } = userInfo;

  return (
    <div className="m-2 border border-pink-500 rounded-lg p-3 w-96">
      <img src={avatar_url} className="rounded-full w-52" />
      <h2 className="font-medium text-base text-fuchsia-900">Name: {name}</h2>
      <h3 className="font-medium text-base text-fuchsia-900">Location:{location}</h3>
      <h4 className="font-medium text-base text-fuchsia-900">Contact: @shivkhera</h4>
    </div>
  );
};

export default UserFun;

{
  //increase count button
  /* <button
  onClick={() => {
    setCount(count + 1);
  }}
>
  count Increase
</button>; */
}

{
  /*useEffect(() => {
 
    const timer = setInterval(() => {
      console.log("useEffect runs...");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("UseEffect stops");
    };
  }, []);*/
}
