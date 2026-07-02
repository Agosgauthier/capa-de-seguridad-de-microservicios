const { getBooks } = require("../controllers/bookController");

describe("Book Controller", () => {

    test("Debe devolver la lista de libros", () => {

        const req = {};

        const res = {
            json: jest.fn()
        };

        getBooks(req, res);

        expect(res.json).toHaveBeenCalledWith([
            {
                id: 1,
                titulo: "El Principito"
            },
            {
                id: 2,
                titulo: "Don Quijote"
            },
            {
                id: 3,
                titulo: "Cien Años de Soledad"
            }
        ]);

    });

});