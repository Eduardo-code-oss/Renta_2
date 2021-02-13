const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TabSchema =  Schema({

    tipoDep : String,
    link : String,
    telefono: Number,
    arrendatario : String,
    requesitos : String,
    direccion: String,
    costoRenta: Number,
    status:{
        deposito: Boolean,
        defaul: false
    },
    costDeposito : Number,
    status:{
        mantenimiento : Boolean,
        defaul: false
    },
    costMantenimiento : Number,
    cita : String,
    detalles : String,
    observacionesGral : String,
    statusDep : String,
    idUser : String

});

module.exports = mongoose.model('table',TabSchema);