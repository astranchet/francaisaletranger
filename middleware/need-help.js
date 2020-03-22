const needHelpMiddleware = ({ req, res, $axios, redirect }) => {
  if (process.server && req.method === 'POST') {
    return $axios.post(this.$env.VUE_APP_API_URL + '/NeedHelps', req.body)
      .then((response) => {
        res.statusCode = response.status
        res.end()
      })
      .catch((error) => {
        res.statusCode = error.response.status
        res.end()
      })
  }
}

export default needHelpMiddleware
