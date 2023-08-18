import React, { useState, useEffect } from "react";
import "./style.css";
import Fooddata from "./FoodData";
import Cards from "./Cards";
import Form from "react-bootstrap/Form";

export default function Search() {
  const zomatologo =
    "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png";

  const [fdata, setFdata] = useState(Fooddata);

  const [copydata, setCopyData] = useState([]);

  console.log(copydata);
  const changeData = (e) => {
    let getchangedata = e.toLowerCase();
    if (getchangedata === "") {return setCopyData(fdata);}
    
else {
      let storedata = copydata.filter((ele, m) =>
        {
          return ele.rname.toLowerCase().match(getchangedata);
        });
      setCopyData(storedata);}
  };

  useEffect(() => {
      setCopyData(Fooddata);
  }, []);
  return (
    <>
      <div className="container d-flex justify-content-between align-items-center flex-wrap">
        <img
          src={zomatologo}
          style={{
            width: "128px",
            position: "relative",
            left: "2%",
            cursor: "pointer",
          }}
          alt=""
        />
        <h2 style={{ color: "#1b1464", cursor: "pointer" }} className="mt-3">
          Search Filter App
        </h2>
      </div>

      <Form className="d-flex justify-content-center align-items-center mt-3">
        <Form.Group className=" mx-2 col-lg-6" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Search Restaurant"
            onChange={(e) => changeData(e.target.value)}
          />
          {/* <Form.Control type="text" placeholder="Search Restaurant" className='text-center' /> */}
        </Form.Group>
        <button
          className="btn text-light col-lg-1"
          style={{ background: "#ed4c67" }}
        >
          Submit
        </button>
      </Form>

      <section className="iteam_section mt-4 container">
        <h2 className="px-4" style={{ fontWeight: 400 }}>
          Delivery Restaurants in Rajkot
        </h2>
        <div className="row mt-2 d-flex justify-content-around align-items-center">
          {copydata && copydata.length ? <Cards data={copydata} /> : "No item"}
          {/* <Cards data={fdata} /> */}
        </div>
      </section>
    </>
  );
}
