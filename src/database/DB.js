const mysql = require('mysql');

connection = mysql.createConnection(
    {
        host: 'ebh2y8tqym512wqs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'om91eg1h83uxvstc',
        password: 'o88mch6woyp3ki0q',
        port: '3306',
        database: 'i7rvx5wpvc93zt77'
    }
)

const create = (nombre, correo, contraseña) => {

    //tabla a ocupar
    connection.query('INSERT INTO datos SET ?',
        //los atributos de la tabla
        {
            fecha: nombre,
            texto: correo,
            id_usu: contraseña
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

const borrar = (id) => {
    connection.query('Delete From usuarios WHERE id_usu=' + id, (error, results, fields) => {
        if (error) throw error;
        return results;
    });


}
module.exports.create = create
module.exports.borrar = borrar
module.exports.conexion = connection
module.exports.update = update
