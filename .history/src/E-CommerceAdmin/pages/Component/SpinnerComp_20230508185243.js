/** @format */

import { Alert } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

const SpinnerComp = () => {
  return (
    <Alert>
      
    </Alert>
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
};

export default SpinnerComp;
