export default function(state = {}, action) {
  switch (action.type) {
    case 'user':
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
