import { CLICK_BUTTON, DROP_APPLE, RESET_APP } from './constants.js';

const initialState = {
  buttonStatus: false,
  apples: [
    {
      positionTop: "50%",
      positionLeft: "38%",
    },
    {
      positionTop: "52%",
      positionLeft: "36%",
    },
    {
      positionTop: "45%",
      positionLeft: "37%",
    },
    {
      positionTop: "48%",
      positionLeft: "40%",
    },
  ],
};

const Tree = (state = initialState, action) => {
  switch (action.type) {
    case CLICK_BUTTON:
      return {
        ...state,
        buttonStatus: action.payload,
      };
    case DROP_APPLE:
      return {
        ...state,
        apples: action.payload,
      };
    case RESET_APP:
      return {
        buttonStatus: false,
        apples: [
          {
            positionTop: "50%",
            positionLeft: "38%",
            animateDelay: "2.5s",
          },
          {
            positionTop: "52%",
            positionLeft: "36%",
            animateDelay: "3s",
          },
          {
            positionTop: "45%",
            positionLeft: "37%",
            animateDelay: "3.5s",
          },
          {
            positionTop: "48%",
            positionLeft: "40%",
            animateDelay: "4.5s",
          },
        ],
      };
    default:
      return {
        ...state,
      };
  }
};

export default Tree;
