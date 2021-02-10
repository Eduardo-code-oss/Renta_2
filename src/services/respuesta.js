    var respuestaL="";
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
        
        
        function serviceLogin(email, pass){
            fetch("https://sh-javascript.herokuapp.com/api/user/findbyEmail/" + email)
            .then (PromiseF => PromiseF.json())
            .then(contenido => console.log('Content '+ contenido));
        }
        async function serviceRegister(user){
            await axios
            .post("https://sh-javascript.herokuapp.com/api/user/save", user)
            .then((res) => {
              console.log(res.data.name);
              if (res.request.status == 200) {
                location.href = "http://localhost:3000/authentication-signin-cover.html";
             }
             retorno = res.data;
              return res;
            })
            .catch((error) => {
              console.log(error.response);
            });

            
          console.log(retorno, " guarde los datos");
        
        }
        async function serviceLog(regis){
            await axios
            .post("https://sh-javascript.herokuapp.com/api/user/login/", regis)
            .then((res) => {
              console.log(res.data.name);
             if (res.request.status == 200) {
            //    location.href = "http://localhost:3000/tabla.html";
             }
              retorno = res.data;
              return res;
              
            })
            .catch((error) => {
                if (error.request.status == 404) {
                    console.log(error.response);
                }
  
            });
        
     
          console.log(retorno, "Datos encotrados");

              
        localStorage.setItem("id", retorno);
            var id = localStorage.getItem("id");
         
        }


        async function singin() {
            const user = {
              email: document.getElementById("signupSrEmail").value,
              password: document.getElementById("signupSrPassword").value
            }; //se crea la const user para guaradr los datos que vienen del html con el getElementById
          
            var retorno = ""; //variable que guarda los datos del res
            await axios
              .post("https://sh-javascript.herokuapp.com/api/user/login", user) //url de servicio post y la const del html
              .then((res) => {
                retorno = res.data;
                if (res.request.status == 200) {
                  location.href = "http://localhost:3000/options.html";
                }
                return res;
              })
              .catch((error) => {
                if (error.request.status == 404) {
                    window.alert("Correo/contraseña incorrecta");
                }
              });
            localStorage.setItem("id", retorno);
            var id = localStorage.getItem("id");
          }