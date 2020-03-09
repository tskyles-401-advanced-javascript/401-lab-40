import thunk from "redux-thunk";
import configMockStore from "redux-mock-store";
import * as actions from "../state/store/todo-action.js";

const mockStore = configMockStore([thunk]);

describe("Normal Action Creators", () => {
  it("should create a GET action", () => {
    const store = mockStore({ results: [] });
    const expectedAction = {
      type: "GET",
      payload: "foo"
    };

    store.dispatch(actions.get("foo"));
    let dispatchedActions = store.getActions();

    expect(dispatchedActions[0]).toEqual(expectedAction);
  });

  it("should create a post action", () => {
    const store = mockStore({ results: [] });
    const expectedAction = {
      type: "POST",
      payload: "foo"
    };

    store.dispatch(actions.post("foo"));
    let dispatchedActions = store.getActions();

    expect(dispatchedActions[0]).toEqual(expectedAction);
  });

  it("should create a DELETE action", () => {
    const store = mockStore({ results: [] });
    const expectedAction = {
      type: "DELETE",
      payload: "foo"
    };

    store.dispatch(actions.destroy("foo"));
    let dispatchedActions = store.getActions();

    expect(dispatchedActions[0]).toEqual(expectedAction);
  });

  it("should create a GET action", () => {
    const store = mockStore({ results: [] });
    const expectedAction = {
      type: "GET",
      payload: "foo"
    };

    store.dispatch(actions.get("foo"));
    let dispatchedActions = store.getActions();

    expect(dispatchedActions[0]).toEqual(expectedAction);
  });

  it("should create a toggle action", () => {
    const store = mockStore({ results: [] });
    const expectedAction = {
      type: "TOGGLE",
      payload: "foo"
    };

    store.dispatch(actions.toggle("foo"));
    let dispatchedActions = store.getActions();

    expect(dispatchedActions[0]).toEqual(expectedAction);
  });

  it("should create a DETAILS action", () => {
    const store = mockStore({ results: [] });
    const expectedAction = {
      type: "DETAILS",
      payload: "foo"
    };

    store.dispatch(actions.details("foo"));
    let dispatchedActions = store.getActions();

    expect(dispatchedActions[0]).toEqual(expectedAction);
  });
});

// describe("async Action Creator", () => {
//   it("should create a _getTodoItems action", () => {
//     const store = mockStore({ results: [] });
//     return store.dispatch(actions.getTodoItems()).then(() => {
//       let dispatchedActions = store.getActions();
//       expect(dispatchedActions[0].type).toEqual("GET");
//     });
//   });

// it("should create a postData action", () => {
//   const store = mockStore({ results: [] });
//   return store.dispatch(actions.postData('foo')).then(() => {
//     let dispatchedActions = store.getActions();
//     expect(dispatchedActions[0].type).toEqual("POST");
//   });
// });
// });
