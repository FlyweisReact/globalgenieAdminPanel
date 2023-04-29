/** @format */

import React from "react";

import {
  MdPayment,MdDashboardCustomize

} from "react-icons/md";
import { FiUser } from "react-icons/fi";
import HOC from "../layout/HOC";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

  const navigate = useNavigate()

  const card = [
    {
      progress: "bg-blue-400",
      title: "Total Sells",
      number: "$3799.00",
      icon: (
      <i className="fa-sharp fa-solid fa-money-bill text-2xl text-[rgb(240,72,88)]"></i>
      ),
      bg: "#ff5370",
      link : '/E-Commerce/dashboard'
    },
    {
      progress: "bg-green-400",
      title: "Total Users",
      number: "10",
      icon:<i className="fa-solid fa-bag-shopping text-2xl" style={{color : '#4099ff'}} ></i>,
      bg: "#4099ff",
      link : '/E-commerce/Admin/Orders'
    },
    {
      progress: "bg-green-400",
      title: "All Admin",
      number: "15",
      icon: <FiUser className="text-2xl text-[#29cccc]" />,
      bg: "#29cccc",
      link : '/E-Commerce/Admin/Customer'
    },
    {
      progress: "bg-green-400",
      title: "All Product",
      number: "200",
      icon: <MdDashboardCustomize className="text-2xl text-[#3c335d]" />,
      bg: "#3c335d",
      link : '/E-Commerce/Category'
    },
    {
      progress: "bg-green-400",
      title: "All category",
      number: "100",
      icon: <i className=" fa-brands fa-product-hunt text-2xl text-[#64878e]" ></i>,
      bg: "#64878e",
      link : '/E-Commerce/Product'
    },
    {
      progress: "bg-green-400",
      title: "All sub-category",
      number: "100",
      icon: <i className=" fa-brands fa-product-hunt text-2xl text-[#32ab9f]" ></i>,
      bg: "#32ab9f",
      link : '/E-Commerce/Product'
    },
    {
      progress: "bg-green-400",
      title: "All vendors",
      number: "100",
      icon: <i className=" fa-brands fa-product-hunt text-2xl text-[#4b86b4]" ></i>,
      bg: "#4b86b4",
      link : '/E-Commerce/Product'
    },
    {
      progress: "bg-green-400",
      title: "All orders",
      number: "100",
      icon: <i className=" fa-brands fa-product-hunt text-2xl text-[#1b6975]" ></i>,
      bg: "#1b6975",
      link : '/E-Commerce/Product'
    },
    {
      progress: "bg-green-400",
      title: "All coupons",
      number: "100",
      icon: <i className=" fa-brands fa-product-hunt text-2xl text-[#005b96]" ></i>,
      bg: "#005b96 ",
      link : '/E-Commerce/Product'
    },
    {
      progress: "bg-green-400",
      title: "All complaints",
      number: "100",
      icon: <i className=" fa-brands fa-product-hunt text-2xl text-[#011f4b ]" ></i>,
      bg: "#011f4b ",
      link : '/E-Commerce/Product'
    },

  ];
  return (
    <>
      <section className="grid md:grid-cols-4 grid-cols-2 gap-y-6 gap-x-4">
        {card.map((card, index) => {
          return (
            <div
              className="px-5 py-8 bg-slate-200 space-y-2 shadow-xl flex flex-col  rounded-md cardDiv"
              key={index}
              style={{ backgroundColor: `${card.bg}` , textTransform : 'uppercase'}}
              onClick={() => navigate(`${card.link}`)}
              
            >
              <div className="grid  justify-between grid-cols-4">
                <div className="flex flex-col col-span-3 space-y-1">
                  <span
                    className="tracking-widest text-gray-900"
                    style={{ color: "#fff" }}
                  >
                    {card.title}
                  </span>
                  <span
                    className="tracking-wider text-gray-700 text-xl md:text-2xl font-semibold"
                    style={{ color: "#fff" }}
                  >
                    {card.number}
                  </span>
                </div>
                <div
                  className="flex rounded-full w-10 h-10 sm:w-12 sm:h-12 bg-white justify-center items-center iCOn"
              
                >
                  {card.icon}
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default HOC(Dashboard);