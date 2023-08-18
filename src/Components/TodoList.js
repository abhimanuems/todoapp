import { useEffect, useState } from "react";

const ToDoList =()=>{
const [currentDay,setCurrentDay]=useState("");
useEffect(()=>{
    function getDay(){ const daysOfWeek = [
       "Sunday",
       "Monday",
       "Tuesday",
       "Wednesday",
       "Thursday",
       "Friday",
       "Saturday",
     ];
     const today = new Date();
     const dayIndex = today.getDay();
     const currentDay = daysOfWeek[dayIndex];
     return currentDay;}
     setCurrentDay(getDay());
     
}   ,[]);

    return (
      <div className="app">
        <div className="subHeading">
          <br />
          <h2>It's {currentDay} plan it 🌝 ☕ </h2>
        </div>
      </div>
    );

}
export default ToDoList;
