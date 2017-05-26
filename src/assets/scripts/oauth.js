import Vue from 'vue'

export default {
  check () {
    return new Promise((resolve, reject) => {
      Vue.firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          resolve(user)
        } else {
          reject()
        }
      })
    })
  },
  in () {
    let provider = this.provider
    provider = new Vue.firebase.auth.FacebookAuthProvider()

    provider.addScope('public_profile')
    provider.addScope('email')
    provider.addScope('user_videos')
    provider.addScope('user_photos')
    provider.addScope('user_posts')

    return Vue.firebase.auth().signInWithRedirect(provider)
  },
  out () {
    return Vue.firebase.auth().signOut()
  }
}
