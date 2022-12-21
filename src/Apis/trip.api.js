import axios from "axios";
import { STORAGE, getLocalStorage } from "Utils/storage";
import baseUrl from "./config";

const getEveryTrip = (setTrip, setIsSave) => {
  axios({
    method: "get",
    url: `${baseUrl}admin//api/admin/get-everything-trip`,
    headers: {
      Authorization: `${getLocalStorage(STORAGE.USER_TOKEN)}`,
    },
  })
    .then((res) => res.data)
    .then((data) => data.body)
    .then((body) => {
      setTrip(body);
      setIsSave(false);
    })
    .catch((err) => {
      console.log(err);
    });
};

const createTripPrice = (Data, setIsSave, setNotification) => {
  axios({
    method: "post",
    url: `${baseUrl}admin/create-trip-price`,
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
      console.log(err);
      setNotification("error");
    });
};


const updatePriceTrip = (Data, setIsSave, setNotification) => {
  axios({
    method: "post",
    url: `${baseUrl}admin/update-price`,
    data: Data,
    headers: {
      Authorization: `${getLocalStorage(STORAGE.USER_TOKEN)}`,
    },
  })
    .then((res) => res.data)
    .then((data) => data.body)
    .then((body) => {
      setIsSave(true);
      setNotification(body);
    })
    .catch((err) => {
      console.log(err);
      setNotification("error");
    });
};

const updateTrip = (Data, setIsSave, setNotification) => {
    axios({
      method: "post",
      url: `${baseUrl}admin/update-trip`,
      data: Data,
      headers: {
        Authorization: `${getLocalStorage(STORAGE.USER_TOKEN)}`,
      },
    })
      .then((res) => res.data)
      .then((data) => data.body)
      .then((body) => {
        setIsSave(true);
        setNotification(body);
      })
      .catch((err) => {
        console.log(err);
        setNotification("error");
      });
  };

export { getEveryTrip, createTripPrice,updatePriceTrip, updateTrip };