
let textPass = document.getElementById("textPass")
let passLength = document.getElementById("passLength");
let container = document.getElementById("textP")

function generatePass(){
    let password = [];
    let pass = "";
    for (let index = 0; index < passLength.value; index++) {
        password[index] = Math.floor(Math.random() * 58) + 65;
    
        while(password[index] >= 91 && password[index] <= 96){
            password[index] = Math.floor(Math.random() * 10);
        }
        if(password[index] >= 65){
            password[index] = String.fromCharCode(password[index]);
        }
        
        password[index] = password[index].toString();
    
        pass = pass.toString();
        pass += password[index];
        
    }

    container.textContent=pass;

}

function copyText(){
    let textP = document.getElementById("textP").innerHTML;
    const textarea = document.createElement("textarea");

    textarea.value = textP;
    document.body.appendChild(textarea);

    textarea.select();
    textarea.setSelectionRange(0, 99999); 
    
    document.execCommand("copy");
    document.body.removeChild(textarea);

    alert("Text copied to clipboard!");
}





