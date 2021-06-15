export const WE_BUILD_LOGO_URL = 'https://cms.qz.com/wp-content/uploads/2018/05/china-pandas-eyes-turned-white-in-sichuan-2018-e1525405988661.jpg?quality=75&strip=all&w=1200&h=900&crop=1'

export const PATH = {
  home: '/community',

  community_question: '/community/questions',
  community_search: (query, page = 0) => `/community/question?search=${query}&page=${page}`,
  community_solution: (qid, title) => `/community/solution/${qid}/${title ? title : ''}`,

  kb_blog: '/community/kb',
  kb_mw_filter: '/community/kb/mfilter',
  kb_blog_search: (query, page = 0) => `/community/kb?search=${query}&&page=${page}`,
  kb_blog_solution: (kbid, title) => `/community/kb/${kbid}/${title ? title : ''}`,
  kb_full_blog: (id, name) => `/community/kb/blog/${id}/${name}`
}