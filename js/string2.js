let uname = "emmanuel";
// console.log(uname.length);
// console.log(uname[0]);
let modifiedName = uname.toLocaleUpperCase();
// console.log(modifiedName.charAt(0));
// console.log(modifiedName.indexOf("L"));
// console.log(modifiedName.charAt(7));
function reversStr(str){
    let revStr = "";
    for(let i=0; i<str.length; i++){
        let item = str.charAt(i);
        revStr+=str.charAt(str.length-1-i);
    }
    return revStr;
}

console.log(reversStr("hello"));