/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import HOC from "../layout/HOC";

const Complaints = () => {
  const [ data , setData ] = useState([])

  const fetchData = async () => {
    try{
      const { data } = await axios.get("http://ec2-65-1-248-95.ap-south-1.compute.amazonaws.com:8886/api/help")
      setData(data.result)
    }catch(e) { 
      console.log(e)
    }
  }

  useEffect(() => {
    fetchData()
    window.scrollTo(0, 0);  
  },[])

  return (
    <>
      <p className="headP">Dashboard / Help and Support</p>
      <div
        className="pb-4 sticky top-0  w-full flex justify-between items-center"
        style={{ width: "98%", marginLeft: "2%" }}
      >
        <span
          className="tracking-widest text-slate-900 font-semibold uppercase "
          style={{ fontSize: "1.5rem" }}
        >
          All Help and Support ( Total : {data?.length} )
        </span>
      </div>

      <section className="sectionCont">
        <div className="filterBox">
          <img
            src="https://t4.ftcdn.net/jpg/01/41/97/61/360_F_141976137_kQrdYIvfn3e0RT1EWbZOmQciOKLMgCwG.jpg"
            alt=""
          />
          <input
            type="search"
            placeholder="Start typing to search"
          />
        </div>

        <div className="overFlowCont">
          <Table>
            <thead>
              <tr>
                <th>SNo.</th>
                <th>Name</th>
                <th>Message</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {
                data?.map((i , index) => (
                  <tr key={index}>
                    <td> #{index + 1} </td>
                    <td> {i.name} </td>
                    <td> {i.message} </td>
                    <td> {i.message} </td>
                  </tr>
                ))
              }
            </tbody>
          </Table>
        </div>
      </section>
    </>
  );
};

export default HOC(Complaints);
