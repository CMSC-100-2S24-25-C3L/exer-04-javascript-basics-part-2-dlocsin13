import {v4 as uuidv4} from 'uuid';
import validator from 'validator';
import fs from 'fs';

function generateUniqueID(fname, lname){
    let uniqueID = '';
    //use the uuid to generate unique alphanumeric string of lenght 8
    let uuid = uuidv4().slice(0,8);
    //concatenate the specified format to a string
    uniqueID = fname[0].toLowerCase() + lname.toLowerCase() + uuid;
    return uniqueID;
}

function addAccount(acc){
    let fname = acc[0];
    let lname = acc[1];
    let email = acc[2];
    let age = acc[3];
    let accDetails = '';

    //check if all fields are present
    if(acc.length != 4){
        console.log("Account not added!");
        return false
    }
    //check if fname, lname, and email are non-empty strings
    for(let i = 0; i < acc.length - 1; i++){
        if(acc[i].length === 0){
            console.log("Account not added!");
            return false;
        }
    }

    //check if email field is a valid email
    if(!validator.isEmail(email)){
        console.log("Account not added!");
        return false;
    }

    //check if age is atleast 18
    if(age < 18){
        console.log("Account not added!");
        return false;
    }

    //genereate a unique id for the account
    let uniqueID = generateUniqueID(fname, lname);

    //set the format of the string 
    accDetails = `${fname},${lname},${email},${age},${uniqueID}\n`;

    //chech if the users.txt file exists
    //if it exists, append the account details
    //if it doesn't exists, create a new file and write the account details
    if(fs.existsSync('./users.txt')){
        fs.appendFile('./users.txt', accDetails, function (err) {
            if (err) throw err;
            console.log('Accound added!');
          });
    }else{
        fs.writeFile('./users.txt', accDetails, function (err) {
            if (err) throw err;
            console.log('Account added and users.txt file is created!');
          }); 
    }

    return true;
}

export { generateUniqueID, addAccount }