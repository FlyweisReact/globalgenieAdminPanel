/** @format */

import React from "react";
import HOC from "../layout/HOC";
import { Table, Modal, Form, Button, FloatingLabel } from "react-bootstrap";

const Terms = () => {
    const [modalShow, setModalShow] = React.useState(false);


    useEF

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
              Edit Terms & Condition
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <FloatingLabel
                  controlId="floatingTextarea2"
                  label="Terms and Condition"
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
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
    
    return (
      <>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
  
        <section>
          <p className="headP">Dashboard / Terms&Condition</p>
          <div
            className="pb-4 sticky top-0  w-full flex justify-between items-center"
            style={{ width: "98%", marginLeft: "2%" }}
          >
            <span
              className="tracking-widest text-slate-900 font-semibold uppercase"
              style={{ fontSize: "1.5rem" }}
            >
               Terms&Condition
            </span>
          </div>
  
          <section className="sectionCont">
            <div className="overFlowCont">
              <Table>
                <thead>
                  <tr>
                    <th>Terms and Condition</th>
                    <th>Options</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      In publishing and graphic design, Lorem ipsum is a
                      placeholder text commonly used to demonstrate the visual
                      form of a document or a typeface without relying on
                      meaningful content. Lorem ipsum may be used as a placeholder
                      before final copy is available. Wikipedia
                    </td>
                    <td>
                      <i
                        className="fa-solid fa-pen-to-square "
                        onClick={() => {
                          setModalShow(true);
                        }}
                      ></i>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </section>
        </section>
      </>
    );
  };
  

export default HOC(Terms)