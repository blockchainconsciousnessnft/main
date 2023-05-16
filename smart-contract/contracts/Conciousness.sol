// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract ConciousNess {
    address payable owner;
    uint256 constant ownerPercentage = 80;
    uint256 constant creatorpercentage = 20;

    struct Content {
        address payable contentOwner;
        bool accepted;
        string title;
        string conetentDescription;
    }

    Content[] contents;
    mapping(uint256 => bool) contentAccepted;

}
