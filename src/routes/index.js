const { response } = require('express');
const express = require('express');
const router = express.Router();
const database = require('../database/DB.js')
const mysql = require('mysql');


router.get('/', (req, res) => {

    res.render('index.html')
});
router.get('/registro', (req, res) => {
    console.log(req.query);
    res.render('Registro.html')
})
router.post('/registro', (req, res) => {

    datos = req.body
    nombre = datos.nombre
    correo = datos.correo
    contraseña = datos.contraseña
    database.create(nombre, correo, contraseña)

    res.redirect('/')
})
router.get('/actualizar', (req, res) => {
    res.render('actualizar.html')
})
router.post('/actualizar', (req, res) => {
    datos = req.body
    id = datos.id
    nombre = datos.nombre
    correo = datos.correo
    contraseña = datos.contraseña
    database.update(nombre, correo, contraseña, id)
    res.redirect('/')
})
router.get('/lista', (req, res) => {
    con = database.conexion
    con.query('Select * from usuarios ', (error, results, fields) => {
        if (error) throw error;
        res.render('lista.html', { lista: results })

    });
})
module.exports = router;