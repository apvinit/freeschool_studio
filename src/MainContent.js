import React from 'react'
import { Breadcrumb } from 'antd'
import { Switch, Route, Redirect } from 'react-router-dom'
import CategoryList from './category/CategoryList'
import CategoryCourseList from './course/CategoryCourseList'

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
          <Route exact path="/categories">
            <CategoryList />
          </Route>
          <Route exace path="/categories/:id">
            <CategoryCourseList />
          </Route>
        </Switch>
      </div>
    </>
  )
}