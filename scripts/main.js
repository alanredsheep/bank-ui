function authLogin() {
    $("#li-password-login").removeClass("active");
    $("#li-auth-code-login").addClass("active",true);
    $("#form-password-login").addClass("hiddendiv");
    $("#form-auth-code-login").removeClass("hiddendiv");
}

function passwordLogin() {
    $("#li-password-login").addClass("active",true);
    $("#li-auth-code-login").removeClass("active");
    $("#form-password-login").removeClass("hiddendiv");
    $("#form-auth-code-login").addClass("hiddendiv");
}

