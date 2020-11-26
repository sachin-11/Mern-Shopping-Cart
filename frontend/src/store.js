import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
   productListReducers,
    productDetailsReducer,
    productDeleteReducer,
    productCreatereducer,
    productUpdateReducer,
    productReviewCreateReducer,
    productTopRatedReducer,
   } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers'
import {
   orderCreateReducer,
   orderDetailsReducer,
   orderPayReducer,
   orderListMyReducer,
   orderDeliverReducer,
   orderListReducer
   } from './reducers/orderReducers'
import {
  userLoginReducer,
   userRegisterReducer,
   userDetailsReducer,
   userUpdateProfileReducer,
   userListReducer,
   userDeleteReducer,
   userUpdateReducer
   } from './reducers/userReducers';

const reducer = combineReducers({
    productList: productListReducers,
    productDetail: productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderListMy: orderListMyReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,
    productDelete: productDeleteReducer,
    productCreate: productCreatereducer,
    productUpdate: productUpdateReducer,
    orderDeliver: orderDeliverReducer,
    orderList: orderListReducer,
    productReviewCreate: productReviewCreateReducer,
    productTopRated: productTopRatedReducer,
})

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

  const userItemsFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

  const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {}


const initialState = {
  cart: { 
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage
  },
  userLogin: { userInfo: userItemsFromStorage}
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store