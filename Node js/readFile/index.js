const fs = require("fs");

// Este método accede a un fichero para su lectura y nos entrega el contenido en forma de buffer o en forma de cadena. 

fs.readFile("file1.txt", (err, data) => {

    if (!err) {

        console.log('data: ' + data);

    } else {

        console.log(err);

    }

});