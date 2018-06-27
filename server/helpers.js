const fs = require("fs");
//-------------------------------------------------------
module.exports = {
    verifyUsernameAndPassword:verifyUsernameAndPassword,
};
//-------------------------------------------------------
function verifyUsernameAndPassword (username, password){
    const fileContent = fs.readFileSync('./username-and-password-data.json');
    const myJson = JSON.parse(fileContent);
    if (myJson[0][username] === password) {
        return true;
    } else {
        return false;
    }
}
//-------------------------------------------------------

