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
  async register(name, email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password)
    return this.auth.currentUser.updateProfile({
      displayName: name
    })
  }
  addQuote(quote) {
    if (!this.auth.currentUser) {
      return alert('Not authorized')
    }

    return this.db.doc(`users_minimarket/${this.auth.currentUser.uid}`).set({
      quote
    })
  }
  crearProducto(id,nombre,imagen,precio) {
    return this.db.doc(`productos/${id}`).set({
      nombre: nombre,
      imagen: imagen,
      precio: precio
    })
  }
  eliminarProducto(borrar){
    return this.db.doc(`productos/${borrar}`).delete()
  }

  listaProductos() {
    return this.db.collection(`productos`).get()
  }
  crearPedido(carrito){
    return this.db.doc(`pedidos/${this.auth.currentUser.uid}`).set({
      carrito,
      usuario:this.auth.currentUser.uid
    })
  }
}

export default new Firebase()

