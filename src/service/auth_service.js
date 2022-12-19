import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

class AuthService {
  constructor(app) {
    this.firebaseAuth = getAuth(app);
    this.googleProvider = new GoogleAuthProvider();
    this.githubProvider = new GithubAuthProvider();
  }

  logout() {
    signOut(this.firebaseAuth);
  }

  login(providerName) {
    const authprovider = this.getProvider(providerName);
    return signInWithPopup(this.firebaseAuth, authprovider);
  }

  emailAndPasswordLogin(email, password) {
    const auth = this.firebaseAuth;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        return user;
      })
      .catch((error) => console.log(error));
  }

  emailSignIn(email, password) {
    const auth = this.firebaseAuth;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        switch (error.code) {
          case 'auth/missing-email':
            alert('이메일 입력해주세요');
            break;

          case 'auth/wrong-password':
            break;

          case 'auth/internal-error':
            break;

          default:
            console.log(error);
        }
      });
  }

  onAuthChanged(onUserChanged) {
    onAuthStateChanged(this.firebaseAuth, (user) => {
      onUserChanged(user);
    });
  }

  getProvider(providerName) {
    switch (providerName) {
      case 'Google':
        return this.googleProvider;

      case 'Github':
        return this.githubProvider;

      default:
        throw new Error(`not supported provider: ${providerName}`);
    }
  }
}

export default AuthService;
