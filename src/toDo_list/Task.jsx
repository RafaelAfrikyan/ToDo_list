import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { ACTION_TYPES } from "../state/state";

export default function Task() {
  const [isEdit, setIsEdit] = useState(false);
  const [isEditOnChange, setisEditOnChange] = useState("");
  const { id } = useParams();
  const state = useSelector(function (state) {
    return state;
  });
  const dispatch = useDispatch();
  const [isChecked, setisChacked] = useState(false);
  const checked = () => {
    setisChacked(!isChecked);
  };

  const notActiveinputStyle = {
    display: "none",
  };
  const activeinputStyle = {
    background: "green",
  };
  const editOnChange = (e) => {
    setisEditOnChange(e.target.value);
  };
  return (
    <div className="changeTask">
      <Link to="/">Go Home</Link>
      <div>
        {state.map((elem) => {
          if (elem.date == id) {
            return (
              <div className="singletask">
                <input onChange={checked} type="checkbox" />
                <div>{elem.title}</div>

                <input
                  type="text"
                  style={!isEdit ? notActiveinputStyle : activeinputStyle}
                  // value={elem.title}
                  onChange={editOnChange}
                />
                <div>
                  <button
                    onClick={() => {
                      setIsEdit(!isEdit);
                    }}
                  >
                    edit
                  </button>
                  <button
                    style={!isEdit ? notActiveinputStyle : activeinputStyle}
                    onClick={() => {
                      dispatch({
                        type: ACTION_TYPES.EDIT_TASK,
                        payload: {
                          title: isEditOnChange,
                          id: elem.id,
                        },
                      });
                      setIsEdit(!isEdit);
                    }}
                  >
                    Add
                  </button>
                  <button
                    onClick={() => {
                      isChecked &&
                        dispatch({
                          type: ACTION_TYPES.DELETE_TASK,
                          payload: {
                            id: elem.id,
                          },
                        });
                    }}
                  >
                    delete
                  </button>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
