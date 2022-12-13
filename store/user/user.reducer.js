import { userscart } from './user.action';
import { USER_ACTION_TYPES } from './user.types';

const INITIAL_STATE = {
  user: 'bilal',
  error: false,
  message: false,
  loading: false,
  list:[
    {
        id: 1,
        title: 'doctor required',
        price: 'feb 5th at  2.30pm',
        description: 'true',
        image: '',
    },
  ]
};

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.Add_To_Cart:
      return {
        ...state,
        list: payload,
      };
      // case USER_ACTION_TYPES.USERS_CART:
      // return {
      //   ...state,
      
      // };
    case USER_ACTION_TYPES.USER_LOGIN_START:
      return {
        ...state,
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
