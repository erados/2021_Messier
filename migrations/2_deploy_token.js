const Token17 = artifacts.require("Token17");

const name = "Messier";
const symbol = "Mes";

module.exports = function (deployer) {
  deployer.deploy(Token17, name, symbol);
};
