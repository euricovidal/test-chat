import Actions from '../actions'
import Firebase from 'firebase'

let firebase = Firebase.initializeApp({
  apiKey:        "AIzaSyD6uKj1UY3dv8gOabzv9ITHC_4Dmj_OiG4",
  authDomain:    "chat-4f2ed.firebaseapp.com",
  databaseURL:   "https://chat-4f2ed.firebaseio.com",
  storageBucket: "chat-4f2ed.appspot.com"
}, 'ChannelSource')

let ChannelSource = {
  getChannels: {
    remote(state) {
      console.log('remote')
      return new Promise((resolve, reject) => {
        console.log('promise')
        firebase.database().ref('channels').once('value', (snapshot) => {
          var channels = snapshot.val()
          resolve(channels)
        })
      })
    },
    success: Actions.channelsReceived,
    error:   Actions.channelsFailed
  }
}

export default ChannelSource
