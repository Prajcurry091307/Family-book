
var reasons = [
    "Dad",
    "Me",
    "Mom",
    "Brother"
  
  ];
  var images  =
 [
   "Dad.JPG",
    "Pj.JPG",
    "Mom.JPG",
    "Shriyan.jpeg"
  ];
  
  var i = 0;
  function nextslide() {  document.getElementById("reasontext").innerHTML = reasons[i];
    document.getElementById("album").src = images[i];
    i++;
                        
   
  }
  
  
  
  