import { createClient } from '@tipe/js'

export default ({ env }, inject) => {
  console.log(env)
  const Tipe = createClient({
    project: env.tipeProjectId,
    key: env.tipeApiKey,
    domain: 'https://beta-api.tipe.io'
  })

  const getHomePage = () => {
    return Tipe.getPagesByTemplate({ id: 'home' })
  }

  const getBlogPost = () => {
    return Tipe.getPagesByTemplate({ id: 'blogPost' })
  }

  const getPageParams = (searchParam) => {
    return Tipe.getPageByParam({ id: 'blogPost', searchParam })
  }
  inject('tipe', { getHomePage, getBlogPost, getPageParams })
}
