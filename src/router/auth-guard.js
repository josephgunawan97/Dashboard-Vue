// // import { store } from '../store'
// const fb = require('@/components/firebaseConfig')

// export default (to, from, next) => {
//   fb.auth.onAuthStateChanged((user) => {
//     if (user) {
//       // console.log('User is logged in')
//       // console.log('User is logged in', user.uid)
//       if (user.uid === 'Uhb0qAVgZgQNZO9J0MgG6Qa2psI2') {
//         // prevent demo account
//         console.log('Demo account detected.')
//         next('/demo')
//       } else {
//         localStorage.setItem('uid', user.uid)
//         // update data or vuex state
//         next()
//       }
//     } else {
//       // console.log('User is not logged in.')
//       next('/signin')
//     }
//   })
//   // console.log('check auth guard', store.getters.user)
//   // if (store.getters.user) {
//   // } else {
//   // }
// }
