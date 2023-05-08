/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../layout/HOC";
import {
  Table,
  Modal,
  Form,
  Button,
  Badge,
  FloatingLabel,
} from "react-bootstrap";
import { toast } from "react-toastify";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from "axios";

const EProduct = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow2, setModalShow2] = useState(false);
  const [edit, setEdit] = useState(false);
  const [ query , setQuery ] = useState('')
  const [data, setData] = useState([]);

   // Pagination
   const [currentPage2, setCurrentPage2] = useState(1);
   const [postPerPage2] = useState(5);
   const lastPostIndex2 = currentPage2 * postPerPage2;
   const firstPostIndex2 = lastPostIndex2 - postPerPage2;
 
   let pages2 = [];
 
   const TotolData = query
     ? 
     data?.filter((i) =>
     i?.product_name?.toLowerCase().includes(query?.toLowerCase()) ||
     i?.quantity?.toString()?.toLowerCase().includes(query?.toLowerCase()) ||
     i?.quantity?.toLowerCase().includes(query?.toLowerCase()) 
     )
     : data;
 
     useEffect(() => {
       if(query) {
         setCurrentPage2(1)
       }
     },[ query])
 
   const slicedData = TotolData?.slice(firstPostIndex2, lastPostIndex2);
 
   for (let i = 1; i <= Math.ceil(TotolData?.length / postPerPage2); i++) {
     pages2.push(i);
   }
 
   function Next() {
     setCurrentPage2(currentPage2 + 1);
   }
 
   function Prev() {
     if (currentPage2 !== 1) {
       setCurrentPage2(currentPage2 - 1);
     }
   }
 
 

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "http://ec2-65-1-248-95.ap-south-1.compute.amazonaws.com:8886/api/product/"
      );
      setData(data?.stats?.ProducData);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
            {edit ? "Edit Product" : " Add New Product"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Product Images</Form.Label>
              <Form.Control type="file" required multiple />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label> Product Name</Form.Label>
              <Form.Control type="text" required placeholder="Product Name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label> Category</Form.Label>
              <Form.Select aria-label="Default select example" required>
                <option>-- Select Category --</option>
                <option>First Category</option>
                <option>Second Category</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <FloatingLabel controlId="floatingTextarea2" label="Description">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                />
              </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Discount</Form.Label>
              <Form.Control type="text" required placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control type="text" required placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Stock</Form.Label>
              <Form.Control type="text" required placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Features</Form.Label>
              <FloatingLabel controlId="floatingTextarea2" label="Features">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                />
              </FloatingLabel>
            </Form.Group>

            <Button className="btn">Submit</Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  function MyVerticallyCenteredModal2(props) {
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
            View Product
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="View">
            {" "}
            <strong>Name : </strong> Demo Product{" "}
          </p>
          <p className="View">
            {" "}
            <strong>Category : </strong> Demo Category{" "}
          </p>

          <p className="View">
            {" "}
            <strong>Description : </strong> Description{" "}
          </p>

          <p className="View">
            {" "}
            <strong>Discount : </strong> Discount%{" "}
          </p>
          <p className="View">
            {" "}
            <strong>Price : </strong> Price{" "}
          </p>

          <p className="View">
            {" "}
            <strong>Stock : </strong> Stock{" "}
          </p>
          <p className="View">
            {" "}
            <strong>Features : </strong> Highlights{" "}
          </p>

          <p className="View">
            {" "}
            <strong>stock : </strong> 100{" "}
          </p>
          <p className="View">
            {" "}
            <strong>Added By : </strong> John{" "}
          </p>
        </Modal.Body>
      </Modal>
    );
  }

  const deleteHandler = async () => {
    try {
      toast.success("Product Deleted SuccessFully");
    } catch (e) {
      console.log(e);
    }
  };

  function uploadExcel() {
    const target = document.getElementById("excel");
    target.click();
  }

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <MyVerticallyCenteredModal2
        show={modalShow2}
        onHide={() => setModalShow2(false)}
      />

      <p className="headP">Dashboard / Products</p>

      <div
        className="pb-4  w-full flex justify-between items-center"
        style={{ width: "98%", marginLeft: "2%" }}
      >
        <span
          className="tracking-widest text-slate-900 font-semibold uppercase"
          style={{ fontSize: "1.5rem" }}
        >
          All Product's ( Total : {data?.length} )
        </span>
        <div className="d-flex gap-1">
          <input type="file" id="excel" style={{ display: "none" }} />
          <button
            onClick={() => {
              uploadExcel();
            }}
            className="md:py-2 px-3 md:px-4 py-1 rounded-sm bg-[#19376d] text-white tracking-wider"
          >
            Upload
          </button>
          <button
            onClick={() => {
              setEdit(false);
              setModalShow(true);
            }}
            className="md:py-2 px-3 md:px-4 py-1 rounded-sm bg-[#19376d] text-white tracking-wider"
          >
            Add Product
          </button>
        </div>
      </div>

      <section className="sectionCont">
        <div className="filterBox">
          <img
            src="https://t4.ftcdn.net/jpg/01/41/97/61/360_F_141976137_kQrdYIvfn3e0RT1EWbZOmQciOKLMgCwG.jpg"
            alt=""
          />
          <input
            type="search"
            placeholder="Start typing to search for products"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="overFlowCont">
          <Table>
            <thead>
              <tr>
                <th>Sno.</th>
                <th>Image</th>
                <th>Title</th>
                <th>Added By</th>
                <th>Price</th>
                <th>Discount</th>
                <th>Total Stock</th>
                <th>Category</th>
                <th> Options </th>
              </tr>
            </thead>
            <tbody>
              {slicedData?.map((i, index) => (
                <tr key={index}>
                  <td> #{index + 1} </td>
                  <td>
                    <Carousel
                      autoPlay={true}
                      interval={1000}
                      className="ImageCarousel"
                      showThumbs={false}
                      infiniteLoop={true}
                      swipeable={true}
                      stopOnHover={true}
                      showStatus={false}
                    >
                      {i.image_url.map((img, index) => (
                        <div key={index} className="CarouselImages">
                          <img src={img} alt="" />
                        </div>
                      ))}
                    </Carousel>
                  </td>

                  <td> {i.product_name?.substr(0, 10) + "..."} </td>
                  <td></td>
                  <td> ₹{i.price} </td>
                  <td> {i.priceDiscount}%</td>
                  <td> 
                  {i.quantity >= 10 ?   <Badge bg='success'>{i.quantity} In Stock</Badge>  :   <Badge bg='danger'>{i.quantity} In Stock</Badge>   }
                  </td>
                  <td> {i.priceDiscount}</td>

                  <td>
                    <span className="flexCont">
                      <i
                        className="fa-solid fa-pen-to-square"
                        onClick={() => {
                          setEdit(true);
                          setModalShow(true);
                        }}
                      ></i>
                      <i
                        className="fa-solid fa-eye"
                        onClick={() => {
                          setModalShow2(true);
                        }}
                      ></i>
                      <i
                        className="fa-sharp fa-solid fa-trash"
                        onClick={() => deleteHandler()}
                      ></i>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="pagination">
            <button onClick={() => Prev()} className='prevBtn' >
            <i className="fa-solid fa-backward"></i> 
            </button>
            {currentPage2 === 1 ? (
              ""
            ) : (
              <button onClick={() => setCurrentPage2(1)}>1</button>
            )}

            {pages2
              ?.slice(currentPage2 - 1, currentPage2 + 3)
              .map((i, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage2(i)}
                  className={currentPage2 === i ? "activePage" : ""}
                >
                  {" "}
                  {i}{" "}
                </button>
              ))}
            {currentPage2 === pages2?.length ? (
              ""
            ) : (
              <button onClick={() => Next()} className='nextBtn'> <i className="fa-sharp fa-solid fa-forward"></i></button>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default HOC(EProduct);
