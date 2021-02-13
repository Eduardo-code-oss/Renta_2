


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
      async function serviceRegister(user){
    //    alert("entro a funcion regis");
          await axios
          .post("https://sh-javascript.herokuapp.com/api/user/save", user)
          .then((res) => {
            console.log(res.data.name);
           
            if (res.request.status == 200) {
          location.href = "http://localhost:3000/authentication-signin-cover.html";
            //alert("sussesfull"); 
            }if (res.request.status == 422) {
              alert("usuario en uso");
            } 
            retorno = res.data;
            return res;
          })
          .catch((error) => {
            console.log(error.response);
          });

          
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
              alert("sussesfull"); 
         //     location.href = "http://localhost:3000/tabla.html";
            }
            if (res.request.status == 404) {
            alert("usurio no encontrado");              
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
      async function datos_tabla(){
        //    alert("entro a funcion regis");
              await axios
              .get("http://sh-javascript.herokuapp.com/api/house/FindAll")
              .then((res) => {
              console.log(res.data.name); 
              retorno = res.data;
                return res;
              })
              .catch((error) => {
                console.log(error.response);
              });
          }
          
          axios.get("http://sh-javascript.herokuapp.com/api/house/FindAll")
          .then(response => {
              this.users = response.data;
          })
          .catch(e => {
              // Capturamos los errores
          })