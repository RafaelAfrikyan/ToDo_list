import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CustomizedAccordions from "./Acordion.jsx";

export default function Tasks() {
  const state = useSelector(function (state) {
    return state;
  });
  console.log(state);

  return (
    <div>
      <div className="dates">Dates</div>
      {state.map((elem, index) => {
        return (
          <CustomizedAccordions
            title={elem.title}
            date={elem.date}
            id={elem.id}
          />
        );
      })}
    </div>
  );
}
