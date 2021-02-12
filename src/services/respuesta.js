


async function capturar(){
 
 
  const regis = {
   
      email: document.getElementById("signupSrEmail").value,
      password: document.getElementById("signupSrPassword").value,
    };
    serviceLog(regis);
  }
 
      function registrar(){
          const user = {
              name: document.getElementById("fullNameSrEmail").value,
              email: document.getElementById("signupSrEmail").value,
              password: document.getElementById("signupSrPassword").value,
            };
            serviceRegister(user);
      
      }
      
      
      // function serviceLogin(email, pass){
      //     fetch("https://sh-javascript.herokuapp.com/api/user/findbyEmail/" + email)
      //     .then (PromiseF => PromiseF.json())
      //     .then(contenido => console.log('Content '+ contenido));
      // }
      async function serviceRegister(user){
    //    alert("entro a funcion regis");
          await axios
          .post("https://sh-javascript.herokuapp.com/api/user/save", user)
          .then((res) => {
            console.log(res.data.name);
           
            if (res.request.status == 200) {
         //    location.href = "http://localhost:3000/authentication-signin-cover.html";
            //alert("sussesfull"); 
            }if (res.request.status == 422) {
              alert("correo ya en uso");
            } 
            retorno = res.data;
            return res;
          })
          .catch((error) => {
            console.log(error.response);
          });
      //  location.href = "";
          
        console.log(retorno, " guarde los datos");
      
        localStorage.setItem("id", retorno._id);
        var id = localStorage.getItem("id");
      }
      async function serviceLog(regis){
          await axios
          .post("https://sh-javascript.herokuapp.com/api/user/login/", regis)
          .then((res) => {
            console.log(res.data.name);
            if (res.request.status == 200) {
                 //       location.href = "http://localhost:3000/tabla.html";
                        //alert("sussesfull"); 
                        }
            retorno = res.data;
            return res;
          })
          .catch((error) => {
            console.log(error.response);
          });
      
     
        console.log(retorno, "Datos encotrados");

        localStorage.setItem("id_user", retorno[0]._id);
       
      }

      