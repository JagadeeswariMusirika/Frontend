
function generatepassword(length,Lowercase,Uppercase,Numbers,Symbols){

      const lowercaseChars="abcdefghijklmnopqrstuvwxyz";
      const UppercaseChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const numberChars="0123456789";
      const symbolsChars="!@#$%^&*()+_";

      let allowedChars="";
      let password="";

      allowedChars += includeLowercase ? lowercaseChars : "";
      allowedChars += includeUppercase ? UppercaseChars : "";
      allowedChars += includeNumbers ? numberChars : "";
      allowedChars += includeSymbols ? symbolsChars : "";

      if(length <=0){
        return '(password must be at least 1)';
      }
      for(i=0;i<=length;i++){
        const randomIndex=Math.floor(Math.random()*allowedChars.length);
        password += allowedChars[randomIndex];
      }
      return password;

}
const passwordlength=12;
const includeLowercase=true;
const includeUppercase=true;
const includeNumbers=true;
const includeSymbols=true;

const password=generatepassword(passwordlength,
                              includeLowercase,
                              includeUppercase,
                              includeNumbers,
                              includeSymbols);

console.log(`Generated password: ${password}`);