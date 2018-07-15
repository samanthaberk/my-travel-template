import * as actionTypes from './actions';

const initialState = {
  userAnswers: {
    duration: null,
    travelerType: null,
    pace: null,
    sites: null,
    internalTravel: null,
    cityTravel: null,
    travelParty: null,
    budget: null,
    interests: [],
    entertainment: []
  }
};

const reducer = (state = initialState, action) => {
  return state;
};

export default reducer;
