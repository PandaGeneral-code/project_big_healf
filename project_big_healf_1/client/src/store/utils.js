export const TEST = "TEST";

const initialState = { test: "THIS IS A VALUE" };

const utilsReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case TEST:
      return { ...state, test: "This is now a new value" };
    default:
      return state;
  }
};

export default utilsReducer;
