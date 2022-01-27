// const app = require('../routes/api/usuarios');
const request = require('supertest');
const express = require('express');

// describe('GET /prueba', () => {

//     let server;
//     beforeAll(function () {
//         server = require('../index').app;
//     });
//     // afterAll(function () {
//     //     server.close();
//     // });

//     test('should respond with a 200 status code', async () => {
//         const response = await request(server).get("/api/usuario/ping").send()
//         // console.log(response);
//         expect(response.statusCode).toBe(200);
//     })
// })


describe('Post /registro', () => {

    let server;
    beforeAll(function () {
        server = require('../index').app;
    });
    

    test('deberia responder con codigo 200 al ser creado', async () => {
        const response = await request(server).post("/api/usuario/registro").send({
            ciudad: "medellin",
            contraseña: "12345",
            direccion: "cll 1",
            nombre: "Prueba",
            pais: "Colombia",
            usuario: "pruebita"            
            
        })
        // console.log(response);
        expect(response.statusCode).toBe(200);
    })
    
    test('deberia responder con codigo 404 al no enviar datos de la ciudad', async () => {
        const response = await request(server).post("/api/usuario/registro").send({
            ciudad: "",
            contraseña: "12345",
            direccion: "cll 1",
            nombre: "Prueba",
            pais: "Colombia",
            usuario: "pruebita"

        })
        // console.log(response);
        expect(response.statusCode).toBe(404);
    })
    test('deberia responder con codigo 404 al no enviar datos de la contraseña', async () => {
        const response = await request(server).post("/api/usuario/registro").send({
            ciudad: "medellin",
            contraseña: "",
            direccion: "cll 1",
            nombre: "Prueba",
            pais: "Colombia",
            usuario: "pruebita"

        })
        // console.log(response);
        expect(response.statusCode).toBe(404);
    })


    //     check('direccion', 'LA direccion es obligatoria').not().isEmpty(),
    test('deberia responder con codigo 404 al no enviar datos de la ciudad', async () => {
        const response = await request(server).post("/api/usuario/registro").send({
            ciudad: "",
            contraseña: "12345",
            direccion: "cll 1",
            nombre: "Prueba",
            pais: "Colombia",
            usuario: "pruebita"

        })
        // console.log(response);
        expect(response.statusCode).toBe(404);
    })
    //     check('nombre', 'El nombre es obligatori').not().isEmpty(),
    test('deberia responder con codigo 404 al no enviar datos del nombre', async () => {
        const response = await request(server).post("/api/usuario/registro").send({
            ciudad: "medellin",
            contraseña: "",
            direccion: "cll 1",
            nombre: "Prueba",
            pais: "Colombia",
            usuario: "pruebita"

        })
        // console.log(response);
        expect(response.statusCode).toBe(404);
    })
    //     check('pais', 'El pais es obligatorio').not().isEmpty(),
    test('deberia responder con codigo 404 al no enviar datos del pais', async () => {
        const response = await request(server).post("/api/usuario/registro").send({
            ciudad: "medellin",
            contraseña: "",
            direccion: "cll 1",
            nombre: "Prueba",
            pais: "",
            usuario: "pruebita"
        })
        // console.log(response);
        expect(response.statusCode).toBe(404);
    })
    //     check('usuario', 'El usuario es obligatorio').not().isEmpty(),
    test('deberia responder con codigo 404 al no enviar datos de usuario', async () => {
        const response = await request(server).post("/api/usuario/registro").send({
            ciudad: "medellin",
            contraseña: "",
            direccion: "cll 1",
            nombre: "Prueba",
            pais: "Colombia",
            usuario: ""

        })
        // console.log(response);
        expect(response.statusCode).toBe(404);
    })
    
    test('deberia responder con codigo 404 al no enviar ningun dato ', async () => {
        const response = await request(server).post("/api/usuario/registro").send()
        // console.log(response);
        expect(response.statusCode).toBe(404);
    })
})

// describe('GET /ping', function () {
    
//     test('responds with json', function (done) {
//         request(app)
//             .get('/ping')
//             // .set('Accept', 'application/json')
//             // .expect('Content-Type', /json/)
//             .expect(200, done);
//     });
// })