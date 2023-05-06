const register = function(userName){
 
    console.log(`user register successfylly ${userName}`);
}

const login = function(userName){
 
    console.log(`user login successfylly ${userName}`);
}


// here we export the modules 
// module.exports = register;

// to send multiple data from the module 
// then we have to create the obejct 

module.exports = {
    register,
    login,
}