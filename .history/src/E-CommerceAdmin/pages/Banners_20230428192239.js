/** @format */

import React from "react";
import HOC from "../layout/HOC";

const Banners = () => {
  return (
    <>
      <p className="headP">Dashboard / Banners</p>

      <div
        className="pb-4 sticky top-0  w-full flex justify-between items-center"
        style={{ width: "98%", marginLeft: "2%" }}
      >
        <span
          className="tracking-widest text-slate-900 font-semibold uppercase "
          style={{ fontSize: "1.5rem" }}
        >
          All Banners ( Total : 3 )
        </span>
      </div>


        


    </>
  );
};

export default HOC(Banners);
