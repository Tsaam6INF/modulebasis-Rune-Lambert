const {users, rights, userRights} = require("./data");

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

function cb(username, RightsDescription){
    console.log(`${username} : ${RightsDescription}`);
}

module.exports = {
   login,
   cb
  };
