var cat = 0;

function changeCat() {
  if(cat == 0){
     document.getElementById("cat").src = "https://i.natgeofe.com/n/4cebbf38-5df4-4ed0-864a-4ebeb64d33a4/NationalGeographic_1468962_4x3.jpg";
  } else if (cat == 1) {
     document.getElementById("cat").src = "https://th.bing.com/th/id/OIP._J_zkeC5KSf8SlJqk5ssowHaHX?rs=1&pid=ImgDetMain";
  } else if (cat == 2) {
     document.getElementById("cat").src = "https://th.bing.com/th/id/OIP.gkt2UQf1zWpzesMXzOsBKQHaE8?w=288&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7";
     document.getElementById("catText").innerHTML = "You can stop clicking the button now, there are no more cat pictures.";
  } else if (cat == 3) {
     document.getElementById("catText").innerHTML = "If you want to learn about conditonals, check out the page.";
  } else if (cat == 4) {
     document.getElementById("catText").innerHTML = "You can stop clicking.";
  } else {
     document.getElementById("catText").innerHTML = "Here's a neat trick, nothing will happen now.";
  }
  cat++;
}

function results() {
   document.getElementById("helloConsole").style.visibility = "visible"; 
}
