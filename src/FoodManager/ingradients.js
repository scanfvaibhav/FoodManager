import React, {useState} from 'react';
const Ingradients =()=>{

    const [response,setResponse] = useState("");
    const [fetching,setFetching] = useState(false);
    if(!fetching){
        setFetching(true);
        fetch("https://62d8480d90883139358ec41f.mockapi.io/FoodManager").then(response => response.json())
        .then(data => {
            const itemCount = {}
            data.forEach((res)=>{
                const breakfast = res.breakfast.items;
                const lunch = res.lunch.items;
                const dinner = res.dinner.items;
                const allItems = [...breakfast,...lunch,...dinner];
               
                allItems.forEach(({ingredients=[]})=>{
                    ingredients.forEach((element)=>{
                        if(itemCount[element.toLowerCase()]){
                            itemCount[element.toLowerCase()]=itemCount[element.toLowerCase()]+1;
                        }else{
                            itemCount[element.toLowerCase()]=1;
                        }
                    })
                });
        });
        setFetching(false);
        setResponse(itemCount); 
    });
    }
    
  
    return <div><h2>List of items required </h2>
    <br/>
    <button type="button" onClick={()=>{
            window.location.href = window.location.origin+"/FoodManager";
        }}>"Now items"</button>
        <br/>
        <br/>
        <div class="list">
        <ul>
            {response?Object.keys(response).map((ele)=><li><b>{ele}</b>--{response[ele]}</li>):""}
            </ul>
        </div>
        
   </div>
}
export default Ingradients;