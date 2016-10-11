export class RegisterModel {
    Username: string;
    Email: string;
    Password: string;
    ConfirmPassword: string;

    constructor(username: string,
        email: string,
        password: string,
        confirmPassword: string) {
        this.Username = username;
        this.Email = email;
        this.Password = password;
        this.ConfirmPassword = confirmPassword;
    }
}