import React from 'react'
import { useEffect, useState } from "react";
import "./App.css";
import Loading from "./Loading";
import Tours from "./Tours";
const url = "https://course-api.com/react-tours-project";
const FetchTours = () => {
    const [loading, setLoading] = useState(true);
    const [tours, setTours] = useState([]);
  
    const fetchTours = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log("response from url==>", data);
        setLoading(false);
        setTours(data);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
  
    useEffect(() => {
      fetchTours();
    }, []);
  
    if (loading) {
      return (
        <main>
          <Loading />
        </main>
      );
    }
    return (
      <div className="">
        <Tours tours={tours} setTours={setTours} />
      </div>
    );
  }


export default FetchTours;
