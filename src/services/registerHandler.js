import {post} from '../utilities/httpHelper.js';

export default ({userName, password, email, router}) => {
  var options = {
    method: 'POST',
    uri: 'http://localhost:8012/register',
    body: {
      userName: userName,
      password: password,
      email: email,
    },
    json: true,
  };
  post(options).then(function (res) {
    console.log(res);
    router.push(`/login`);
  })
  .catch(function (err) {
    console.log(err);
    return false;
  });
};
