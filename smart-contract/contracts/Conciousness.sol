// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

interface IPremium {
    function whitelistedAddresses(address) external view returns (bool);
}

contract Consciousness {
    address payable owner;
    uint256 constant ownerPercentage = 80;
    uint256 constant creatorPercentage = 20;
    uint256 contentId;
    uint256 constant tokenAmount = 0.001 ether;
    address public premiumContract;

    constructor(address _premium) {
        owner = payable(msg.sender);
        premiumContract = _premium;
    }

    /// @dev Holds every single content details
    struct Content {
        address payable contentOwner;
        uint256 id;
        bool accepted;
        string imageString;
        string title;
        string contentDescription;
        string category;
    }

    mapping(address => mapping(uint256 => bool)) contentAccepted;
    mapping(address => mapping(uint256 => Content)) contentAproval;
    mapping(address => Content) contentMp;
    Content[] contents;

    /**
     * @dev Propose content to be voted on by the premium members.
     * @param _image Image for the content.
     * @param _title Title of the content.
     * @param _contentDesc Description of the content.
     * @param _category Category of the content.
     */
    function proposeContent(
        string memory _image,
        string memory _title,
        string memory _contentDesc,
        string memory _category
    ) external {
        Content storage proposed = contentMp[msg.sender];
        proposed.contentOwner = payable(msg.sender);
        proposed.id = contentId;
        proposed.imageString = _image;
        proposed.title = _title;
        proposed.contentDescription = _contentDesc;
        proposed.category = _category;
        contentId++;
        contents.push(proposed);
    }

    /**
     * @dev Vote for a specific content proposed by its owner.
     * @param _contentOwner Owner of the content.
     * @param _contentId ID of the content.
     */
    function voteContent(address _contentOwner, uint256 _contentId) external {
        IPremium premium = IPremium(premiumContract);
        require(
            premium.whitelistedAddresses(msg.sender),
            "Sender is not whitelisted"
        );
        Content storage content = contentAproval[_contentOwner][_contentId];
        content.accepted = true;
    }

    function checkIfApproved(
        address _contentOwner,
        uint256 _contentId
    ) external view returns (bool) {
        return contentAccepted[_contentOwner][_contentId];
    }

    function getApprovedContent() external view returns (Content[] memory) {
        Content[] memory approvedContent;
        uint256 approvedCount = 0;

        for (uint256 i = 0; i < contents.length; i++) {
            if (contents[i].accepted) {
                approvedCount++;
            }
        }

        approvedContent = new Content[](approvedCount);
        approvedCount = 0;

        for (uint256 i = 0; i < contents.length; i++) {
            if (contents[i].accepted) {
                approvedContent[approvedCount] = contents[i];
                approvedCount++;
            }
        }

        return approvedContent;
    }
}
