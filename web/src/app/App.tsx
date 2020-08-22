import './App.css';
import React from 'react';
import { Header } from '../components/Header/Header';
import { MainPage } from '../components/MainPage/MainPage';
import { CartPage } from '../components/CartPage/CartPage';
import { ShippingPage } from '../components/ShippingPage/ShippingPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="app-body">
        <Switch>
          <Route path="/shipping" component={ShippingPage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/" component={MainPage} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}
