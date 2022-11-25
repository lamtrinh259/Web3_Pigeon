// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.7.0 <0.9.0;
pragma experimental ABIEncoderV2;

interface IPigeonVault {
        struct Rule {
        uint256 amount;
        uint256 btcPriceOffchain;
        bool needsToBeLower;
        uint256 excTime;
        uint256 maxExecution;
        uint256 currentExecution;
        uint256 timeinterval;
        address[] pathOrTokenAndReceipient;
        uint8 exchange;
        uint8 action;
        bool active;
    }
    event DepositedETH(uint256 amount);
    event OwnershipTransferred(
        address indexed previousOwner,
        address indexed newOwner
    );
    event RuleCreated(uint256 ruleID);
    event RuleDeleted(uint256 ruleID);
    event RuleExecuted(
        uint256 ruleID,
        uint256 currentExection,
        address executer
    );
    event Withdraw(
        uint256 amount,
        address token,
        uint256 tokenID,
        bool isERC20
    );

    function createRule(Rule memory rule) external payable;

    function deleteRule(uint256 ruleID) external;

    function execRule(uint256 ruleID) external payable;

    function onERC1155BatchReceived(
        address,
        address,
        uint256[] memory,
        uint256[] memory,
        bytes memory
    ) external returns (bytes4);

    function onERC1155Received(
        address,
        address,
        uint256,
        uint256,
        bytes memory
    ) external returns (bytes4);

    function onERC721Received(
        address,
        address,
        uint256,
        bytes memory
    ) external returns (bytes4);

    function owner() external view returns (address);

    function renounceOwnership() external;

    function supportsInterface(bytes4 interfaceId) external view returns (bool);

    function transferOwnership(address newOwner) external;

    function withdrawETH(uint256 amount) external;

    function withdrawToken(
        address tokenAddress,
        uint256 amount,
        uint256 tokenID,
        bool isERC20
    ) external;

}

