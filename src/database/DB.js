const mysql = require('mysql');

connection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'f0rmajuerrera',
        database: 'crud'

    }
)

const create = (nombre, correo, contraseña) => {


    connection.query('INSERT INTO usuarios SET ?',
        {
            nombre: nombre,
            correo: correo,
            contraseña: contraseña
        }, (error, results, fields) => {
            if (error) throw error;
            console.log(results.insertId);
        });



}
const update = (nombre, correo, contraseña, id) => {

    connection.query('UPDATE usuarios  SET nombre = ?, correo = ?, contraseña = ? WHERE Id_usu = ?',
        [nombre, correo, contraseña, id],
        (error, results, fields) => {
            if (error) throw error;
            return results
        });
}
const lista = () => {

    connection.query('Select * from usuarios ', (error, results, fields) => {
        if (error) throw error;

    });

}
function buscar_id(id) {


    connection.query('Select * usuarios WHERE id_usu=' + id, (error, results, fields) => {
        if (error) throw error;
        return results;
    });

}
function borrar(id) {
    connection.query('Delete From usuarios WHERE id_usu=' + id, (error, results, fields) => {
        if (error) throw error;
        return results;
    });


}
module.exports.create = create
//module.exports.borrar = borrar()
module.exports.conexion = connection
module.exports.update = update
