const client = require('./clients')

// client.getPosts({ id: 'a' }, (error, response) => {
//   if (error) {
//     console.error(error.message)
//   } else {
//     console.log('get postsId "a"', response)
//   }
// })

// client.deletePosts({ id: 1 }, (error, response) => {
//   if (error) {
//     console.error(error.message)
//   } else {
//     console.log('delete postId: 1', response)
//   }
// })

client.getAllPosts({}, (error, response) => {
  if (error) {
    console.error(error.message)
  } else {
    console.log('All posts', response)
  }
})

// client.getPosts({ id: 1 }, (error, response) => {
//   if (error) {
//     console.error(error.message)
//   } else {
//     console.log(response)
//   }
// })

// client.editPosts({ id: 2, title: 'joujou', body: 'Hey good morning' }, (error, response) => {
//   if (error) {
//     console.error(error.message)
//   } else {
//     console.log('edit postId 2', response)
//   }
// })

// client.addPosts({ id: 1, title: 'New post', body: 'Hey you', category: 'keyboard' }, (error, response) => {
//   if (error) {
//     console.error(error.message)
//   } else {
//     console.log('Add post', response)
//   }
// })

// client.getAllPosts({}, (error, response) => {
//   if (error) {
//     console.error(error.message)
//   } else {
//     console.log('All posts', response)
//   }
// })
