const request = require('supertest');
const express = require('express');




describe('Post /login', () => {

    let server;
    beforeAll(function () {
        server = require('../index').app;
    });


    test('deberia responder con codigo 200 si los datos de sesion son correctos', async () => {
        const response = await request(server).post("/api/usuario/login").send({
            usuario: "pruebita",
            contraseña: "12345"



        })
        // console.log(response);
        expect(response.statusCode).toBe(200);
    })

    test('deberia responder con codigo 404 si el usuario es correcto y la contraseña incorrecta', async () => {
        const response = await request(server).post("/api/usuario/login").send({
            usuario: "dahiamps",
            contraseña: "contraseña_mala"



        })
        expect(response.statusCode).toBe(404);
    })


    test('deberia responder con codigo 404 si los datos de sesion no existen en la bd', async () => {
        const response = await request(server).post("/api/usuario/login").send({
            usuario: "data",
            contraseña: "12345"



        })
        // console.log(response);
        expect(response.statusCode).toBe(404);
    })
    test('deberia responder con codigo 404 si los datos de sesion estan vacios', async () => {
        const response = await request(server).post("/api/usuario/login").send({
            usuario: "data",
            contraseña: "12345"



        })
        // console.log(response);
        expect(response.statusCode).toBe(404);
    })


    test('deberia responder con codigo 404 si los datos de sesion son incompletos', async () => {
        const response = await request(server).post("/api/usuario/login").send({
            usuario: "data",
            contraseña: "12345"



        })
        // console.log(response);
        expect(response.statusCode).toBe(404);
    })

})