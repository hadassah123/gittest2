
  // for from to accept only alphabets
  function a(event) {
    var char = event.which;
    if (char >31 && char !=32 && (char <65 || char >90) && (char <97 || char >122)) {
      return false;
    }
  }
  function validateForm(){
    var name=document.getElementById('name').value;
    var message=document.getElementById('message').value;
    var time= document.getElementById('time');
  
  
  if (name == null || message=="") {
  time.innerHTML= 'PLEASE FILL OUT ALL THE FIELDS';
  return false;
  }
  if (name == null || name=="" ) {
    time.innerHTML='Please Fill Out the Name field';
    return false;
  }
  if (message.length < 3) {
    time.innerHTML=('Message too short');
    return false;
   }
   else {
    time.innerHTML='Succesfully Submitted';
    window.location.reload();
  }
  localStorage.setItem('Details',name + " is the name" +" and "+ message +" is message" );
   }