/**
 * FileName: app.js
 * 
 * @author Christopher Ritchil
 * @date July 11, 2016
 * 
 * StudentID: 300702644
 * website: comp125-S2016-300702644-Lab-4.azurewebsites.net
 * @description This file is the main javascript file for the web site
 */

// IIFE - Immediately Invoked Function Expression
(function () {
    "use strict";

//+++++++++++++++++++++++++++++++++++++++++++++++
console.warn("App is not running.."); 
console.info("=)"); 
//+++++++++++++++++++++++++++++++++++++++++++++++

    
    /** 
     * <summary>
     * This is a User class for my application
     * </summary>
     **/
    var User = (function () {
        function User(userName, password) {
            this.userName = userName;
            this.password = password;
        }
        return User;

    } ());

    /**
     * <summary>
     * This function displays entered user information to the console
     * </summary>
     * 
     * @function displayUserInfo
     * @return {void}
     **/
    function displayUserInfo(User) {
        console.log("++++++++++++++++++++++++++++++++")
        console.log("User Name : " + User.userName);
        console.log("Password : " + User.password);
        console.log("++++++++++++++++++++++++++++++++")
        console.log("-x -x  -x  -x  -x  -x  -x  -x  -")
    }

    /**
     * <summary>
     * This is a eventhandler for submitForm event
     * </summary>
     * 
     * @functon submitForm
     * @return {voids}
     **/
    function submitForm(event) {
        event.preventDefault();

        var userName = document.getElementById("userName");
        var password = document.getElementById("password");

        var user = new User(userName.value, password.value);
        displayUserInfo(user);
        loginForm.reset();
    }
    
    //login form reference and add form event listener
    var loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", submitForm);   
     
})();