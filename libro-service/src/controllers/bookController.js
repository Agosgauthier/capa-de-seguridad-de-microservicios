const getBooks = (req, res) => {

    res.json([
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

};

module.exports = {
    getBooks
};