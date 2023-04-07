import {config} from '../config';

export function getFoodItems(){
    const today = new Date();
    const day=today.getDay();
    
    const dayConfig=config[day];
    const curHr = today.getHours();
    const currentConfig={
        msg:"",
        foodtype:"",
    }
 
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
     const dayFood = dayConfig[currentConfig.foodtype].items;
     return {dayFood:dayFood,msg:currentConfig.msg,foodtype:currentConfig.foodtype};
};