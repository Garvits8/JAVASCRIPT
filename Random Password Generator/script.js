// FunctionDeclaration
function generatePassword(length,includesuppercase,
                          includesLowercase,
                          includesnumbers,
                          includessymbols){
    const upperchars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerchars="abcdefghizklmnopqrstuvwxyz";
    const numbers="0123456789";
    const symbols ="!@#$%^&*+_-";
    let  allowchars="";
    let password="";

    allowchars += includesLowercase? lowerchars : " ";
    allowchars += includesuppercase? upperchars : " ";
    allowchars += includesnumbers? numbers : " ";
    allowchars += includessymbols? symbols : " ";

    console.log(allowchars);

    if(length <=0){
        return`(At least one digit is required)`;
    }
    if(allowchars.length === 0){
        return`(atleast one condition needs to be selected)`;
    }

    for(let i=0;i<length;i++){
    const randomindex=Math.floor(Math.random() * allowchars.length);
    password+= allowchars[randomindex];

    }
return password;
}

const pwdlgnth = 12;
includesuppercase=true;
includesLowercase=true;
includesnumbers =true;
includessymbols=true;

const password=generatePassword(pwdlgnth,
                                includesuppercase,
                                includesLowercase,  
                                includesnumbers,
                                includessymbols)
console.log("Generated Password is: ",password);
document.getElementById("txtPassword").value=password;