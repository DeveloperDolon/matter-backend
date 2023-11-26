
const checkingJWT = (userEmail, queryEmail) => {
    
    return userEmail === queryEmail;
}

module.exports = checkingJWT;