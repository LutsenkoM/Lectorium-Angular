export class AuthService {

    isLoggedIn = false;

    isAuth() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.isLoggedIn)
            }, 1000)
        });
    }

    login() {
        this.isLoggedIn = true;
    }

    logOut() {
        this.isLoggedIn = false;
    }


}
