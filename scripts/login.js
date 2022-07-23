let store= JSON.parse(localStorage.getItem("signup"))
console.log(store);
document.querySelector("#form").addEventListener("submit",myfunction);
function myfunction(){
    event.preventDefault();

    
    let objt={
        email:form.email.value,
        password:form.password.value,
    }
    let count=0;
    store.forEach(function(elem){
       if(objt.email==elem.email&&objt.password==elem.password)
       {
        
           count++;
       }
     
       if(count==1) {
          alert("Log in successful");
       }
       else  {
          alert("wrong password or email ");
       }
    })
  
}

function signup(){
    window.location.href = "signup.html"
   }