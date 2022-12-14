import { userscart } from './user.action';
import { USER_ACTION_TYPES } from './user.types';

const INITIAL_STATE = {
  user: null,
  error: false,
  message: false,
  loading: false,
  list:[]
};

export const productReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.PRODUCT_SCRAP_START:
      {
        //calculation: check(if quaantity)
        return {
        ...state,
        list: [...state.list,payload], // append ho jae ga
      }}
      // case USER_ACTION_TYPES.USERS_CART:
      // return {
      //   ...state,
      
      // };
    case USER_ACTION_TYPES.USER_LOGIN_START:
      return {
        ...state,
        error: false,
        message: false,
        loading: true,
      };

    case USER_ACTION_TYPES.USER_LOGIN_SUCCESS:
      return {
        ...state,
    
        loading: false,
        message: payload.message,
        user: payload.data,
      };

    case USER_ACTION_TYPES.USER_LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        message: payload,
        error: true,
      };

    default:
      return state;
  }
};
// api call for users

// const todoReducer = (state = INITIAL_STATE, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case TODO_ACTION_TYPE.ADD_ITEM:
//       const { id, data } = action.payload;
//       return {
//         ...state,
//         list: [
//           ...state.list,
//           {
//             id: id,
//             data: data,
//           },
//         ],
//       };
//     case TODO_ACTION_TYPE.DELETE_ITEM:
//       const newList = state.list.filter((element) => element.id != action.id);
//       return {
//         ...state,
//         list: newList,
//       };

//     case TODO_ACTION_TYPE.DELETE_ALL_ITEMS:
//       return {
//         ...state,
//         list: [],
//       };

//     default:
//       return state;
//   }
// };
