const name = document.getElementById("name")
const email = document.getElementById("email")
const password = document.getElementById("password")
const save = document.getElementById("save");


$(function(){

    $('#test').on('submit', function(){

        let data = $(this).serialize();

        $.ajax({
            method: 'POST',
            url: 'test.php',
            data: data
        }).done(function( msg ){
            console.log( msg );
        });

        return false;
    });
});
