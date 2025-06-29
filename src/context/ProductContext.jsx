import axios from "axios";
import React, { useContext, useReducer, useState } from "react";
import { createContext } from "react";
import { API } from "../helpers/const";
import { data } from "react-router-dom";
const productContext = createContext();
export const useShop = () => useContext(productContext);

const initialState = {
  value: [],
  oneShop: {},
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET":
      return { ...state, value: action.payload };
    case "GET_ONE":
      return { ...state, oneShop: action.payload };

    default:
      return state;
  }
};
const ProductContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [totalPage, setTotalPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [selectedColor, setSelectedColor] = useState("All");

  async function addShop(add) {
    await axios.post(API, add);
  }
  async function readShop() {
    let { data } = await axios.get(
      `${API}?per_page=6&current_page=${currentPage}&searchKey=name&searchValue=${searchValue}${
        selectedColor !== "All"
          ? `&searchKey=plants&searchValue=${selectedColor}`
          : ""
      }`
    );
    setTotalPage(data.total_pages);
    dispatch({
      type: "GET",
      payload: data.data,
    });
  }
  async function deleteShop(id) {
    await axios.delete(`${API}/${id}`);
    readShop();
  }
  async function getOneShop(id) {
    try {
      const { data } = await axios.get(`${API}/${id}`);
      dispatch({ type: "GET_ONE", payload: data });
      console.log(data);
    } catch (error) {
      console.error(error.message);
    }
  }
  const [page, setPage] = useState(1);
  const itemsPerPage = 3;
  const count = Math.ceil(data.length / itemsPerPage);

  function handlePage() {
    let start = (page - 1) * itemsPerPage;
    let end = start + itemsPerPage;
    return product.slice(start, end);
  }

  const values = {
    addShop,
    readShop,
    deleteShop,
    getOneShop,
    data: state.value,
    oneShop: state.oneShop,
    searchValue,
    setSearchValue,
    totalPage,
    currentPage,
    setCurrentPage,
    selectedColor,
    setSelectedColor,
    handlePage,
    count,
    setPage,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
