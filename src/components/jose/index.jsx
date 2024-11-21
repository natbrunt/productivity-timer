import React from 'react'
import * as jose from 'jose'

function index() {
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")));




  let handleData = (token) => {
    let decodedToken = jose.decodeJwt(token);
    setData(decodedToken.admin);
    localStorage.setItem("token", JSON.stringify(token));
  }
  return (
    <div>index</div>
  )
}

export default index