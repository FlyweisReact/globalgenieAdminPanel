/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Table } from "react-bootstrap";
import { toast } from "react-toastify";
import HOC from "../layout/HOC";

const Complaints = () => {
  const [ data , setData ] = useState([])
  const [ modalShow , setModalShow] = useState(false)

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

  function MyVerticallyCenteredModal(props) {
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");

    const postHandler = async (e) => {
      e.preventDefault();
      try {
        const { data } = await axios.post(
          "http://ec2-65-1-248-95.ap-south-1.compute.amazonaws.com:8886/api/help",
          {
             name : email,
            message :  mobile,
          }
        );
        console.log(data.message);
        fetchData();
        toast.success("Added");
        props.onHide();
      } catch (e) {
        console.log(e);
      }
    };

    
  const deleteHandler = async (id) => {
    try {
      const { data } = await axios.delete(
        `http://ec2-65-1-248-95.ap-south-1.compute.amazonaws.com:8886/api/help/${id}`
      );
      console.log(data);
      fetchData();
      toast.success("Deleted ");
    } catch (e) {
      console.log(e);
    }
  };

    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {" "}
            Add Support
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={postHandler}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                type="text"
                required
                onChange={(e) => setMobile(e.target.value)}
              />
            </Form.Group>
            <Button className="btn" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <>

    
<MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

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
        
        <button
            onClick={() => {
              setModalShow(true);
            }}
            className="md:py-2 px-3 md:px-4 py-1 rounded-sm bg-[#19376d] text-white tracking-wider"
          >
            Add Help and Support
          </button>
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
                    <td>
                    <i className="fa-solid fa-trash" onClick={() => de(i._id)} />
                     </td>
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
