const { getUsers } = require("../controllers/userController");

describe("User Controller", () => {

    test("Debe devolver la lista de usuarios", () => {

        const req = {};

        const res = {
            json: jest.fn()
        };

        getUsers(req, res);

        expect(res.json).toHaveBeenCalledWith([
            {
                id: 1,
                nombre: "Juan"
            },
            {
                id: 2,
                nombre: "Ana"
            }
        ]);

    });

});