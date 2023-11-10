const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));


// app.get('/', (req, res) => {

//     axios.get('https://apiv2.bitcoinaverage.com/indices/global/ticker/all?crypto=BTC&fiat=USD,EUR')
//     .then(response => {
//         console.log(res);

//         res.send(res.data.status)
//     })
//     .catch(error => {
//         console.log(error);
//     });
    
// });

app.get('/', (req, res) => {

    axios.get('https://apiv2.bitcoinaverage.com/indices/global/ticker/all?crypto=BTC&fiat=USD,EUR')

        .then(function (response) {
            // handle success
            let data = JSON.parse(body);
            let price = data.last;

            console.log(price);

            
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });

})

app.post('/', (req, res) => {
    console.log(req.body.crypto);
})

app.listen(3000, function() {
    console.log('listening on port 3000')
});

 