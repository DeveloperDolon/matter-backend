
const checkingJWT = (userEmail, queryEmail) => {
    
    if(userEmail !== queryEmail) {
        return false;
    }
    return true;
}

module.exports = checkingJWT;