import React, { useCallback, useEffect, useState } from "react";
import TableComponent from '../components/TableComponent'
import { LIST_CUSTOMERS } from "../../api/gql/customersQueries";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";

import { LIST_SITES } from "../../api/gql/sitesQueries";
import { useLazyQuery } from "@apollo/client";


const Sites = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(3);
  const [getData, { data }] = useLazyQuery(LIST_SITES);
  const [reqData, setReqdata] = useState()
  

  const showData = () => {
    console.log("data all: ", data)
    
    console.log("reqData", reqData)
    setReqdata(data.sites.items)
    console.log("rowsPerPage: ", rowsPerPage)
    console.log("page: ", page)
  }
  const columnsSites = [
    {
        name: 'name',
        selector: row => row.name,
    }, 
    {
        name: 'Phone',
        selector: (row => row.phone),
    },
    {
        name: 'Siret',
        selector: (row => row.siret),
    },
  ];
 

  useEffect(() => {
    getData({
      variables: {
        page,
        itemsPerPage: rowsPerPage,
      },
    });
  }, [getData, rowsPerPage, page]);
  
  

  return (
    <div>
     
      <p>Liste des sites</p>
      <TableComponent data={data} columns={columnsSites} />
    </div>
  );
};

export default Sites;
