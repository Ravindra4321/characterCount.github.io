const charValue=document.getElementById("textarea")
 const totalCount=document.getElementById("total-counter");
const remaningCount=document.getElementById("Remaning-counter");

let userChar=0;

const updateCounter= () =>{
userChar=charValue.value.length;

   totalCount.innerText=userChar; 
   remaningCount.innerText=400-userChar;
};

charValue.addEventListener("keyup", () => updateCounter());


const copyText= () => {
    charValue.select();
    charValue.setSelectionRange(0,9999);
     navigator.clipboard.writeText(charValue.value);
};