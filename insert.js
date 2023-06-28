const frm = document.querySelector("form");
const resp = document.querySelector("h3");

function insertString(str, insert, index){
    const charArray = str.split("");
    let insertCount = 0;

    for(let i = 0; i <= str.length; i++){
        //console.log(str[i]);

        if(index.includes(i)){
            charArray.splice(i + insertCount, 0, insert);
            insertCount++
        }
    }

    return charArray.join("");
}
console.log(insertString("CELEBS TÁ LOCO", "O ", [0]))
