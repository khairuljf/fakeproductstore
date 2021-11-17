import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import Dashboard from '../components/Dashbaord';
import HeaderPart from '../components/Header';
import ProductDetails from "../components/ProductDetails";

import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
  


   const AppRouter = () =>(
    <BrowserRouter>
    <div>

        <Header>
            <HeaderPart />
        </Header>

        <Content>
            <Switch>
                <Route path="/" component={Dashboard} exact={true} />
                <Route path="/productdetails/:id" component={ProductDetails} />
                <Route> 404 Page Not Found</Route>`
            </Switch>
        </Content>


        <Footer>
            <h1>Here is footer</h1>
        </Footer>

    </div>
    
   </BrowserRouter>
   )


   
export default   AppRouter;
   
   
   
