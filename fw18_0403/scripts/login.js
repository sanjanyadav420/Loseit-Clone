


    $('.btn').click(function(){
        $(this).toggleClass('click')
        $('.sidebar').toggleClass('show')
    })
    $('.feat-btn').click(function(){
        $('nav ul .feat-show').toggleClass("show");
        $('nav ul .first').toggleClass("rotate");
    })
    $('.serv-btn').click(function(){
        $('nav ul .serv-show').toggleClass("show1");
        $('nav ul .second').toggleClass("rotate");
    })


    // document.querySelector("#fo").innerHTML=`<img src="https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif"/>`


    
    document.getElementById("butt").addEventListener("click",function(){
         let getdata= JSON.parse(localStorage.getItem("userdata"));
         let email=document.getElementById("email").value;
         let password=document.getElementById("password").value;
         document.querySelector("#fo").innerHTML=`<img src="https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif"/>`;
         setTimeout(function(){
          if(email==getdata[0].email&&password==getdata[0].password) {
          alert(`${getdata[0].firstname}, Your log in was successful`)
          window.location.href="index.html"
         }
         else {
            alert(`Hi ${getdata[0].firstname}, Please recheck your email or password`)
            document.querySelector("#fo").innerHTML=`<button id="butt">Log in</button>`
            fooooo();
         }
         },500)
    })


    function fooooo(){
      window.location.reload()
    }

