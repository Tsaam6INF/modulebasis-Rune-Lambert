const { login, cb } = require("./admin");

login("kleintjes.karel", "test", cb);
// resultaat: fout bij het aanmelden

login("kleintjes.karel", "karel", cb);
// resultaat: kleintjes.karel: lezen - schrijven;

login("dotjes.els", "els", cb);
// resultaat: dotjes.els: lezen;
