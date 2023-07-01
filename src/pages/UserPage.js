import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { 
  DataGrid,
} from '@mui/x-data-grid';

import {useFullMenu} from '../services/basic';
import {DAY_MAP} from '../config/index';
// ----------------------------------------------------------------------
const TABLE_HEAD = [
  { field: 'item', headerName: 'Item', width: 130 },
  { field: 'description', headerName: 'Description', width: 130 },
  { field: 'type', headerName: 'type', width: 130 },
  { field: 'status', headerName: 'Status', width: 130 },
  { field: 'day', headerName: 'Day', width: 130, valueGetter: (params) =>
  `${DAY_MAP[params?.row?.day]}` },

];

// ----------------------------------------------------------------------
export default function UserPage() {
  const [USERLIST,setFullMenu]= useState([]);

  useFullMenu({},{
    onSuccess:(res)=>{
    debugger
    setFullMenu(res);
  }});

  return (
    <div style={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={USERLIST}
              columns={TABLE_HEAD}
              pageSize={5}
              rowsPerPageOptions={[5]}
            />

      </div>
  );
}
