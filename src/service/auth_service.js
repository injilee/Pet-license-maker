import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from 'firebase/auth';

class AuthService {
  constructor(app){
    this.firebaseAuth = getAuth(app);
    this.googleProvider = new GoogleAuthProvider();
    this.githubProvider = new GithubAuthProvider();
  }
  
  login(providerName){
    const authprovider = this.getProvider(providerName);
    return signInWithPopup(this.firebaseAuth, authprovider);
  }

  getProvider(providerName){
    switch (providerName){
      case 'Google':
        return this.googleProvider;

      case 'Github' :
      return this.githubProvider;
      
      default :
      throw new Error(`not supported provider: ${providerName}`)
    }
  }
}

export default AuthService;