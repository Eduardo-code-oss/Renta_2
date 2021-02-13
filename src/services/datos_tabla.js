async function datos_tabla(){
      alert("entro a la funcion");
          await axios
          .get("http://sh-javascript.herokuapp.com/api/house/FindAll")
          .then((res) => {
           console.log( this.users = res.data);
          retorno = res.data;
            return res;
          })
          .catch((error) => {
            console.log(error.response);
          });
          
          console.log(retorno,"prueba de datos");
      }

 datos_tabla();
// function serviceLogin(user){
      
//     var settings = {
//           "url": "https://sh-javascript.herokuapp.com/api/user/login/",user,
//           "method": "POST",
//           "timeout": 0,
//         };
        
//         $.ajax(settings).done(function (response) {
//           saveLogin(response)
//         });
//   }