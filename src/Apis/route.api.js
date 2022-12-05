import axios from "axios";
import { STORAGE, getLocalStorage } from "Utils/storage";
import baseUrl from "./config";

const getRoute = (setRoute, setIsSave) => {
  axios({
    method: "get",
    url: `${baseUrl}admin/get-route-and-routestation`,
    headers: {
      Authorization: `${getLocalStorage(STORAGE.USER_TOKEN)}`,
    },
  })
    .then((res) => res.data)
    .then((data) => data.body)
    .then((body) => {
      console.log(body);
      setRoute(body);
      setIsSave(false);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getRouteStationById = (idRoute, setStationById, setIsSave) => {
  axios({
    method: "get",
    url: `${baseUrl}admin/get-route-and-routestation-by-id-route/${idRoute}`,
    headers: {
      Authorization: `${getLocalStorage(STORAGE.USER_TOKEN)}`,
    },
  })
    .then((res) => res.data)
    .then((data) => {
      console.log(data);
      setStationById(data.routeStationList);
      setIsSave(false);
    })
    .catch((err) => {
      console.log(err);
    });
};

export { getRoute, getRouteStationById };
