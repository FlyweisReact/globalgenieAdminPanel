/** @format */

import React, { useState } from "react";
import { Button, Form, Modal, Table } from "react-bootstrap";
import { toast } from "react-toastify";
import HOC from "../layout/HOC";

const Coupon = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [query, setQuery] = useState("");

  function MyVerticallyCenteredModal(props) {
    
    const Today = new Date().toISOString().slice(0,10)


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
            Add Coupon Code
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Coupon Code</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Min. Amount</Form.Label>
              <Form.Control type="number" min={0} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Discount</Form.Label>
              <Form.Control type="number" min={0} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Activation Date</Form.Label>
              <Form.Control type="date" required min={Today} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Expiration  Date</Form.Label>
              <Form.Control type="date" required />
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

  const data = [
    {
      Coupon: "June24",
      minAmount: "500",
      discount: "40",
      aDate: "12 March 2023",
      eDate: "15 March 2023",
      createDate: "11 March 2023",
    },
    {
      Coupon: "May212",
      minAmount: "200",
      discount: "20",
      aDate: "12 March 2023",
      eDate: "15 March 2023",
      createDate: "11 March 2023",
    },
  ];

  const filterData = !query
    ? data
    : data.filter(
        (i) =>
          i?.Coupon?.toLowerCase().includes(query?.toLowerCase()) ||
          i?.minAmount?.toString()?.toLowerCase().includes(query?.toLowerCase())
      );

  const deleteHandler = async (id) => {
    try {
      toast.success(`${id} Deleted Successfully`);
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

      <p className="headP">Dashboard / Coupon</p>

      <div
        className="pb-4 sticky top-0  w-full flex justify-between items-center"
        style={{ width: "98%", marginLeft: "2%" }}
      >
        <span
          className="tracking-widest text-slate-900 font-semibold uppercase "
          style={{ fontSize: "1.5rem" }}
        >
          All Coupon (Total : {data.length})
        </span>
        <button
          onClick={() => {
            setModalShow(true);
          }}
          className="md:py-2 px-3 md:px-4 py-1 rounded-sm  bg-[#19376d] text-white tracking-wider"
        >
          Add Coupon
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
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="overFlowCont">
          <Table>
            <thead>
              <tr>
                <th>SNo.</th>
                <th>Coupon Code</th>
                <th>Min. Amount</th>
                <th>Discount</th>
                <th>Activation Date</th>
                <th>Expiration Date</th>
                <th>Created Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filterData.map((i, index) => (
                <tr key={index}>
                  <td> #{index + 1} </td>
                  <td> {i.Coupon} </td>
                  <td> {i.minAmount} </td>
                  <td> {i.discount} </td>
                  <td> {i.aDate} </td>
                  <td> {i.eDate} </td>
                  <td> {i.createDate} </td>
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

export default HOC(Coupon);
