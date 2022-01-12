$(document).ready(function(){

    //$('#example').on('keydown', 'input', function(){

    $('#example').on('keyup', 'input', function(){

        $('#result').html("Your Name is: " + $(this).val());

    });
});