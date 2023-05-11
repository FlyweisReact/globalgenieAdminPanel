/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Badge, Button, Form, Modal, Table } from "react-bootstrap";
import HOC from "../layout/HOC";

const EAdminOrders = () => {
  const [modalShow, setModalShow] = useState(false);
  const [ data , setData ] = useState([])

  const fetchData = async () => {
    try {
      const { data } = await axios.get("http://ec2-65-1-248-95.ap-south-1.compute.amazonaws.com:8886/api/order")
      setData(data.orders)
      }catch(e) {
      console.log('Order Err=>' ,e)
    }
  }

  useEffect(() => {
    fetchData()
  },[])

  function EditStatus(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Status
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Select aria-label="Default select example" className="mb-3">
              <option>--Edit Status--</option>
              <option value="1">Shipped</option>
              <option value="2">Pending</option>
              <option value="3">Canceled</option>
            </Form.Select>
            <Button variant="outline-success">Submit</Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <>
      <EditStatus show={modalShow} onHide={() => setModalShow(false)} />
      <section>
      
      <p className="headP">Dashboard / Order</p>

        <div        className="pb-4 sticky top-0  w-full flex justify-between items-center"
        style={{ width: "98%", marginLeft: "2%" }}>
          <span   className="tracking-widest text-slate-900 font-semibold uppercase"
          style={{ fontSize: "1.5rem" }}>
            All Order's (Total : {data?.length})
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
        <Table >
          <thead>
            <tr>
              <th>Number</th>
              <th>User</th>
              <th>Total Price</th>
              <th>Paid</th>
              <th>Delivered</th>
              <th>Status</th>
              <th>Items</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            { data?.map((i , index) => (
              <tr key={index}>
                <td> #{index + 1} </td>
                <td> {i.user} </td>
                <td> {i.totalPrice} </td>
                <td> {i.isPaid === true ? "Paid" : "UnPaid"} </td>
                <td> {i.isDelivered === true ? "Delivered" : "Not Deliverd Yet"} </td>
                <td> {i.paymentMethod} </td>
                <td> {i.taxPrice} </td>
                <td> {i.shippingPrice} </td>
                <td> {i.phone} </td>
                <td> {i.status} </td>
                <td> {i.products?.[0]?.product} </td>
                <td> {i.products?.[0]?.totalProductQuantity} </td>
                <td> {i.products?.[0]?.totalProductPrice} </td>
                <td> 
                {i.shippingAddress?.address + i.shippingAddress?.city + i.shippingAddress?.postalCode + i.shippingAddress?.country  }
                 </td>
                <td> {i.phone} </td>
              </tr>
            ))}
          </tbody>
        </Table>
        </div>
        </section>
      </section>
    </>
  );
};

export default HOC(EAdminOrders);
