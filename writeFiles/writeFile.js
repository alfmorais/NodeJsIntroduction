let {readFile, writeFile} = require("fs");


writeFile("arquivo.txt", "Nossa que magia!", (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Escreveu no arquivo");
    }
});
