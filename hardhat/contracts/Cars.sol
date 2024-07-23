// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

// Import the ERC721 standard interface and implementation from OpenZeppelin
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// Define the Cars contract
contract Cars is ERC721 {
    // Mapping from token ID to car owner
    mapping(uint256 => address) private _carOwners;

    // Mapping from token ID to car information
    mapping(uint256 => string) private _carInfo;

    // Counter for generating unique token IDs
    uint256 private _tokenIdCounter;

    uint256[] private carIDs;

    // Event to emit when a car is minted
    event CarMinted(uint256 tokenId, address owner, string carInfo);

    // Constructor to initialize the ERC721 contract with a name and symbol
    constructor() ERC721("Cars", "CAR") {
        _tokenIdCounter = 1; // Start token IDs from 1
    }

    // Function to mint a new car NFT
    function mintCar(address to, string memory carInfo) external {
        uint256 tokenId = _tokenIdCounter;
        _mint(to, tokenId);
        _carInfo[tokenId] = carInfo;
        _carOwners[tokenId] = msg.sender;
        carIDs.push(tokenId);
        _tokenIdCounter++;

        emit CarMinted(tokenId, msg.sender, carInfo);
    }

    // Function to get car information by token ID
    function getCarInfo(uint256 tokenId) external view returns (string memory) {
        require(_exists(tokenId), "Car does not exist");
        return _carInfo[tokenId];
    }

    function getOwnerInfo(uint256 tokenId) external view returns (address) {
        require(_exists(tokenId), "Car does not exist");
        return _carOwners[tokenId];
    }

    function getOwnerCars() external view returns (uint256[] memory) {
        uint256 ownedCount = 0;
        for (uint256 i = 0; i < carIDs.length; i++) {
            if (_carOwners[carIDs[i]] == msg.sender) {
                ownedCount++;
            }
        }

        uint256[] memory allOwnerCars = new uint256[](ownedCount);

        // Second pass: populate the array
        uint256 index = 0;
        for (uint256 i = 0; i < carIDs.length; i++) {
            if (_carOwners[carIDs[i]] == msg.sender) {
                allOwnerCars[index] = carIDs[i];
                index++;
            }
        }

        return allOwnerCars;
    }

    function transferCarFrom(address from, address to, uint256 tokenId) external {
        require(_isOwner(tokenId), "Owns the car");
        _carOwners[tokenId] = to;
    }

    function _isOwner(uint256 tokenId) internal view returns (bool) {
        return (_carOwners[tokenId] == msg.sender);
    }

    // Override the _beforeTokenTransfer function to ensure ownership is tracked
    /*function _beforeTokenTransfer(address from, address to, uint256 tokenId) internal override {
        super._beforeTokenTransfer(from, to, tokenId);
        if (from != address(0)) {
            _carOwners[tokenId] = to;
        }
    }*/

    function _exists(uint256 tokenId) internal view returns (bool) {
        return (bytes(_carInfo[tokenId]).length > 0 && _carOwners[tokenId] != address(0));
    }


    // Override the _burn function to clear car information when a token is burned
    /*function _burn(uint256 tokenId) internal override {
        super._burn(tokenId);
        delete _carInfo[tokenId];
        delete _carOwners[tokenId];
    }*/
}
