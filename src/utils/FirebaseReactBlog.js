// Import the functions you need from the SDKs you need
import { initializeApp, getApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries


class FirebaseReactBlog{
  
  constructor(){
    
    this.firebaseConfig = {
      apiKey: "AIzaSyDw_TmNz4Ro10XOHSAM6yaF8MRkjG8GhlM",
      authDomain: "blog-firebase-1e370.firebaseapp.com",
      projectId: "blog-firebase-1e370",
      storageBucket: "blog-firebase-1e370.appspot.com",
      messagingSenderId: "238030141492",
      appId: "1:238030141492:web:7b12d3863f82e16cf1b261"
    };

    try {
      this.app = getApp();
    } catch (e) {
      this.app = initializeApp(this.firebaseConfig);
    } finally {
      this.auth = getAuth();
      this.provider = new GoogleAuthProvider();
    }
  }

  googleAuth(){
    signInWithPopup(this.auth, this.provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        // const user = result.user;
        // console.log({ user, token });
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log({ errorCode, errorMessage, email, credential });
      });

  }
  
  googleSignOut(){

    signOut(this.auth).then(() => {
    }).catch((error) => {
      console.log(error);
    });

  }

  isUserSignedIn(){
    console.log(this.auth.currentUser);
    return this.auth.currentUser != null;
  }
}

export default FirebaseReactBlog;