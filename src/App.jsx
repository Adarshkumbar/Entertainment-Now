import { useState, useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";
import { BrowserRouter, Route, Routes } from "react-router-dom"; //Makes ease to swicth btw pages or  ROUTES
import { getApiConfiguration, getGenres } from "./store/homeSlice"; //getApiConfiguration is an action
import { useDispatch, useSelector } from "react-redux";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import SearchResult from "./pages/searchResult/SearchResult";
import Explore from "./pages/explore/Explore";
import PageNotFound from "./pages/404/PageNotFound";
import Contact from "./pages/contact/Contact";
import levi from "./gifs/csm power.gif";
import MyList from "./pages/myList/MyList";
import Login from "./pages/myList/Login";
import SignUp from "./pages/myList/SignUp";
import {  CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import LoadingReact from "./components/spinner/LoadingReact";


function App() {
  // this is for loadingSpinner
  // const [loadSpin,setLoadSpin] = useState(true);
   let [loading, setLoading] = useState(false);
   let [color, setColor] = useState("#ffffff");
  const dispatch = useDispatch();
  
  const { url } = useSelector((state) => state.home);
  // console.log("url :", url);
  useEffect(() => {
    fetchApiConfig();
    genresCall();
  }, []);
  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {
      // console.log(res);

      const url = {
        backdrop: res.images?.secure_base_url + "original", // no / cuz alr present in result of res.images.secure_base_url && original means  size of image
        poster: res.images?.secure_base_url + "original",//original is size 
        profile: res.images?.secure_base_url + "original",
      };

      dispatch(getApiConfiguration(url)); //passing res in action to set values i.e Store
    });
  };

  const genresCall = async () =>{
    let promises = [];
    let endPoints = ["tv","movie"];
    let allGenres = {};   // all values will be stored in this obj

    endPoints.forEach((url)=>{
      promises.push(fetchDataFromApi(`/genre/${url}/list`));
    });

    const data = await Promise.all(promises); // using Promises.all() cuz  it will wait it both responses are recieved (here tv and movie) and we'll get responses in an array togther .......i.e not seperate response for movie and tv
    data.map(({genres})=>{
        return genres?.map((item)=>(allGenres[item.id]=item))  // id will be "key" and response will be "value"
    })
    dispatch(getGenres(allGenres))
  }
  //  this is for loading
    useEffect(() => {
      // Show the loading spinner before rendering the actual content.
      setLoading(true);

      // After the content has rendered, hide the loading spinner.
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }, []);
  
  // return (
    // ENTIRE App will be wrapped inside  BrowserRouter
    if(loading) 
      return ( <LoadingReact /> );
    else
      return(
        <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:mediaType/:id" element={<Details />} />
          <Route path="/search/:query" element={<SearchResult />} />
          <Route path="/explore/:mediaType/" element={<Explore />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/mylist" element={<MyList />} /> */}
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/signup" element={<SignUp />} /> */}
          <Route path="/loader" element={<LoadingReact />} />
          {/* any route but above routes  * i.e below one is used */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
      );
      
  // );
}

export default App;
