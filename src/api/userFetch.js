export function getUserInfo(username) {
  // Default options are marked with *
  return fetch('http://localhost:8888/user/username='+username, {
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'include', // include, same-origin, *omit
    headers: {
      'user-agent': 'Mozilla/4.0 MDN Example',
      'content-type': 'application/json'
    },
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'no-cors', // no-cors, cors, *same-origin
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // *client, no-referrer
  })
  // .then(response => response.json()).catch(e=>console.log(e)) // parses response to JSON
}

export function setUserInfo(username, imgSrc, userinfo) {
  return fetch('http://localhost:8888/user/userinfo', {
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'include', // include, same-origin, *omit
    body: JSON.stringify({
      username: username,
      userinfo: userinfo,
      avatarUrl: imgSrc
    }),
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'no-cors', // no-cors, cors, *same-origin
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // *client, no-referrer
  })
}

export async function addUserRoom(username) {
  return await fetch('http://localhost:8888/user/addroom', {
    method: "POST",
    mode: "cors",
    credentials: "include",
    body: JSON.stringify({
      username: username
    }),
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // *client, no-referrer
  }).then(response=>response.json())
}