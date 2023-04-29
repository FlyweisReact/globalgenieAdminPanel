/** @format */

import React from "react";
import { Badge, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import HOC from "../layout/HOC";

const EAdminProduct = () => {
  const { id } = useParams();

  return (
    <>
      <p className="headP">Dashboard / Vendor Products</p>
      <section>
      <div
        className="pb-4 sticky top-0  w-full flex justify-between items-center"
        style={{ width: "98%", marginLeft: "2%" }}
      >
        <span
          className="tracking-widest text-slate-900 font-semibold uppercase"
          style={{ fontSize: "1.5rem" }}
        >
          {id} Products (Total : 2)
        </span>
      </div>

      <div className="sectionCont">
        <div className="filterBox">
          <img
            src="https://t4.ftcdn.net/jpg/01/41/97/61/360_F_141976137_kQrdYIvfn3e0RT1EWbZOmQciOKLMgCwG.jpg"
            alt=""
          />
          <input
            type="search"
            placeholder="Start typing to search for products"
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
              {data?.map((i, index) => (
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
                      {i.image.map((img, index) => (
                        <div key={index} className="CarouselImages">
                          <img src={img.img} alt="" />
                        </div>
                      ))}
                    </Carousel>
                  </td>
                  <td> {i.title} </td>
                  <td> {i.added} </td>
                  <td> ${i.price} </td>
                  <td> 50% </td>
                  <td>
                    <Badge bg="success"> {i.stock} in Stock </Badge>
                  </td>
                  <td>{i.category}</td>
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
        </div>
      </div>
      </section>
    </>
  );
};

export default HOC(EAdminProduct);
