// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Premium is ERC721Enumerable, Ownable {
    using Counters for Counters.Counter;

    string private _baseTokenURI;
    uint8 private _maxWhitelistedAddresses;
    Counters.Counter private _numAddressesWhitelisted;

    mapping(address => bool) private _whitelistedAddresses;

    constructor(
        string memory baseURI,
        uint8 maxWhitelistedAddresses
    ) ERC721("Blockchain Consciousness", "BC") {
        _baseTokenURI = baseURI;
        _maxWhitelistedAddresses = maxWhitelistedAddresses;
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return _baseTokenURI;
    }

    function addAddressToWhitelist() public {
        require(
            !_whitelistedAddresses[msg.sender],
            "Sender has already been whitelisted"
        );
        require(
            totalSupply() < _maxWhitelistedAddresses,
            "More addresses can't be added, limit reached"
        );

        _numAddressesWhitelisted.increment();
        uint256 tokenId = _numAddressesWhitelisted.current();
        _safeMint(msg.sender, tokenId);
        _whitelistedAddresses[msg.sender] = true;
    }

    function isAddressWhitelisted(address addr) public view returns (bool) {
        return _whitelistedAddresses[addr];
    }

    function getMaxWhitelistedAddresses() public view returns (uint8) {
        return _maxWhitelistedAddresses;
    }

    function getNumAddressesWhitelisted() public view returns (uint256) {
        return _numAddressesWhitelisted.current();
    }

    function setBaseURI(string memory baseURI) public onlyOwner {
        _baseTokenURI = baseURI;
    }
}
