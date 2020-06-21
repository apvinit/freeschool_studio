import Axios from "axios";

export const baseURL = "http://localhost:8888"


export function getCategories() {
  return Axios.get(`${baseURL}/api/categories`)
}

export function deleteCategory(id) {
  return Axios.delete(`${baseURL}/api/categories/${id}`)
}

export function addCategory(data) {
  return Axios.post(`${baseURL}/api/categories`, data)
}

export function getCoursesByCategory(id) {
  return Axios.get(`${baseURL}/api/courses?category_id=${id}`)
}

export function addCourse(data) {
  return Axios.post(`${baseURL}/api/courses`, data)
}

export function deleteCourse(id) {
  return Axios.delete(`${baseURL}/api/courses/${id}`)
}

export function addModule(data) {
  return Axios.post(`${baseURL}/api/modules`, data)
}

export function deleteModule(id) {
  return Axios.delete(`${baseURL}/api/modules/${id}`)
}

export function getModulesByCourses(id) {
  return Axios.get(`${baseURL}/api/modules?course_id=${id}`)
}

export function addLesson(data) {
  return Axios.post(`${baseURL}/api/lessons`, data)
}

export function deleteLesson(id) {
  return Axios.delete(`${baseURL}/api/lessons/${id}`)
}

export function getLessonsByModules(id) {
  return Axios.get(`${baseURL}/api/lessons?module_id=${id}`)
}

export function addContent(data) {
  return Axios.post(`${baseURL}/api/contents`, data)
}

export function deleteContent(id) {
  return Axios.delete(`${baseURL}/api/contents/${id}`)
}

export function getContentsByLesson(id) {
  return Axios.get(`${baseURL}/api/contents?lesson_id=${id}`)
}

export function uploadContent(file) {
  let data = new FormData()
  data.append("file", file)
  return Axios.post(`${baseURL}/api/contents/upload`, data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

export function getStreamUrl(name) {
  return `${baseURL}/api/contents/stream/${name}/index.m3u8`
}

export function addLanguage(data) {
  return Axios.post(`${baseURL}/api/lang`, data)
}

export function getLanguages() {
  return Axios.get(`${baseURL}/api/lang`)
}

export function updateLanguage(data) {
  return Axios.put(`${baseURL}/api/lang`, data)
}

export function deleteLanguage(id) {
  return Axios.delete(`${baseURL}/api/lang/${id}`)
}

export function addTag(data) {
  return Axios.post(`${baseURL}/api/tags`, data)
}

export function getTags() {
  return Axios.get(`${baseURL}/api/tags`)
}

export function deleteTag(id) {
  return Axios.delete(`${baseURL}/api/tags/${id}`)
}

export function uploadMedia(file) {
  let data = new FormData()
  data.append("file", file)
  return Axios.post(`${baseURL}/api/upload`, data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

export function getMediaUrl(file) {
  return `${baseURL}/api/uploads/${file}`
}