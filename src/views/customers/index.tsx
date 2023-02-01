import React, { useCallback, useEffect, useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";

import { LIST_CUSTOMERS } from "../../api/gql/customersQueries";
import { useLazyQuery } from "@apollo/client";
import TableComponent from '../components/TableComponent';

const Customers = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(3);
  const [getData, { data }] = useLazyQuery(LIST_CUSTOMERS);

  const columnsCustomer = [
    {
        name: 'Nom',
        selector: row => row.name,
    }, 
    {
        name: 'Adresse',
        selector: row => row.address,
    }, 
    {
        name: 'Responsable',
        selector: (row => row.manager.firstName),
    },
    {
        name: 'Nombre de sites',
        selector: (row => row.nbSites),
    },
    {
        name: "Nombre d'intervention",
        selector: (row => row.nbInterventions),
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
    <>
      <p>Liste des Clients:</p>
      <TableComponent data={data} columns={columnsCustomer} />
    </>
  );
};

export default Customers;
