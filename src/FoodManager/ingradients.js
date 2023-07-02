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
                        if(itemCount[element]){
                            itemCount[element]=itemCount[element]+1;
                        }else{
                            itemCount[element]=1;
                        }
                    })
                });
        });
        setFetching(false);
        setResponse(itemCount); 
    });
    }
    
  
    return <div>
            {response?Object.keys(response).map((ele)=><li>{ele}--{response[ele]}</li>):""}
    </div>
}
export default Ingradients;