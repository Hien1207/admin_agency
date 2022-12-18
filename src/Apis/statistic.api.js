import axios from "axios";
import { STORAGE, getLocalStorage } from "Utils/storage";
import baseUrl from "./config";

const getListHistory = (setListHistory, setIsSave) => {
  axios({
    method: "get",
    url: `${baseUrl}admin/get-all-history`,
    headers: {
      Authorization: `${getLocalStorage(STORAGE.USER_TOKEN)}`,
    },
  })
    .then((res) => res.data)
    .then((data) => {
      setListHistory(data);
      setIsSave(false);
    })
    .catch((err) => {
      console.log(err);
      setIsSave(false);
    });
};
const getListHistoryByDateOrder = (Data, setListHistory, setIsSave) => {
  axios({
    method: "post",
    url: `${baseUrl}admin/get-history-by-dateOrder`,
    headers: {
      Authorization: `${getLocalStorage(STORAGE.USER_TOKEN)}`,
    },
    data: Data,
  })
    .then((res) => res.data)
    .then((data) => {
      setListHistory(data);
      setIsSave(false);
    })
    .catch((err) => {
      console.log(err);
      setIsSave(false);
    });
};
const getListHistoryByDateStart = (Data, setListHistory, setIsSave) => {
  axios({
    method: "post",
    url: `${baseUrl}admin/get-history-by-dateStart`,
    headers: {
      Authorization: `${getLocalStorage(STORAGE.USER_TOKEN)}`,
    },
    data: Data,
  })
    .then((res) => res.data)
    .then((data) => {
      setListHistory(data);
      setIsSave(false);
    })
    .catch((err) => {
      console.log(err);
      setIsSave(false);
    });
};
const getListHistoryByCustomer = (name, setListHistory, setIsSave) => {
  axios({
    method: "get",
    url: `${baseUrl}admin/get-history-by-nameCustomer/${name}`,
    headers: {
      Authorization: `${getLocalStorage(STORAGE.USER_TOKEN)}`,
    },
  })
    .then((res) => res.data)
    .then((data) => {
      setListHistory(data);
      setIsSave(false);
    })
    .catch((err) => {
      console.log(err);
      setIsSave(false);
    });
};
const getListHistoryByYear = (year, setListHistory, setIsSave) => {
  axios({
    method: "get",
    url: `${baseUrl}admin/get-statistic/${year}`,
    headers: {
      Authorization: `${getLocalStorage(STORAGE.USER_TOKEN)}`,
    },
  })
    .then((res) => res.data)
    .then((data) => {
      const arr = [];
      data.adminGetStatisticList.forEach((item) => {
        for (let i = 0; i < item.historyBookingList.length; i += 1) {
          arr.push({
            ...item.historyBookingList[i],
            month: item.month,
          });
        }
      });
      //   console.log(data);
      setListHistory(arr);
      setIsSave(false);
    })
    .catch((err) => {
      console.log(err);
      setIsSave(false);
    });
};

export {
  getListHistory,
  getListHistoryByCustomer,
  getListHistoryByDateOrder,
  getListHistoryByDateStart,
  getListHistoryByYear,
};
