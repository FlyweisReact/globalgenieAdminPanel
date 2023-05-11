/** @format */

import { Alert } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

const SpinnerComp = () => {
  return (
    <Alert>
    Loading Data
      <Spinner animation="border" role="status" style={{width : ''}}>
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </Alert>
  );
};

export default SpinnerComp;
