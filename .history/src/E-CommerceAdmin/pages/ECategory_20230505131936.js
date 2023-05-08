/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../layout/HOC";
import { Table, Modal, Form, Button  } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";

const ECategory = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [ data , setData ] = useState([])
  const UserId = localStorage.getItem("AdminId")

  const fetchData = async () => {
    try {
      const { data } = await axios.get("http://ec2-65-1-248-95.ap-south-1.compute.amazonaws.com:8886/api/category")
      setData(data.categories)
    }catch(e) { 
      console.log(e)
    }
   }


   useEffect(() => {
    fetchData()
   },[])

  function MyVerticallyCenteredModal(props) {
    const [image  , setImage   ] = useState("")
    const [ name , setName  ] = useState("")
    const [ description , setDesc  ] = useState("")

    const postHandler = async (e) => {
      e.preventdefault()
      const fd = new FormData()
      fd.append('image' , image)
      fd.append('name' , name)
      fd.append('description' , description)
      try {
       const { data } = await axios.post('http://ec2-65-1-248-95.ap-south-1.compute.amazonaws.com:8886/api/category' , fd)
       toast.success(`${data?.category?.name} Added `)
       fetchData()
       props.onHide()
      }catch(e) {
        console.log(e)
      }
    }


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
            Add Category
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={postHandler}>
            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" required />
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

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <section>
        <p className="headP">Dashboard / Category</p>
        <div
          className="pb-4 sticky top-0  w-full flex justify-between items-center"
          style={{ width: "98%", marginLeft: "2%" }}
        >
          <span
            className="tracking-widest text-slate-900 font-semibold uppercase"
            style={{ fontSize: "1.5rem" }}
          >
            All Category's ( Total : {data?.length} )
          </span>
          <button
            onClick={() => {
              setModalShow(true);
            }}
            className="md:py-2 px-3 md:px-4 py-1 rounded-sm bg-[#19376d] text-white tracking-wider"
          >
            Add Category
          </button>
        </div>

        <section className="sectionCont">
          <div className="filterBox">
            <img
              src="https://t4.ftcdn.net/jpg/01/41/97/61/360_F_141976137_kQrdYIvfn3e0RT1EWbZOmQciOKLMgCwG.jpg"
              alt=""
            />
            <input type="search" placeholder="Start typing to search" />
          </div>

          <div className="overFlowCont">
            <Table>
              <thead>
                <tr>
                  <th>SNo.</th>
                  <th>Name</th>
                  <th>Added By</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
              {data?.map((i , index) => (
                <tr>
                  <td>#{index + 1} </td>
                  <td>
                    <span className="flexCont">
                      <img
                        src={i.image}
                        alt=""
                      />
                      <p> {i.name} </p>
                    </span>
                  </td>
                  <td>{i.userId}  </td>
                  <td>
                    {" "}
                    <span className="flexCont">
                      <i
                        className="fa-solid fa-pen-to-square "
                        onClick={() => {
                          setModalShow(true);
                        }}
                      ></i>
                      <i className="fa-sharp fa-solid fa-trash "></i>
                    </span>
                  </td>
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

export default HOC(ECategory);
