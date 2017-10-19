import {post, get} from '../utilities/httpHelper.js'

export const login = async ({userName, password, router}) => {
  var options = {
    method: 'POST',
    uri: 'http://localhost:8012/login',
    body: {
      userName: userName,
      password: password
    },
    json: true
  }
  post(options).then(function (repos) {
    if (repos.code === 200) {
      router.push(`/home`)
    } else {
      alert(repos.Message)
    }
  })
  .catch(function (err) {
    console.log(err)
  })
}

export const register = async ({router}) => {
  router.push(`/register`)
}

export const test = async () => {
  get(`http://localhost:8012/`)
}
