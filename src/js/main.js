//Userek lekérése.
JQuery.getJSon( 'users', function( users ) {
    console.log( 'users', users );
    
});

//check user
function checkUser( user ) {
    if ( user.role > 2 ) {
        return true;
    } else {
        return false;
    }
    }
