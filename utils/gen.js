  import * as firebase from 'firebase';
  
    const config = {
    apiKey: 'AIzaSyCH2_2p7UQRqkOfU5Fd7AfUCxUdysuYURs',
    authDomain: 'juice-6b249.firebaseapp.com',
    databaseURL: 'https://juice-6b249.firebaseio.com',
    projectId: 'juice-6b249',
    storageBucket: 'juice-6b249.appspot.com',
    messagingSenderId: '984607124291'
};

  class Gen {
    static initApp = () => firebase.initializeApp(config);
  }

  module.export = Gen;
