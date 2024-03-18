const { ethers } = require("hardhat");
const { network } = require("hardhat");

var INITIAL_SUPPLY = "1000000";
describe("OurToken", function () {

    it("next", async function () {
        const OurToken = await ethers.getContractFactory("OurToken");
        const instance = await OurToken.deploy(INITIAL_SUPPLY);

        //await instance.deployed();
        //console.log(instance);

        console.log("Test deployed to:", await instance.getAddress());

    }
    );
}
);