// haal hier informatie uit data
const {users, rights, userRights} = require("./data");

// functie waar hij wachtwoord controleerd en usernamen en rechten ophaatl
function login(username, password, cb){
    const user= users.find((user)=> user.username === username);
    
    if (user.wachtwoord !== password){
        console.log("fout bij het aanmelden");
        return
    }

    const userRight = userRights.find((ur)=> ur.userid === user.id)
    const userRightsDescription = rights.find((right)=> right.id === userRight.rightid)

    cb(user.username, userRightsDescription.omschrijving)
}
// functie om het in een string in de terminal te krijgen
function cb(username, RightsDescription){
    console.log(`${username} : ${RightsDescription}`);
}
// hier exporteer je de 2 functies
module.exports = {
   login,
   cb
  };
