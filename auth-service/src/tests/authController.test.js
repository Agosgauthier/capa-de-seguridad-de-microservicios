jest.mock("../db", () => ({
    query: jest.fn()
}));

const { home } = require("../controllers/authController");

describe("Auth Controller", () => {

    test("Debe responder que el servidor está funcionando", () => {

        const req = {};

        const res = {
            json: jest.fn()
        };

        home(req, res);

        expect(res.json).toHaveBeenCalledWith({
            mensaje: "Servidor funcionando"
        });

    });

});