import { useEffect, useState } from "react";
import { REST_MENU_URL } from "./constants";

//CUSTOM HOOK

const useRestMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(REST_MENU_URL + resId);

    const json = await data.json();
    setResInfo(json.data);
    console.log(json);
  };

  return resInfo;
};

export default useRestMenu;
