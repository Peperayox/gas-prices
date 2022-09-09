import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import './App.css';
import { Navbar, US, Europe, Canada, World } from './components';

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/">
                <US />
              </Route>
              <Route exact path="/europe">
                <Europe />
              </Route>
              <Route exact path="/canada">
                <Canada />
              </Route>
              <Route exact path="/world">
                <World />
              </Route>
            </Switch>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: 'white', textAlign: 'center' }}
          >
            Gas Prices <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">US</Link>
            <Link to="/europe">Europe</Link>
            <Link to="/canada">Canada</Link>
            <Link to="/world">World</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
