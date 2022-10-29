const fs = require('fs/promises');

//FileReader middleware to read file before passing to request handler.
const fileReader = async (req, res, next) => {
    try {
        const data = await fs.readFile('TestData.json');
        const parsedData = JSON.parse(data);
        req.data = parsedData;
        next();
    } catch (error) {
        return next(error);
    }
};

module.exports = fileReader;