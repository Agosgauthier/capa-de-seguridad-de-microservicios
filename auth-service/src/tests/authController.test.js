const jwt = require("jsonwebtoken");

const {
    generateToken,
    verifyToken,
    decodeToken,
    SECRET
} = require("../jwt");

describe("JwtService", () => {

    const user = {
        id: 1,
        email: "test@mail.com",
        role: "USER"
    };

    test("Debe generar un token correctamente", () => {

        const token = generateToken(user);

        expect(token).toBeDefined();
        expect(typeof token).toBe("string");

    });

    test("El token generado debe tener el email del usuario", () => {

        const token = generateToken(user);

        const payload = decodeToken(token);

        expect(payload.email).toBe(user.email);

    });

    test("El token generado debe tener el id del usuario", () => {

        const token = generateToken(user);

        const payload = decodeToken(token);

        expect(payload.id).toBe(user.id);

    });

    test("El token debe tener fecha de expiración", () => {

        const token = generateToken(user);

        const payload = decodeToken(token);

        expect(payload.exp).toBeDefined();

    });

    test("Un token válido debe verificarse correctamente", () => {

        const token = generateToken(user);

        const payload = verifyToken(token);

        expect(payload.email).toBe(user.email);

    });

    test("Un token modificado debe ser rechazado", () => {

        const token = generateToken(user) + "abc";

        expect(() => verifyToken(token)).toThrow();

    });

    test("Un token firmado con otra clave debe ser rechazado", () => {

        const token = jwt.sign(user, "otra_clave");

        expect(() => verifyToken(token)).toThrow();

    });

    test("Debe poder decodificar un token", () => {

        const token = generateToken(user);

        const payload = decodeToken(token);

        expect(payload.role).toBe("USER");

    });

    test("decodeToken debe devolver null si el token es inválido", () => {

        const payload = decodeToken("esto_no_es_un_token");

        expect(payload).toBeNull();

    });

    test("Un token vencido debe ser rechazado", () => {

    const token = jwt.sign(
        user,
        SECRET,
        {
            expiresIn: -1
        }
    );

    expect(() => verifyToken(token)).toThrow();
    });

});