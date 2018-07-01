$(document).ready(function(){
    $("#validate").bind('click', function () {
        var username = $('#username'),
            password = $('#password');
 
        if (validateEmail( username.val() ) ) {
            username.removeClass('has-error');
            $('#userNameLabel').removeClass('pull-right').css({
                color: '#333',
            }).text('Username');
        } else {
            username.addClass('has-error');
            $('#userNameLabel').addClass('pull-right').css({
                color: 'red',
            }).text('Required field');
            return;
        }

        if ( password.val() ) {
            $('#passRequired').hide();
            password.removeClass('has-error');
        } else {
            $('#passRequired').show();
            password.addClass('has-error');
            return;
        }

        authenticate(username.val(), password.val());
    });

    function authenticate(username, password) {
        $.post('sampleApi', {
            username: username,
            password : password
        }, function(returnedData){
            console.log(returnedData);
        }).fail(function(){
            alert('Mock login authentication triggered');
        });
    }

    function validateEmail(email) {
        var emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailRegEx.test(String(email).toLowerCase());
    }
});