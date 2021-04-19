let UserName = prompt("Who you are");
let UserPassword ;
let user ; 
if(UserName == "Admin"){
    UserPassword = prompt("Your password")
    user =  (UserPassword == "codecamp#5")? "ยินดีต้อนรับ":
            (UserPassword !== "codecamp#5" && UserPassword === String(UserPassword) )? "Wrong password":
            "ยกเลิก";
    alert(user);            
}else if (UserName !== "Admin" && UserName === String(UserName) ){
    alert("ผมไม่รู้จักคุณ");
}else{ 
    alert("ยกเลิก");
}