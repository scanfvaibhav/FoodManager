import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import  './style.css'
const FoodManager=()=>{

    setTimeout(function() {
        window.location.reload();
      }, 30000);
   const today = new Date();
   const day=today.getDay();
   const [nowFood,setNowfood] =useState([]);
   const currentConfig={
    msg:"",
    foodtype:"",
}
const curHr = today.getHours();
let dayConfig={};
 
if (curHr < 12) {
    currentConfig.msg='Good morning';
    currentConfig.foodtype='breakfast';
    
} else if (curHr < 18) {
    currentConfig.msg='Good Afternoon';
    currentConfig.foodtype='lunch';
} else {
    currentConfig.msg='Good Evening';
    currentConfig.foodtype='dinner';
}
   fetch("https://62d8480d90883139358ec41f.mockapi.io/FoodManager").then(response => response.json())
   .then(data => {
     dayConfig = data[day];
        setNowfood(dayConfig[currentConfig.foodtype].items);
   });
   
    const foodList = nowFood.map((obj)=>
    <div>
    <li>{obj.name}</li>
    {/* <li>{obj.discription}</li> */}
    {/* <li>"Quantity: "{obj.quantity}</li> */}
    <br/>
    <br/>
    </div>
);
    return <div> 
        <h1 className="StyledDay">{currentConfig.msg}</h1>
        <h2 className="StyledDay">{dayConfig.day}</h2>
        <h2 className="StyledDay">{today.getDate()+"/"+(Number(today.getMonth())+1)+"/"+today.getFullYear()}</h2>
        <div className="StyledDay">{foodList}</div>
        <p className="StyledDay">"Thank You !!"</p>
        <button type="button" onClick={()=>{
            window.location.href = window.location.origin+"/Ingradients";
        }}>"List of all items"</button>
    </div>
}
export default FoodManager;