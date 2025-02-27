import { generateUniqueID as generateUniqueID, addAccount as addAccount } from "./index.js";

let user1 = ["Diego", "Locsin", "dalocsin@up.edu.ph", 20];
let user2 = ["John", "Galiga", "jkgaliga@up.edu.ph", 21];
let user3 = ["", "Centinaje", "dacentinaje@up.edu.ph", 21];
let user4 = ["Dio", "", "dacentinaje@up.edu.ph", 21];
let user5 = ["Dio", "Centinaje", "", 21];
let user6 = ["Andre", "Andrade", "aandrade@up.edu.ph", 17];
let user7 = ["Andre", "Andrade", "aandradeup.edu.ph", 30];

addAccount(user1);
addAccount(user2);
addAccount(user3);
addAccount(user4);
addAccount(user5);
addAccount(user6);
addAccount(user7);