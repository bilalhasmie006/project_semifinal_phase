
import { PRODUCT_ACTION_TYPES } from './product.types';

const INITIAL_STATE = {
  user: null,
  error: false,
  message: false,
  loading: false,
  list:[],
  // data: [],
  // loading: false,
  // error: false,
};

export const productReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case PRODUCT_ACTION_TYPES.PRODUCT_SCRAP_START:
      {
        //calculation: check(if quaantity)
        return {
          ...state,
          error: false,
          message: false,
          loading: true,
      }}
      // case PRODUCT_ACTION_TYPES.USERS_CART:
      // return {
      //   ...state,
      
      // };
   
    case PRODUCT_ACTION_TYPES.PRODUCT_SCRAP_SUCCESS:
      return {
        ...state,
    
        loading: false,
        // message: payload.status,
        list: payload,
      };

    case PRODUCT_ACTION_TYPES.PRODUCT_SCRAP_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
       
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
