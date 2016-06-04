import alt from '../alt'
import Firebase from 'firebase'

class Actions {
  login(args) {
    return (dispatch) => {
      this.firebase = Firebase.initializeApp({
        apiKey:        "AIzaSyD6uKj1UY3dv8gOabzv9ITHC_4Dmj_OiG4",
        authDomain:    "chat-4f2ed.firebaseapp.com",
        databaseURL:   "https://chat-4f2ed.firebaseio.com",
        storageBucket: "chat-4f2ed.appspot.com"
      }, 'ActionLogin')
      var provider = new Firebase.auth.GoogleAuthProvider()
      this.firebase.auth().signInWithPopup(provider).then((result) => {
        //var token = result.credential.accessToken
        //var user  = result.user
        dispatch(result)
      }).catch((error) => {
        alert(error.message)
        console.log(error)
      })
    }
  }
}

export default alt.createActions(Actions)
