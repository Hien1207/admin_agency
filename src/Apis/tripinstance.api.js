import axios from "axios";
import { STORAGE, getLocalStorage } from "Utils/storage";
import baseUrl from "./config";

const getTripInstance = (setTripInstance) => {
  axios({
    method: "get",
    url: `${baseUrl}admin/get-trip-instance`,
    headers: {
      Authorization: `${getLocalStorage(STORAGE.USER_TOKEN)}`,
    },
  })
    .then((res) => res.data)
    .then((data) => data.body)
    .then((body) => {
      console.log(body);
      setTripInstance(body);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getAllVehicle = (setAllVehicles) => {
  axios({
    method: "get",
    url: `${baseUrl}all-vehicle`,
    headers: {
      Authorization: `${getLocalStorage(STORAGE.USER_TOKEN)}`,
    },
  })
    .then((res) => res.data)
    .then((data) => data.body)
    .then((body) => {
      // console.log(body);
      setAllVehicles(body);
    })
    .catch((err) => {
      console.log(err);
    });
};

const createVehicle = (Data) => {
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
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateVehicle = (Data) => {
  axios({
    method: "post",
    url: `${baseUrl}update-vehicle`,
    data: Data,
    headers: {
      Authorization: `${getLocalStorage(STORAGE.USER_TOKEN)}`,
    },
  })
    .then((res) => res.data)
    .then((data) => data.body)
    .then((body) => {
      console.log(body);
    })
    .catch((err) => {
      console.log(err);
    });
};

export { getTripInstance, createVehicle, updateVehicle, getAllVehicle };
