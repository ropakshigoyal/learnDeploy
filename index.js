require('dotenv').config()
const express = require('express')

const app = express()

const port = process.env.PORT || 2000;

const githubData = {
  "login": "ropakshigoyal",
  "id": 151435152,
  "node_id": "U_kgDOCQa3kA",
  "avatar_url": "https://avatars.githubusercontent.com/u/151435152?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/ropakshigoyal",
  "html_url": "https://github.com/ropakshigoyal",
  "followers_url": "https://api.github.com/users/ropakshigoyal/followers",
  "following_url": "https://api.github.com/users/ropakshigoyal/following{/other_user}",
  "gists_url": "https://api.github.com/users/ropakshigoyal/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/ropakshigoyal/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/ropakshigoyal/subscriptions",
  "organizations_url": "https://api.github.com/users/ropakshigoyal/orgs",
  "repos_url": "https://api.github.com/users/ropakshigoyal/repos",
  "events_url": "https://api.github.com/users/ropakshigoyal/events{/privacy}",
  "received_events_url": "https://api.github.com/users/ropakshigoyal/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Ropakshi Goyal",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 14,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2023-11-19T10:07:51Z",
  "updated_at": "2025-04-18T16:53:17Z"
}
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res) => {
    res.send('ropakshigoyal.com ')
})

app.get('/login',(req,res) => {
    res.send('<h1>please login at chai aur code</h1>')
})

app.get('/youtube',(req,res) => {
    res.send("<h2>chai aur code</h2>")
})

app.get('/github',(req,res) => {
    res.json(githubData)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
