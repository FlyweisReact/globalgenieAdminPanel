/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert, Badge, Table } from "react-bootstrap";
import HOC from "../layout/HOC";

const EAdminCustomer = () => {
  const [ data , setData ] = useState([])

  const fetchData = async () => {
    try{
      const { data }  = await axios.get("http://ec2-65-1-248-95.ap-south-1.compute.amazonaws.com:8886/api/user")
      setData(data?.users)
    }catch(e) { 
      console.log(e)
    }
  }

  useEffect(() => {
    fetchData()
  },[])

  return (
    <>
      <p className="headP">Dashboard / Customers</p>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center" style={{ width: "98%", marginLeft: "2%" }}>
          <span className="tracking-widest text-slate-900 font-semibold uppercase " style={{ fontSize: "1.5rem" }}>
            All Customers ( Total : {data?.length} )
          </span>
        </div>

        <section className="sectionCont">

        {data?.length === 0 || !data ? <Alert>No Data Found</Alert> : 
        
        <>

        </>
        }
    
        </section>
      </>
  );
};

export default HOC(EAdminCustomer);
