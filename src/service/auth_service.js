import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
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

  resetPassword(email) {
    const auth = this.firebaseAuth;
    sendPasswordResetEmail(auth, email)
      .then(() =>
        alert(
          '가입한 이메일 주소로 이메일이 전송되었습니다. 이메일 확인 후 비밀번호를 재설정 해주시기 바랍니다.',
        ),
      )
      .catch((error) => {
        console.log(error);
      });
  }

  emailAndPasswordLogin(email, password) {
    const auth = this.firebaseAuth;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert('회원 가입 완료');
        return user;
      })
      .catch((error) => console.log(error));
  }

  emailSignIn(email, password) {
    const auth = this.firebaseAuth;
    signInWithEmailAndPassword(auth, email, password).catch((error) => {
      switch (error.code) {
        case 'auth/missing-email':
          alert('이메일 입력해주세요');
          break;

        case 'auth/wrong-password':
          alert('비밀번호를 확인해주세요');
          break;

        case 'auth/internal-error':
          alert('비밀번호를 입력해주세요');
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
