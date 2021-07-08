

export const reducer = ( state, action ) => {
  switch ( action.type ) {
    case "increase":
      return state + 10;
    default:
      return state;
  }
};
