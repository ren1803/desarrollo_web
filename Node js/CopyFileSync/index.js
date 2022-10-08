const fs = require("fs");

// REALIZA UNA COPIA DE MI ARCHIVO DE TEXTO FILE.1

fs.copyFileSync("file1.txt", "file2.txt");

fs.copyFileSync("file1.txt", "file3.txt");