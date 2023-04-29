/** @format */

import React from "react";
import HOC from "../layout/HOC";
import { Button, Form, Modal, Table } from "react-bootstrap";
import { Carousel } from "react-responsive-carousel";

const GetMeThis = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [ query , setQuery ] = React.useState("")

  const data = [
    {
      image: [
        {
          img: "https://new-global-ginie.vercel.app/static/media/Mask%20Group%201%201.bfffcae8f3d7ace96c94.png",
        },
        {
          img: "https://new-global-ginie.vercel.app/static/media/Homepage%20Desktop%2001.2d9ee6512a8bda1732cc.jpg",
        },
      ],
      page: "Homepage",
    },
    {
      image: [
        {
          img: "https://new-global-ginie.vercel.app/static/media/Baby&Mom%20%20Desktop.19e91346c24fc77bd2f0.jpg",
        },
        {
          img: "https://new-global-ginie.vercel.app/static/media/Baby&Mom%20%20Desktop%2001.a3b4c8ff5d561b601ea1.jpg",
        },
      ],
      page: "Baby & Mom",
    },
    {
      image: [
        {
          img: "https://new-global-ginie.vercel.app/static/media/beauty%20&%20Cosmetics%20Desktop.9d7bc66dca6aed2a1a8a.jpg",
        },
        {
          img: "https://new-global-ginie.vercel.app/static/media/beauty%20&%20Cosmetics%20Desktop%2001.d911a1ca37b18a194e36.jpg",
        },
      ],
      page: "Beauty & Cosmetics",
    },
    {
      image: [
        {
          img: "https://new-global-ginie.vercel.app/static/media/Gadgets%20&%20Electronics%20Desktop%2001.9bec3a268caf76dd89df.jpg",
        },
        {
          img: "https://new-global-ginie.vercel.app/static/media/Gadgets%20&%20Electronics%20Desktop.321967230633b9ece58a.jpg",
        },
      ],
      page: "Gadgets & Eelectronics",
    },
  ];

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
            Add Get Me This
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" multiple required />
            </Form.Group>

            <Form.Select aria-label="Default select example" className="mb-3">
              <option>-- Select Page --</option>
              <option> GlobalGenie </option>
              <option>Baby & Mom </option>
              <option> Beauty & Cosmetics </option>
              <option> Gadgets & Eelectronics </option>
              <option> Health & Personal Care </option>
              <option> Lifestyle & Sports </option>
              <option> Men's Grooming Essentials </option>
              <option> Home & Kitchen </option>
            </Form.Select>

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

      <p className="headP">Dashboard / Get Me This</p>

      <div
        className="pb-4 sticky top-0  w-full flex justify-between items-center"
        style={{ width: "98%", marginLeft: "2%" }}
      >
        <span
          className="tracking-widest text-slate-900 font-semibold uppercase "
          style={{ fontSize: "1.5rem" }}
        >
          All Get Me This ( Total : {data.length} )
        </span>
        <button
          onClick={() => {
            setModalShow(true);
          }}
          className="md:py-2 px-3 md:px-4 py-1 rounded-sm  bg-[#19376d] text-white tracking-wider"
        >
          Add Get Me This
        </button>
      </div>
      <section className="sectionCont">
      <div className="overFlowCont">
        <Table>
          <thead>
            <tr>
              <th>Sno.</th>
              <th>Banners</th>
              <th>Page</th>
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
                    className="BannerCarousel"
                    showThumbs={false}
                    infiniteLoop={true}
                    swipeable={true}
                    stopOnHover={true}
                    showStatus={false}
                  >
                    {i.image.map((img, index) => (
                      <div key={index} className="BannerCarouselImage">
                        <img src={img.img} alt="" />
                      </div>
                    ))}
                  </Carousel>
                </td>

                <td>/{i.page}</td>
                <td>
                  <span className="flexCont">
                    <i
                      className="fa-solid fa-pen-to-square"
                      onClick={() => {
                        setModalShow(true);
                      }}
                    ></i>

                    <i className="fa-sharp fa-solid fa-trash"></i>
                  </span>
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

export default HOC(GetMeThis);
