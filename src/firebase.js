import firebase from 'firebase/compat/app';

const firebaseConfig = {
apiKey: "AIzaSyB-KWXlZ9kY-NgAe98uLIGq3cHTsdwd-IU",
	authDomain: "aumatex-planetary-test.firebaseapp.com",
	projectId: "aumatex-planetary-test",
	storageBucket: "aumatex-planetary-test.appspot.com",
	messagingSenderId: "89883113116",
	appId: "1:89883113116:web:e2cb1da071c99acc409f59",
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();