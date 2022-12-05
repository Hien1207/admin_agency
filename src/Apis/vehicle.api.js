import axios from "axios";
import { STORAGE, getLocalStorage } from "Utils/storage";
import baseUrl from "./config";

const getVehicle = (setVehicles, setIsSave) => {
  axios({
    method: "get",
    url: `${baseUrl}all-vehicle-agency`,
    headers: {
      Authorization: `${getLocalStorage(STORAGE.USER_TOKEN)}`,
    },
  })
    .then((res) => res.data)
    .then((data) => data.body)
    .then((body) => {
      // console.log(body);
      setVehicles(body);
      setIsSave(false);
    })
    .catch((err) => {
      console.log(err);
    });
};

// const getAllVehicle = (setAllVehicles, setIsSave) => {
//   axios({
//     method: "get",
//     url: `${baseUrl}all-vehicle`,
//     headers: {
//       Authorization: `${getLocalStorage(STORAGE.USER_TOKEN)}`,
//     },
//   })
//     .then((res) => res.data)
//     .then((data) => data.body)
//     .then((body) => {
//       // console.log(body);
//       setAllVehicles(body);
//       setIsSave(false);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

const createVehicle = (Data, setIsSave, setNotification) => {
  axios({
    method: "post",
    url: `${baseUrl}create-vehicle`,
    data: Data,
    headers: {
      Authorization: `${getLocalStorage(STORAGE.USER_TOKEN)}`,
    },
  })
    .then((res) => res.data)
    .then((data) => data.body)
    .then((body) => {
      console.log(body);
      setNotification(body);
      setIsSave(true);
    })
    .catch((err) => {
      setNotification("error");
      console.log(err);
    });
};

const updateVehicle = (Data, setIsSave, setNotification) => {
  axios({
    method: "put",
    url: `${baseUrl}update-vehicle`,
    data: Data,
    headers: {
      Authorization: `${getLocalStorage(STORAGE.USER_TOKEN)}`,
    },
  })
    .then((res) => res.data)
    .then((data) => data.body)
    .then((body) => {
      setNotification(body);
      setIsSave(true);
    })
    .catch((err) => {
      setNotification("error");
      console.log(err);
    });
};

export { getVehicle, createVehicle, updateVehicle };
