/** @format */

import React from "react";
import { RiCloseLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { BiLogOutCircle } from "react-icons/bi";
import { MdDashboardCustomize } from "react-icons/md";

const Sidebar = ({ hamb, setHamb }) => {
  const navigate = useNavigate();

  const nav = [
    {
      icon: <MdDashboardCustomize className="text-xl mr-3 rounded-full " />,
      link: "/dashboard ",
      name: "Dashboard",
    },
    {
      icon: (
        <i className="fa-solid fa-cart-shopping text-xl mr-3 rounded-full"></i>
      ),
      link: "/Customer",
      name: "Customers",
    },
    {
      icon: (
        <i className="fa-solid fa-user text-xl mr-3 rounded-full"></i>
        ),
      link: "/Admin",
      name: "Admin",
    },
    {
      icon: (
        <i className="fa-solid fa-user text-xl mr-3 rounded-full"></i>
        ),
      link: "/pushNotification",
      name: "Push Notification",
    },
    {
      icon:<i className="fa-brands fa-product-hunt text-xl mr-3 rounded-full"></i>,
      link: "/Product",
      name: "Products",
    },
    {
      icon: <MdDashboardCustomize className="text-xl mr-3 rounded-full " />,
      link: "/Category",
      name: "Category",
    },
    {
      icon: <MdDashboardCustomize className="text-xl mr-3 rounded-full " />,
      link: "/banner",
      name: "Category",
    },

 
    {
      icon:<i className="fa-solid fa-user-tie text-xl mr-3 rounded-full"></i>,
      link: "/E-Commerce/VendorList",
      name: "Vendors",
    },

    {
      icon: (
        <i className="fa-solid fa-truck  text-xl mr-3 rounded-full" ></i>
      ),
      link: "/E-Commerce/Admin/Delivery",
      name: "Delivery Report",
    },

  
    {
      icon: (
        <MdDashboardCustomize className="text-xl mr-3 rounded-full " />
      ),
      link: "/E-Commerce/Admin/subCat",
      name: "Sub-Category",
    },

 

    {
      icon: (
        <i className="fa-solid fa-cart-shopping text-xl mr-3 rounded-full"></i>
      ),
      link: "/E-commerce/Admin/Orders",
      name: "Orders Management",
    },
  ];

  const logOut = () => {
    navigate("/");
  };

  return (
    <>
      <aside
        className="p-4 h-auto"
        style={{ backgroundColor: "#19376d", minHeight: "100vh" }}
      >
        {/* Top */}
        <div className="w-full md:hidden relative  p-2 mb-4">
          <RiCloseLine
            onClick={() => setHamb(!hamb)}
            className="text-3xl  absolute top-2 sm:hover:rotate-[228deg] transition-transform font-bold right-2 sm:hover:text-[22px] text-[rgb(241,146,46)] cursor-pointer"
          />
        </div>{" "}
        <figure className="flex  flex-col items-center">
          <span
            className="font-bold text-[#fff]"
            style={{
              fontSize: "2rem",
              textAlign: "center",
              textTransform: "uppercase",
            }}
          > ADMIN PANEL
          </span>
        </figure>
        <nav className="py-6">
          {nav.map((nav) => {
            return (
              <Link
                to={nav.link}
                key={nav.name}
                className=""
                style={{ textDecoration: "none", textTransform: "uppercase" }}
              >
                <span
                  className="flex my-3 items-center cursor-pointer text-gray-900    tracking-wider p-2 rounded-sm"
                  style={{ color: "#FFF" }}
                >
                  {nav.icon} {nav.name}
                </span>
              </Link>
            );
          })}
          <span
            className="flex my-3 items-center cursor-pointer text-gray-900    tracking-wider p-2 rounded-sm"
            onClick={() => logOut()}
            style={{ color: "#FFF", textTransform: "uppercase" }}
          >
            <BiLogOutCircle className="text-xl mr-3 rounded-full " /> LogOut
          </span>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
