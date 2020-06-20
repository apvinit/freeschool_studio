import React from 'react'
import { Breadcrumb } from 'antd'
import { Switch, Route, Redirect, useLocation } from 'react-router-dom'
import CategoryList from './category/CategoryList'
import CategoryCourseList from './course/CategoryCourseList'
import CourseModuleList from './module/CourseModuleList'
import ModuleLessonList from './lesson/ModuleLessonList'
import ContentPage from './content/ContentPage'
import LessonContentList from './content/LessonContentList'
import LanguageList from './language/LanguageList'

export default function MainContent() {
  const location = useLocation()
  const items = location.pathname.split("/")
  return (
    <>
      <Breadcrumb style={{ margin: '16px 0' }}>
        {
          items.map(e => <Breadcrumb.Item key={e}>{e === '' ? 'Home' : e[0].toUpperCase() + e.slice(1)}</Breadcrumb.Item>
          )
        }

      </Breadcrumb>
      <div className="site-layout-content">
        <Switch>
          <Route path="/" exact>
            <Redirect to="/categories" />
          </Route>
          <Route exact path="/categories">
            <CategoryList />
          </Route>
          <Route exact path="/languages">
            <LanguageList />
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