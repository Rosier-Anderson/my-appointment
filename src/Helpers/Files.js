import React from "react";
let File = require.context(
  "../assets/assets_frontend",
  false,
  /\.(png|jpe?g|svg)$/
);
const Images = (str) => File(str); 
export default Images;
console.log(Images("./doc1.png"));
