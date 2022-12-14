import { login } from '../services/user/user.services';
import { productapi } from '../services/product/product.services';
import { USER_ACTION_TYPES } from './user.types';

export const createAction = (type, payload) => ({ type, payload });

// export const productscrap = () => createAction(USER_ACTION_TYPES.PRODUCT_SCRAP);

export const productScrapStart = () =>
  createAction(USER_ACTION_TYPES.PRODUCT_SCRAP_START);
export const productScrapSuccess = (payload) =>
  createAction(USER_ACTION_TYPES.PRODUCT_SCRAP_SUCCESS, payload);
export const productScrapFailed = (error) =>
  createAction(USER_ACTION_TYPES.PRODUCT_SCRAP_FAILED, error);

// export const addtocart = (payload) =>
//   createAction(USER_ACTION_TYPES.Add_To_Cart, payload);

export const productScrapAsync = (data) => {
  return async (dispatch) => {
    dispatch(productScrapStart());
    try {
      const res = await login(data);

      dispatch(
        productScrapSuccess({
          data: res.data,
          message: res.message,
        })
      );
    } catch (error) {
      dispatch(productScrapFailed(error.message));
    }
  };
};

// export const showcart = () => createAction(USER_ACTION_TYPES.SHOW_CART);

//create a fake api call
// const fakeApiCall = (number) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (number > 0) {
//         resolve(number);
//       } else {
//         reject('Number must be greater than 0');
//       }
//     }, 2000);
//   });
// };

// export const setCountStartAsync = (number) => {
//   return async (dispatch) => {
//     dispatch(setCountStart());
//     try {
//       const res = await fakeApiCall(number);

//       dispatch(setCountSuccess(res));
//     } catch (error) {
//       dispatch(setCountFailure(error));
//     }
//   };
// };
