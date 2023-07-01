import React, {useState} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import {useUpdateMenu} from '../services/basic';

export default function UpdateMeal() {
  const currencies = [
    {
      label: 'SUNDAY',
      value: '0',
    },
    {
      label: 'MONDAY',
      value: '1',
    },
    {
      label: 'TUESDAY',
      value: '2',
    },
    {
      label: 'WEDNESDAY',
      value: '3',
    },
  ];
  const MEAL_TYPE = [
    {
      label: 'BREAK FAST',
      value: '0',
    },
    {
      label: 'LUNCH',
      value: '1',
    },
    {
      label: 'DINNER',
      value: '2',
    },
  ];
  const [data,setData]=useState({});
  const{mutate:update}=useUpdateMenu();
  const submitHandler =(obj)=>{
    debugger
    update(data)
  };
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" }
      }}
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-day"
          select
          label="Day"
          defaultValue="0"
          helperText="Please select your day"
          value={data?.day}
          onChange={({target})=>{
            setData({...data,day:target.value})
          }}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-select-meal"
          select
          label="Meal Type"
          defaultValue="0"
          helperText="Please select your meal Type"
          value={data?.type}
          onChange={({target})=>{
            setData({...data,type:target.value})
          }}
        >
          {MEAL_TYPE.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-item-input"
          label="Item"
          value={data?.item}
          onChange={({target})=>{
            setData({...data,item:target.value})
          }}
        />
        <TextField
          id="outlined-description-input"
          label="Description"
          multiline
          rows={4}
          value={data?.description}
          onChange={({target})=>{
            setData({...data,description:target.value})
          }}
        />
        <TextField
          id="outlined-number"
          label="Quantity"
          type="number"
          value={data?.quantity}
          InputLabelProps={{
            shrink: true
          }}
          onChange={({target})=>{
            setData({...data,quantity:target.value})
          }}
        />
      </div>
      <Button variant="contained" endIcon={<SendIcon />} onClick={submitHandler}>
        Update
      </Button>
    </Box>
  );
}
