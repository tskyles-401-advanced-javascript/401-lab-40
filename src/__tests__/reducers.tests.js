import reducer from "../state/store/todo-reducer.js";

describe("Our Reducer", () => {
  it("does a GET right", () => {
    let initialState = {};
    let action = {
      type: "GET",
      payload: "foo"
    };
    expect(reducer(initialState, action)).toEqual({ todoList: action.payload });
  });

  it("does a POST right", () => {
    let initialState = { todoList: "" };
    let action = {
      type: "POST",
      payload: "foo"
    };
    expect(reducer(initialState, action)).toEqual({
      todoList: [action.payload]
    });
  });

  it("does a DELETE right", () => {
    let initialState = {
      todoList: [
        {
          _id: 1,
          difficulty: 4,
          complete: false,
          text: "Homework",
          assignee: "Travis",
          due: "2020-08-20"
        }
      ]
    };
    let action = {
      type: "DELETE",
      payload: {
        _id: 1,
        difficulty: 4,
        complete: false,
        text: "Homework",
        assignee: "Travis",
        due: "2020-08-20"
      }
    };
    expect(reducer(initialState, action)).toEqual({
      todoList: [action.payload]
    });
  });

  it("does a TOGGLE right", () => {
    let initialState = {
      todoList: [
        {
          _id: 1,
          difficulty: 4,
          complete: false,
          text: "Homework",
          assignee: "Travis",
          due: "2020-08-20"
        }
      ]
    };
    let action = {
      type: "TOGGLE",
      payload: {
        _id: 1,
        difficulty: 4,
        complete: false,
        text: "Homework",
        assignee: "Travis",
        due: "2020-08-20"
      }
    };
    expect(reducer(initialState, action)).toEqual({
      todoList: [action.payload]
    });
  });
});
