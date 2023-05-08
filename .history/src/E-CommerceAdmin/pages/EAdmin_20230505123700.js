/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert, Badge, Form, Modal, Table } from "react-bootstrap";
import HOC from "../layout/HOC";

const EAdmin = () => {
  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);


  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "http://ec2-65-1-248-95.ap-south-1.compute.amazonaws.com:8886/api/user"
      );
      setData(data?.users);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const AllUsers = data?.filter((i) => i?.role.includes("admin"));

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
            Add Admin 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label></Form.Label>
            <Form.Control type='' />
          </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    );
  }
  

  return (
    <>
      <p className="headP">Dashboard / Admin</p>
      <div
        className="pb-4 sticky top-0  w-full flex justify-between items-center"
        style={{ width: "98%", marginLeft: "2%" }}
      >
        <span
          className="tracking-widest text-slate-900 font-semibold uppercase "
          style={{ fontSize: "1.5rem" }}
        >
          All Admin ( Total : {AllUsers?.length} )
        </span>
      </div>

      <section className="sectionCont">
        {AllUsers?.length === 0 || !AllUsers ? (
          <Alert>No Data Found</Alert>
        ) : (
          <>
            <div className="filterBox">
              <img
                src="https://t4.ftcdn.net/jpg/01/41/97/61/360_F_141976137_kQrdYIvfn3e0RT1EWbZOmQciOKLMgCwG.jpg"
                alt=""
              />
              <input
                type="search"
                placeholder="Start typing to search for Customers"
              />
            </div>

            <div className="overFlowCont">
              <Table>
                <thead>
                  <tr>
                    <th>SNo.</th>
                    <th>Name</th>
                    <th>User Name</th>
                    <th>Email Address</th>
                    <th>Role</th>
                    <th>Address</th>
                    <th>Company Name</th>
                    <th>Phone Number</th>
                    <th>Options</th>
                  </tr>
                </thead>
                <tbody>
                  {AllUsers?.map((i, index) => (
                    <tr key={index}>
                      <td>#{index + 1} </td>
                      <td> {i.name} </td>
                      <td> {i.username} </td>
                      <td> {i.email} </td>
                      <td>
                      <Badge bg="success">{i.role}</Badge>
                      </td>
                      <td> {i.address} </td>
                      <td> {i.companyName} </td>
                      <td> {i.phone} </td>
                      <td>
                        <i className="fa-solid fa-trash" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default HOC(EAdmin);
