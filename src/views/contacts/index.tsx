import React, {useState, useCallback, useEffect}  from "react";
import { useLazyQuery } from "@apollo/client";
import { LIST_CONTACTS } from "../../api/gql/contactsQueries";
import TableComponent from '../components/TableComponent'

const Contacts = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(3);
  const [getData, { data }] = useLazyQuery(LIST_CONTACTS);
  const handleChangePage = useCallback((e, newPage) => setPage(newPage), [])


  const columnsContacts = [
    {
        name: 'ID',
        selector: row => row.id,
    }, 
    {
        name: 'firstname',
        selector: row => row.firstName,
    }, 
    {
        name: 'lastName',
        selector: (row => row.lastName),
    },
    {
        name: 'email',
        selector: (row => row.email),
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
      <p> Liste des Contacts</p>

      <TableComponent data={data} columns={columnsContacts} />
    </div>
  );
};

export default Contacts;
