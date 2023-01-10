const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N",
"O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g",
"h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
 "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$",
 "%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";",
 "<",">",".","?","/"];

let pwd1 = ""
let pwd2 = ""


function generatePasswords() {
    for(let i = 0; i<15; i++) {
        let index = Math.floor(Math.random() * characters.length)
        pwd1 += characters[index]
    }
    console.log(pwd1)
    for(let i = 0; i<15; i++) {
        let index = Math.floor(Math.random() * characters.length)
        pwd2 += characters[index]
    }
    console.log(pwd2)
    let pwd1El = document.getElementById("pwd-1")
    let pwd2El = document.getElementById("pwd-2")

    pwd1El.textContent = pwd1
    pwd2El.textContent = pwd2
    pwd1 = ""
    pwd2 = ""
}


