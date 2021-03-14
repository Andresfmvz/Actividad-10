const User = require("../models/user");

function create(req, res){
    var user = new User();
    var params = req.body;

    user.firstName= params.firstName;
    user.lastName= params.lastName;
    user.email= params.email;
    user.age= params.age;

    user.save((error, userCreated) => {
        if(error){
            res.status(500).send({
                statusCode:500,
                message:"Error en el servidor"
            })
        }else{
            if(!userCreated){
                res.status(400).send({
                    statusCode:400,
                    message: "Error al insertar el usuario"
                })
            }else{
                res.status(200).send({
                    statusCode: 200, 
                    message: "Usuario almacenado correctamente",
                    dataUser: userCreated
                })
            }
        }
    })
}

module.exports = {
    create
}