import { createStore } from "redux";
export const ACTION_TYPES = {
  ADD_TASK: "ADD_TASK",
  DELETE_TASK: "DELETE_TASK",
  EDIT_TASK: "EDIT_TASK",
};

const initialState = [];

export const store = createStore(function (state, action) {
  switch (action.type) {
    case ACTION_TYPES.ADD_TASK: {
      return [
        ...state,
        {
          title: action.payload.title,
          date: action.payload.date,
          id: action.payload.id,
        },
      ];
    }
    case ACTION_TYPES.DELETE_TASK: {
      return state.filter((todo) => todo.id != action.payload.id);
    }
    case ACTION_TYPES.EDIT_TASK: {
      return state.map((elem) => {
        if (elem.id == action.payload.id) {
          return { ...elem, title: action.payload.title };
        } else return state;
      });
    }
  }
  console.log(state);
  return state;
}, initialState);
