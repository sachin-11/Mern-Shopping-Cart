import React from 'react';
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import Footer from './components/Footer';
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen  from './screens/LoginScreen'
import RegisterScreen  from './screens/RegisterScreen'
import ProfileScreen  from './screens/ProfileScreen'
import ShippingScreen  from './screens/ShippingScreen'
import PaymentScreen  from './screens/PaymentScreen'
import PlaceOrderScreen  from './screens/PlaceOrderScreen'
import OrderScreen  from './screens/OrderScreen'
import UserListScreen  from './screens/UserListScreen'
import UserEditScreen  from './screens/UserEditScreen'
import ProductListScreen  from './screens/ProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import OrderListScreen from './screens/OrderListScreen'


const App = () => {
  return (
    <>
    <Router>
    <Header />
      <main className='py-3'>
        <Container>
         <Route exact path = '/login' component = {LoginScreen} />
         <Route exact path = '/payment' component = {PaymentScreen} />
         <Route exact path = '/order/:id' component = {OrderScreen} />
         <Route  path = '/placeorder' component = {PlaceOrderScreen} />
         <Route exact path = '/register' component = {RegisterScreen} />
          <Route exact path = '/profile' component = {ProfileScreen} />
          <Route exact path = '/shipping' component = {ShippingScreen} />
          <Route path = '/product/:id' component = {ProductScreen} />
          <Route exact path = '/cart/:id?' component = {CartScreen} />
          <Route exact path = '/admin/userlist' component = {UserListScreen} />
          <Route exact path = '/admin/user/:id/edit' component = {UserEditScreen} />
          <Route exact path = '/admin/productlist' component = {ProductListScreen} />
          <Route exact path='/admin/product/:id/edit' component={ProductEditScreen} />
          <Route path='/admin/orderlist' component={OrderListScreen} />
          <Route path='/search/:keyword' component={HomeScreen} />
          <Route path='/page/:pageNumber' component={HomeScreen} exact />
          <Route
            path='/search/:keyword/page/:pageNumber'
            component={HomeScreen}
            exact
          />
          <Route exact path = '/' component = {HomeScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
    </>
  )
}

export default App

