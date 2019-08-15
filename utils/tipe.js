import { createClient } from '@tipe/js'

const Tipe = createClient({
  project: process.env.TIPE_PROJECT_ID,
  key: process.env.TIPE_API_KEY,
  domain: 'https://beta-api.tipe.io'
})
console.log(process.env.TIPE_PROJECT_ID)

export const getHomePage = () => {
  return Tipe.getPagesByTemplate({ id: 'home' })
}

export const getBlogPost = () => {
  return Tipe.getPagesByTemplate({ id: 'blogPost' })
}

export const getPageParams = (searchParam) => {
  return Tipe.getPageByParam({ id: 'blogPost', searchParam })
}
