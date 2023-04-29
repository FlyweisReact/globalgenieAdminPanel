/** @format */

import React from "react";
import { Button } from "react-bootstrap";
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


    <div className="gridCont">
            <div>
                <img src='https://c4.wallpaperflare.com/wallpaper/295/163/719/anime-anime-boys-picture-in-picture-kimetsu-no-yaiba-kamado-tanjir%C5%8D-hd-wallpaper-preview.jpg' alt='' />
                <Button>Delete</Button>
            </div>
            <div>
                <img src='https://c4.wallpaperflare.com/wallpaper/295/163/719/anime-anime-boys-picture-in-picture-kimetsu-no-yaiba-kamado-tanjir%C5%8D-hd-wallpaper-preview.jpg' alt='' />
            </div>
            <div>
                <img src='https://c4.wallpaperflare.com/wallpaper/295/163/719/anime-anime-boys-picture-in-picture-kimetsu-no-yaiba-kamado-tanjir%C5%8D-hd-wallpaper-preview.jpg' alt='' />
            </div>
    </div>


    </>
  );
};

export default HOC(Banners);
