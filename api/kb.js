import config from './config'
import { logger } from '@/utills/logger.js'
export const fetchMostViewedKB = () => {
  return new Promise((reslove) => {
    const path = config.path.getMostViewedKb
    logger('calling api ' + path)
    fetch(path)
      .then(e => e.json())
        .then(e => {
          logger(e)
          return reslove(e.responseObject)
        })
  })
}
export const fetchRecentKB = (pageNumber = 0, perPage = 5) => {
  return new Promise((reslove) => {
    const path = config.path.getRecentdKBList(pageNumber, perPage)
    logger('calling api ' + path)
    fetch(path)
      .then(e => e.json())
      .then(e => {
        logger(e)
        return reslove(e.responseObject)
      })
      .catch(() => reslove([]))
  })
}

export const fetchKBbyTag = (tag, pageNumber = 0, perPage = 5) => {
  return new Promise((reslove) => {
    const path = config.path.getTagKBList(tag, pageNumber, perPage)
    logger('calling api ' + path)
    fetch(path)
      .then(e => e.json())
      .then(e => {
        logger(e)
        return reslove(e.responseObject)
      })
      .catch(() => reslove([]))
  })
}

export const fetchKbBlog = (id) => {
  return new Promise((reslove) => {
    const path = config.path.getKbBlog(id)
    logger('calling api ' + path)
    fetch(path)
      .then(e => e.json())
      .then(e => {
        logger(e)
        return reslove(e.responseObject)
      })
      .catch(() => reslove([]))
  })
}