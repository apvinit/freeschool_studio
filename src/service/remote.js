import Axios from "axios";

const baseURL = "http://localhost:8888"


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

export function getModulesByCourses(id) {
  return Axios.get(`${baseURL}/api/modules?course_id=${id}`)
}