import React, { Fragment } from 'react';
import Header from '../components/Header'

const Layout = ({ children }) => (
  <Fragment>
    <Header />
    {children}
  </Fragment>
)
export default Layout;
