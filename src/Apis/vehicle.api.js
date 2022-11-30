import axios from "axios";
import baseUrl from "./config";

const getVehicle = (setVehicles) => {
  axios({
    method: "get",
    url: `${baseUrl}all-faculty`,
  })
    .then((res) => res.data)
    .then((data) => data.body)
    .then((body) => {
      // console.log(body);
      setVehicles(body);
    })
    .catch((err) => {
      console.log(err);
    });
};

const createVehicle = (Vehicle) => {
  axios({
    method: "post",
    url: `${baseUrl}create-faculty?name=${Vehicle}`,
  })
    .then((res) => res.data)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export { getVehicle, createVehicle };
