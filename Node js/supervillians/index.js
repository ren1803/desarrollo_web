var sh = require("superheroes");

// TE DA NOMBRES DE UN SUPERVILLANO FRANDOM, Y YA NO ES NECESARIO INTALLAR EL DE SUPERHEROES, 
// YA QUE YA LO INSTALASTE.

var sv = require("supervillains");

var mySHname = sh.random();

var mySVname = sv.random();

console.log("- Look it is " + mySVname + " ready to do its evil deeds!\n- Who could save us!\n- Fear not! Here is " + mySHname + " to the rescue!");