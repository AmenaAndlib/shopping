import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./Body.css";

const Home = () => {
  const [bride, setBride] = useState([]);
  const [party, setParty] = useState([]);
  const brideSelector = useSelector(
    (state) => state.homeReducer.homeData.BrideData
  );
  console.log("brideselector====>", brideSelector);
  useEffect(() => {
    setBride(brideSelector);
  }, []);
  const partySelector = useSelector(
    (state) => state.homeReducer.homeData.partyWear
  );
  console.log("partySelector--->", partySelector);
  useEffect(() => {
    setParty(partySelector);
  }, []);
  return (
    <div>
      <div className="simple">
        {bride.map((elem) => {
          console.log("bride-->", bride);
          return (
            <div className="simple1">
              <img
                src={elem.image}
                style={{
                  border: "solid black 5px ",
                  margin: "5px",
                }}
                width="150px"
                height="150px"
                alt=""
              />
              <h4>{elem.title}</h4>
              <h5>{elem.desc.slice(0, 20) + "..."}</h5>
              <h4>{elem.price}</h4>
              <button>Add</button>
              <button>Buy</button>
            </div>
          );
        })}
      </div>
      <div className="simple2">
        {party.map((elem) => {
          return (
            <div>
              <img
                src={elem.image}
                width="150px"
                height="150px"
                alt=""
                style={{
                  border: "solid black 5px ",
                  margin: "5px",
                }}
              />
              <h4>{elem.title}</h4>
              <h5>{elem.desc.slice(0, 20)}</h5>
              <h4>{elem.price}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
