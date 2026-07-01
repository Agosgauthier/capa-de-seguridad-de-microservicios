const getUsers = (req, res) => {

    res.json([
        {
            id: 1,
            nombre: "Juan"
        },
        {
            id: 2,
            nombre: "Ana"
        }
    ]);

};

module.exports = {
    getUsers
};