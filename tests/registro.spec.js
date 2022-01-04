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
    
    test('deberia responder con codigo 404 al no enviar datos ', async () => {
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