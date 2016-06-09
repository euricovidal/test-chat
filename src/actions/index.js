import alt      from '../alt'
import Firebase from 'firebase'

class Actions {
  constructor() {
    this.generateActions(
      'channelsReceived',
      'channelsFailed',
      'messagesReceived',
      'messagesFailed',
      'channelOpened',
      'messagesLoading',
      'sendMessage',
      'messageSendSuccess',
      'messageSendError',
      'messageReceived'
    )
  }
  login(router) {
    if(window.debugMode) console.log('Actions.login')
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
        if(window.debugMode) {
          console.log('Actions.login.signInWithPopup')
          console.log(result)
        }
        dispatch(result.user)
        router.replace('/chat')
      }).catch((error) => {
        alert(error.message)
        if(window.debugMode) console.error(error)
      })
    }
  }
}

export default alt.createActions(Actions)
