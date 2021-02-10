    var respuestaL="";
  async function capturar(){
   
   
    const regis = {
     
        email: document.getElementById("signupSrEmail").value,
        password: document.getElementById("signupSrPassword").value,
      };
      serviceLog(regis);
    }
   
               
    
   
       
        // alert(`email = ${email} y password ${pass}`)
        
    //    axios.get(`https://sh-javascript.herokuapp.com/api/user/login/${email}`).then(function (response) {
    //     console.log('response');
    //     console.log(response);
    //     }).catch(function (error) {
    //         console.log(error);
    //     })

    //     var settings = {
    //         "url": `https://sh-javascript.herokuapp.com/api/user/login/${email}`,
    //         "method": "GET",
    //         "timeout": 0,
    //       };
          
    //       $.ajax(settings).done(function (response) {
    //         console.log(response);
    //       });
        

       
    
    
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
              retorno = res.data;
              return res;
            })
            .catch((error) => {
              console.log(error.response);
            });
        
          console.log(retorno, "Datos encotrados");
              
          localStorage.setItem("id", retorno._id);
          var id = localStorage.getItem("id");
         
        }