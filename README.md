# Capa de Seguridad de Microservicios con JWT

## Descripción

Este proyecto implementa una capa básica de seguridad entre microservicios utilizando JSON Web Tokens (JWT).

El objetivo es evitar que los microservicios puedan ser consumidos libremente, obligando a los clientes a autenticarse previamente y enviar un token válido en cada solicitud.

## Arquitectura

El sistema está compuesto por tres microservicios:

### Auth Service (Puerto 3001)

Responsable de:

* Crear usuarios.
* Validar credenciales.
* Generar tokens JWT.

Endpoints:

* POST /create-user
* POST /login

### Usuario Service (Puerto 3002)

Responsable de:

* Exponer información de usuarios.
* Validar JWT antes de responder.

Endpoint protegido:

* GET /users

### Libro Service (Puerto 3003)

Responsable de:

* Exponer información de libros.
* Validar JWT antes de responder.

Endpoint protegido:

* GET /books

## Flujo de autenticación

1. El cliente crea un usuario mediante `/create-user`.
2. El cliente inicia sesión mediante `/login`.
3. Auth Service genera un JWT.
4. El cliente recibe el token.
5. El token se envía en el header Authorization.
6. Los microservicios protegidos validan el JWT.
7. Si el token es válido, la solicitud es procesada.
8. Si el token es inválido o inexistente, se devuelve HTTP 401 Unauthorized.

## Tecnologías utilizadas

* Node.js
* Express
* JSON Web Token (JWT)
* Cors

## Instalación

### Auth Service

```bash
cd auth-service
npm install
npm start
```

### Usuario Service

```bash
cd usuario-service
npm install
npm start
```

### Libro Service

```bash
cd libro-service
npm install
npm start
```

## Endpoints

### Crear usuario

POST /create-user

Body:

```json
{
  "username": "agostina",
  "password": "123456"
}
```

### Login

POST /login

Body:

```json
{
  "username": "agostina",
  "password": "123456"
}
```

Respuesta:

```json
{
  "token": "JWT_TOKEN"
}
```

### Obtener usuarios (protegido)

GET /users

Header:

```text
Authorization: Bearer JWT_TOKEN
```

### Obtener libros (protegido)

GET /books

Header:

```text
Authorization: Bearer JWT_TOKEN
```

## Validaciones implementadas

### Sin token

Respuesta:

```json
{
  "message": "Token requerido"
}
```

HTTP Status:

```text
401 Unauthorized
```

### Token inválido

Respuesta:

```json
{
  "message": "Token inválido"
}
```

HTTP Status:

```text
401 Unauthorized
```

### Token válido

Respuesta:

```text
200 OK
```

## Evidencias

Las capturas de funcionamiento se encuentran en la carpeta:

```text
evidencias/
```

Incluyen:

* Creación de usuario.
* Inicio de sesión.
* Token JWT generado.
* Decodificación del token en jwt.io.
* Acceso denegado sin token.
* Acceso denegado con token inválido.
* Acceso exitoso a usuarios.
* Acceso exitoso a libros.

```
```
