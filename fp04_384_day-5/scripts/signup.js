document.querySelector("#form").addEventListener("submit",myfunction);
var arr=[];
function myfunction(){
    event.preventDefault();
    var obj={
        name:form.name.value,
        email:form.email.value,
        password:form.password.value,
    }
    // document.querySelector("#dubara").innerHTML=""
    if(obj.name==""||obj.email==""||obj.password=="") {
        var p=document.createElement("p");
        // p.setAttribute("id","dubara")
        p.innerText="please fill all the information which is mentioned above";
        // break;

        
        // p.setAttribute("id","dubara")
        p.style.color="red";
        p.style.fontSize="12px"
        p.style.textAlign="center"
        if(obj.name=="") {
           document.querySelector("#nam").style.color="red";
        }
        else  {
            document.querySelector("#nam").style.color="black";
        }
        if(obj.email=="") {
           document.querySelector("#ema").style.color="red";
        }
        else  {
            document.querySelector("#ema").style.color="black";
        }
        if(obj.password=="") {
           document.querySelector("#pass").style.color="red";
        }
        else  {
            document.querySelector("#pass").style.color="black";
            document.querySelector("#pass").innerHTML="password";
       document.querySelector("#pass").style.fontSize="17px";
        }
        document.querySelector("#box").append(p);
    }
    else if(obj.password.length<6&&obj.password!="") {
       console.log("kai");
       document.querySelector("#pass").innerHTML="please fill at least 6 digits or character";
       document.querySelector("#pass").style.fontSize="13px";
       document.querySelector("#pass").style.color="red"

    }
    else   {
    arr.push(obj)
    console.log(obj);
    if(obj.password.length<6) {
        console.log("kk");
    }
   localStorage.setItem("signup",JSON.stringify(arr))
   alert("signup successful")
   window.location.href="login.html"
    }
    if(obj.name=="") {
        //    document.querySelector("#nam").innerHTML.style.color="red";
        console.log("red")
        }
}