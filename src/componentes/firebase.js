import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'

const config = {
	apiKey: "AIzaSyCZipO-wL1gma79P-9-zukTEBodsGNH-bA",
    authDomain: "minimarkets-def0f.firebaseapp.com",
    databaseURL: "https://minimarkets-def0f.firebaseio.com",
    projectId: "minimarkets-def0f",
    storageBucket: "minimarkets-def0f.appspot.com",
    messagingSenderId: "516091763214",
    appId: "1:516091763214:web:fb9af8f27de11ca900fa5f"
};

class Firebase {
    constructor() {
        app.initializeApp(config)
		this.auth = app.auth()
        this.db = app.firestore()
        this.datbase = app.database()
    }

    login(email, password) {
		return this.auth.signInWithEmailAndPassword(email, password)
    }
    getCurrentUsername() {
		return this.auth.currentUser && this.auth.currentUser.displayName
	}
}

export default new Firebase()

