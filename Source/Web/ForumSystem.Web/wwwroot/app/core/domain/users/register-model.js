"use strict";
var RegisterModel = (function () {
    function RegisterModel(username, email, password, confirmPassword) {
        this.Username = username;
        this.Email = email;
        this.Password = password;
        this.ConfirmPassword = confirmPassword;
    }
    return RegisterModel;
}());
exports.RegisterModel = RegisterModel;
//# sourceMappingURL=register-model.js.map