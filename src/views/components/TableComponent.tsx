import React, {useEffect, useState} from "react";

import DataTable from "react-data-table-component";
import { customStyles } from "./styleTable";


const TableComponent = ({ data, columns } ) => {
  
  const dataProps = data
  const [search, setSearch] = useState("")

  const handleSearch = (e) => {
    let value = e.target.value;
    setSearch(value)
  }
  
  function filterData(data) {
    let datafilter: object[] = [];
    data.filter((val) => {
      return val.firstName.toLowerCase().includes(search.toLowerCase());
    }).map((val) => {
      datafilter.push(val)
    }
    )
  }
 
  useEffect(() => {
    console.log("Les données ", dataProps)
  }, [])

  // POUR LES CONTACTS
  if (data?.contacts?.items) {
    
    let datafilter: object[] = [];
    
    return (
      <>
        <input type="text" name="searchbar" placeholder={"recherche par firstName..."} onChange={handleSearch} />
        {
          data.contacts.items.filter((val) => {
            return val.firstName.toLowerCase().includes(search.toLowerCase());
          }).map((val) => {
            datafilter.push(val)
          }
          )
        }
        <DataTable
          columns={columns}
          data={datafilter}
          pagination
          customStyles={customStyles}
        />
      </>
    ) 
  }

  // POUR LES SITES
  if (data?.sites?.items) {

    let datafilter: object[] = [];
    return (
      <>
        
        <input type="text" name="searchbar" placeholder={"recherche par name..."} onChange={handleSearch} />
        {
          data.sites.items.filter((val) => {
            return val.name.toLowerCase().includes(search.toLowerCase());
          }).map((val) => {
            datafilter.push(val)
          }
          )
        }
        <DataTable
          columns={columns}
          data={datafilter}
          pagination
          customStyles={customStyles}
        />
      </>
    )
  }

  // POUR LES CUSTOMERS
  if (data?.customers?.items) {
    let datafilter: object[] = [];
    return (
      <>
        <input type="text" name="searchbar" placeholder={"recherche par name..."} onChange={handleSearch} />
        {
          data.customers.items.filter((val) => {
            return val.name.toLowerCase().includes(search.toLowerCase());
          }).map((val) => {
            datafilter.push(val)
          }
          )
        }
        <DataTable
          columns={columns}
          data={datafilter}
          pagination
          customStyles={customStyles}
        />
      </>
    )
  }
  return (
     <>
      
      </>
  );
}

export default TableComponent
