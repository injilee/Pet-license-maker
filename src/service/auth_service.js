import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  onAuthStateChanged,
  signOut,
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
