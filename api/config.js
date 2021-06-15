const basePath = 'http://192.168.0.116:9094'

export default {
  path: {
    getAllTag: `${basePath}/kb/tag/all?page=0&&size=1000000`,

    //KB
    getMostViewedKb: `${basePath}/kb/record/mostViewed?page=0&&size=4`,
    getRecentdKBList: (pn, pp) => `${basePath}/kb/record/all?page=${pn}&size=${pp}`,
    getTagKBList: (tag, pn, pp) => `${basePath}/kb/record/all/${tag}?page=${pn}&size=${pp}`,
    getKbBlog: (id) => `${basePath}/kb/record/${id}`
  }
}
