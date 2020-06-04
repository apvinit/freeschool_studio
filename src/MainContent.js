import React from 'react'
import { Breadcrumb } from 'antd'
import { Switch, Route, Redirect } from 'react-router-dom'
import CategoryList from './category/CategoryList'
import CategoryCourseList from './course/CategoryCourseList'
import CourseModuleList from './module/CourseModuleList'
import ModuleLessonList from './lesson/ModuleLessonList'
import ContentPage from './content/ContentPage'
import LessonContentList from './content/LessonContentList'

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
          <Route exact path="/categories/:id/courses">
            <CategoryCourseList />
          </Route>
          <Route exact path="/categories/:id/courses/:courseId/modules">
            <CourseModuleList />
          </Route>
          <Route exact path="/categories/:id/courses/:courseId/modules/:moduleId/lessons">
            <ModuleLessonList />
          </Route>
          <Route exact path="/categories/:id/courses/:courseId/modules/:moduleId/lessons/:lessonId/contents">
            <LessonContentList />
          </Route>
          <Route exact path="/categories/:id/courses/:courseId/modules/:moduleId/lessons/:lessonId/contents/:contentId">
            <ContentPage />
          </Route>
        </Switch>
      </div>
    </>
  )
}