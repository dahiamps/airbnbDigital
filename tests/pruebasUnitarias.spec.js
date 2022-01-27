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

let server;
beforeAll(function () {
    server = require('../index').app;
});
describe('Resultados pruebas unitarias', () => {

    describe('Post /registro', () => {

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
    describe('Post /login', () => {

        test('deberia responder con codigo 200 si los datos de sesion son correctos', async () => {
            const response = await request(server).post("/api/usuario/login").send({
                usuario: "dahiamps",
                contraseña: "octubre27"
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
                usuario: "",
                contraseña: ""



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

    describe('Casas', () => {
        describe('Post /registro ', () => {

            test('deberia responder con codigo 200 al crear registro de la casa', async () => {
                const response = await request(server).post("/api/casa/registro").send({
                    nombreCasa: "Casa Prueba",
                    disponibilidad: "2022-01-19",
                    disponibilidad2: "2023-01-20",
                    telefono: "2658888",
                    pais: "Colombia",
                    ciudad: "Medellin",
                    direccion: "Cll Prueba",
                    imagen: "http://localhost:3500/images/9accbe7cb5bbc803aab497a29574e3a5.jpeg",
                    idpropietario: "1",
                })
                // console.log(response);
                expect(response.statusCode).toBe(200);
            })

            test('deberia responder con codigo 404 al no enviar dato de nombreCasa', async () => {
                const response = await request(server).post("/api/casa/registro").send({
                    nombreCasa: "",
                    disponibilidad: "2022-01-19",
                    disponibilidad2: "2023-01-20",
                    telefono: "2658888",
                    pais: "Colombia",
                    ciudad: "Medellin",
                    direccion: "Cll Prueba",
                    imagen: "http://localhost:3500/images/9accbe7cb5bbc803aab497a29574e3a5.jpeg",
                    idpropietario: "1",
                })
                // console.log(response);
                expect(response.statusCode).toBe(404);
            })

            test('deberia responder con codigo 404 al no enviar dato de disponibilidad inicial', async () => {
                const response = await request(server).post("/api/casa/registro").send({
                    nombreCasa: "Casa Prueba",
                    disponibilidad: "",
                    disponibilidad2: "2023-01-20",
                    telefono: "2658888",
                    pais: "Colombia",
                    ciudad: "Medellin",
                    direccion: "Cll Prueba",
                    imagen: "http://localhost:3500/images/9accbe7cb5bbc803aab497a29574e3a5.jpeg",
                    idpropietario: "1",
                })
                // console.log(response);
                expect(response.statusCode).toBe(404);
            })

            test('deberia responder con codigo 404 al no enviar dato de disponibilidad final', async () => {
                const response = await request(server).post("/api/casa/registro").send({
                    nombreCasa: "Casa Prueba",
                    disponibilidad: "2022-01-19",
                    disponibilidad2: "",
                    telefono: "2658888",
                    pais: "Colombia",
                    ciudad: "Medellin",
                    direccion: "Cll Prueba",
                    imagen: "http://localhost:3500/images/9accbe7cb5bbc803aab497a29574e3a5.jpeg",
                    idpropietario: "1",
                })
                // console.log(response);
                expect(response.statusCode).toBe(404);
            })

            test('deberia responder con codigo 404 al no enviar dato de telefono', async () => {
                const response = await request(server).post("/api/casa/registro").send({
                    nombreCasa: "Casa Prueba",
                    disponibilidad: "2022-01-19",
                    disponibilidad2: "2023-01-20",
                    telefono: "",
                    pais: "Colombia",
                    ciudad: "Medellin",
                    direccion: "Cll Prueba",
                    imagen: "http://localhost:3500/images/9accbe7cb5bbc803aab497a29574e3a5.jpeg",
                    idpropietario: "1",
                })
                // console.log(response);
                expect(response.statusCode).toBe(404);
            })

            test('deberia responder con codigo 404 al no enviar dato de pais', async () => {
                const response = await request(server).post("/api/casa/registro").send({
                    nombreCasa: "Casa Prueba",
                    disponibilidad: "2022-01-19",
                    disponibilidad2: "2023-01-20",
                    telefono: "2658888",
                    pais: "",
                    ciudad: "Medellin",
                    direccion: "Cll Prueba",
                    imagen: "http://localhost:3500/images/9accbe7cb5bbc803aab497a29574e3a5.jpeg",
                    idpropietario: "1",
                })
                // console.log(response);
                expect(response.statusCode).toBe(404);
            })

            test('deberia responder con codigo 404 al no enviar dato de ciudad', async () => {
                const response = await request(server).post("/api/casa/registro").send({
                    nombreCasa: "Casa Prueba",
                    disponibilidad: "2022-01-19",
                    disponibilidad2: "2023-01-20",
                    telefono: "2658888",
                    pais: "Colombia",
                    ciudad: "",
                    direccion: "Cll Prueba",
                    imagen: "http://localhost:3500/images/9accbe7cb5bbc803aab497a29574e3a5.jpeg",
                    idpropietario: "1",
                })
                // console.log(response);
                expect(response.statusCode).toBe(404);
            })

            test('deberia responder con codigo 404 al no enviar dato de direccion', async () => {
                const response = await request(server).post("/api/casa/registro").send({
                    nombreCasa: "Casa Prueba",
                    disponibilidad: "2022-01-19",
                    disponibilidad2: "2023-01-20",
                    telefono: "2658888",
                    pais: "Colombia",
                    ciudad: "Medellin",
                    direccion: "",
                    imagen: "http://localhost:3500/images/9accbe7cb5bbc803aab497a29574e3a5.jpeg",
                    idpropietario: "1",
                })
                // console.log(response);
                expect(response.statusCode).toBe(404);
            })

            test('deberia responder con codigo 404 al no enviar url de donde se almacena la imagen de la casa', async () => {
                const response = await request(server).post("/api/casa/registro").send({
                    nombreCasa: "Casa Prueba",
                    disponibilidad: "2022-01-19",
                    disponibilidad2: "2023-01-20",
                    telefono: "2658888",
                    pais: "Colombia",
                    ciudad: "Medellin",
                    direccion: "Cll Prueba",
                    imagen: "",
                    idpropietario: "1",
                })
                // console.log(response);
                expect(response.statusCode).toBe(404);
            })

            test('deberia responder con codigo 404 al no enviar dato de id propietario', async () => {
                const response = await request(server).post("/api/casa/registro").send({
                    nombreCasa: "Casa Prueba",
                    disponibilidad: "2022-01-19",
                    disponibilidad2: "2023-01-20",
                    telefono: "2658888",
                    pais: "Colombia",
                    ciudad: "Medellin",
                    direccion: "Cll Prueba",
                    imagen: "http://localhost:3500/images/9accbe7cb5bbc803aab497a29574e3a5.jpeg",
                    idpropietario: "",
                })
                // console.log(response);
                expect(response.statusCode).toBe(404);
            })

            test('deberia responder con codigo 404 al no enviar ningun dato ', async () => {
                const response = await request(server).post("/api/casa/registro").send()
                // console.log(response);
                expect(response.statusCode).toBe(404);
            })
        })
        describe('Get /casas', () => {

            test('deberia responder con codigo 200 al traer la info de todas las casas registradas ', async () => {
                const response = await request(server).get("/api/casa/casas")
                // console.log(response);
                expect(response.statusCode).toBe(200);
            })

            test('deberia responder con codigo 200 si al buscar una sola casa por id', async () => {
                const response = await request(server).get("/api/casa/casas/1")
                // console.log(response);
                expect(response.statusCode).toBe(200);
            })
        })    
    })
    describe('Reservas', () => {
        
    })
    describe('Calificaciones', () => {

    })
    

})