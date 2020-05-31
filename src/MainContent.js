import React from 'react'
import { Breadcrumb } from 'antd'
import { Switch, Route, Redirect } from 'react-router-dom'
import CategoryList from './category/CategoryList'

export default function MainContent() {
  return (
    <>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Categories</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">
        <Switch>
          <Route path="/" exact>
            <Redirect to="/categories" />
          </Route>
          <Route path="/categories">
            <CategoryList />
          </Route>
        </Switch>
      </div>
    </>
  )
}