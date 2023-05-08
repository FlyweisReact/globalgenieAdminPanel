/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, FloatingLabel, Form, Modal, Table } from "react-bootstrap";
import { toast } from "react-toastify";
import HOC from "../layout/HOC";

const PushNotification = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [ data , setData ] = useState([])

  const fetchData =async () => {
    try{
      const { data } = await axios.get("http://ec2-65-1-248-95.ap-south-1.compute.amazonaws.com:8886/api/notify")
      setData(data.Notification)
    }catch(e) { 
      console.log(e)
    }
  }
  useEffect(() => {
    fetchData()
  },[])

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {" "}
            Add Admin
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <FloatingLabel controlId="floatingTextarea2" label="Message">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>
            </Form.Group>

            <Button
              style={{ backgroundColor: "#19376d", borderRadius: "0" }}
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }





  const deleteHandler = async (id) => {
    try {
      toast.success(`Deleted Successfully`);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <p className="headP">Dashboard / Push Notification</p>

      <div
        className="pb-4 sticky top-0  w-full flex justify-between items-center"
        style={{ width: "98%", marginLeft: "2%" }}
      >
        <span
          className="tracking-widest text-slate-900 font-semibold uppercase "
          style={{ fontSize: "1.5rem" }}
        >
          All Notification (Total : {data.length})
        </span>
        <button
          onClick={() => {
            setModalShow(true);
          }}
          className="md:py-2 px-3 md:px-4 py-1 rounded-sm  bg-[#19376d] text-white tracking-wider"
        >
          Add Notification
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
            placeholder="Start typing to Search"
          />
        </div>

        <div className="overFlowCont">
          <Table>
            <thead>
              <tr>
                <th>SNo.</th>
                <th>Message</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((i, index) => (
                <tr key={index}>
                  <td> #{index + 1} </td>
                  <td> {i.message} </td>
                  <td>
                    <i
                      className="fa-solid fa-trash"
                      onClick={() => deleteHandler(i.name)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </section>
    </>
  );
};

export default HOC(PushNotification);
