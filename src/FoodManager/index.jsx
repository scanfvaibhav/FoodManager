import React, {useEffect, useState} from 'react';
import  './style.css'
const FoodManager=()=>{

    setTimeout(function() {
        window.location.reload();
      }, 30000);
   const today = new Date();
   const day=today.getDay();
   const [nowFood,setNowfood] =useState([]);
   const [allMeal,setAllMeal] = useState([]);
   
   const currentConfig={
    msg:"",
    foodtype:"",
}
const curHr = today.getHours();
const [dayConfig,setDayConfig]=useState({});
const footType ={
    1:'breakfast',
    2:'lunch',
    3:'dinner'
}
if (curHr < 11) {
    currentConfig.msg='Good morning';
    currentConfig.foodtype=1;
    
} else if (curHr < 18) {
    currentConfig.msg='Good Afternoon';
    currentConfig.foodtype=2;
} else {
    currentConfig.msg='Good Evening';
    currentConfig.foodtype=3;
}
const [foodState,setFoodstate] = useState({
    type: currentConfig.foodtype,
    day:day,
});
useEffect(()=>{
    const dayConfig = allMeal[day];
    if(dayConfig){
    setDayConfig(dayConfig);
    setNowfood(dayConfig[footType[currentConfig.foodtype]].items);
    }
},[allMeal]);
useEffect(()=>{
    fetch("https://62d8480d90883139358ec41f.mockapi.io/FoodManager").then(response => response.json())
   .then(data => {
    setAllMeal(data);
   });
},[])
   
   const showNextMeal = ()=>{
       if(foodState.type===3){
        setFoodstate({
            type:1,
            day:foodState.day===6?0:Number(foodState.day)+1
        });
       }else{
        setFoodstate({
            type:Number(foodState.type)+1,
            day:foodState.day
        }); 
       }    
   }
   const showCurrentMeal = ()=>{
        setFoodstate({
            type:Number(currentConfig.foodtype),
            day:day
        });
   }
   useEffect(()=>{
       if(allMeal.length>0)
    setNowfood(allMeal[foodState.day][footType[foodState.type]].items);
   },[foodState]);
    const foodList = nowFood.map((obj)=>
    <div>
    <li><b>{obj.name}</b></li>
    {/* <li>{obj.discription}</li> */}
    {/* <li>"Quantity: "{obj.quantity}</li> */}
    <br/>
    </div>
);
    return <div> 
        <h1 className="StyledDay">{currentConfig.msg}</h1>
        <h2 className="StyledDay">{footType[foodState.type]}</h2>

        <h2 className="StyledDay">{dayConfig.day}</h2>
        <h3 className="StyledDay">{today.getDate()+"/"+(Number(today.getMonth())+1)+"/"+today.getFullYear()}</h3>
        <div className="StyledDay"><ol>{foodList}</ol></div>
        <p className="StyledDay">"Thank You !!"</p>
        <button type="button" onClick={showNextMeal}>Next meal</button>
        <button type="button" onClick={()=>{
            window.location.href = window.location.origin+"/Ingradients";
        }}>"List of all items"</button>
                <button type="button" onClick={showCurrentMeal}>Current meal</button>

    </div>
}
export default FoodManager;