import Actions from '../actions'
import Firebase from 'firebase'

let MessageSource = {
  sendMessage: {
    remote(state) {
      console.log(state)
      return new Promise((resolve, reject) => {
        console.log('remote sendmessage')
        var time = (new Date).getTime()
        var firebase = Firebase.initializeApp({
          apiKey:        "AIzaSyD6uKj1UY3dv8gOabzv9ITHC_4Dmj_OiG4",
          authDomain:    "chat-4f2ed.firebaseapp.com",
          databaseURL:   "https://chat-4f2ed.firebaseio.com",
          storageBucket: "chat-4f2ed.appspot.com"
        }, 'MessageSource_' + time)
        firebase.database().ref('messages/' + state.selectedChannel.key).push({
          message:    state.message,
          date:       new Date().toUTCString(),
          author:     state.user.displayName,
          userId:     state.user.uid,
          profilePic: state.user.photoURL
        })
        resolve()
      })
    },
    success: Actions.messageSendSuccess,
    error:   Actions.messageSendError
  },
  getMessages: {
    remote(state) {
      console.log('remoteMessage')
      var time = (new Date).getTime()
      var firebase = Firebase.initializeApp({
        apiKey:        "AIzaSyD6uKj1UY3dv8gOabzv9ITHC_4Dmj_OiG4",
        authDomain:    "chat-4f2ed.firebaseapp.com",
        databaseURL:   "https://chat-4f2ed.firebaseio.com",
        storageBucket: "chat-4f2ed.appspot.com"
      }, 'MessageSource_' + time)
      return new Promise((resolve, reject) => {
        console.log('promiseMessage - channel ' + state.selectedChannel.key)
        if(!state.selectedChannel) return
        firebase
          .database()
          .ref('messages/' + state.selectedChannel.key)
          .once('value', (snapshot) => {
            resolve(snapshot.val())
            firebase
              .database()
              .ref('messages/' + state.selectedChannel.key)
              .on('child_added', (msg) => {
                let msgVal = msg.val()
                msgVal.key = msg.key
                Actions.messageReceived(msgVal)
              })
          })
      })
    },
    success: Actions.messagesReceived,
    error:   Actions.messagesFailed,
    loading: Actions.messagesLoading
  }
}

export default MessageSource
