import config from './config'
export const fetchAllTag = () => {
  return new Promise((reslove) => {
    fetch(config.path.getAllTag)
      .then(e => e.json())
        .then(e => reslove(e.responseObject))
  })
}