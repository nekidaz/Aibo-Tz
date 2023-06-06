const fs = require('fs');

const getIndexPage = (req, res) => {
    const data = fs.readFileSync('data.json', 'utf8');
    const jsonData = JSON.parse(data);
    res.render('index', { 'data' : jsonData });
};


const postData = (req, res) => {
    const body = req.body;

    let dataArray = [];

    try {
        dataArray = JSON.parse(fs.readFileSync('data.json', 'utf8'));
    } catch (err) {
        res.status(500).send('Error parsing data');
        return;
    }

    dataArray.push(body);

    fs.writeFile('data.json', JSON.stringify(dataArray), (err) => {
        if (err) {
            res.status(500).send('Error saving data');
            return;
        }

        res.redirect('/');
    });
};

module.exports = { getIndexPage, postData };

