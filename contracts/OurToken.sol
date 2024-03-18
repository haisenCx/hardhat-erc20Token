//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract OurToken is ERC20 {
    //initalsupply = 1000000  * 10 ** 18
    constructor(uint initalsupply) ERC20("OurToken", "OTK") {
        _mint(msg.sender, initalsupply);
    }
}
