const client = require('./clients')

client.getAllPosts({}, (error, posts) => {
  if (error) {
    console.error(error)
  } else {
    console.log(posts)
  }
})

// client.getPosts({ id: '1' }, (error, posts) => {
//   if (error) {
//     console.error(error)
//   } else {
//     console.log(posts)
//   }
// })
