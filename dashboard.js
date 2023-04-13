
const close = document.querySelector(".btn-close");
const open2 = document.querySelector(".open-btn");
var navBar = document.querySelector(".nav-bar");


open2.addEventListener("click", function(){
    
    navBar.classList.add("nav-toggle");
});

close.addEventListener("click",function(){

    navBar.classList.remove("nav-toggle");
})

 var myDate = new Date();
    var hrs = myDate.getHours();

    var greet;

    if (hrs < 12)
        greet = 'Good Morning, ';
    else if (hrs >= 12 && hrs <= 17)
        greet = 'Good Afternoon, ';
    else if (hrs >= 17 && hrs <= 24)
        greet = 'Good Evening, ';

    document.getElementById('greetAdmin').innerHTML =  greet + '<span>Admin<span>';


