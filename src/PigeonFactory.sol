// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.10;
import "./PigeonVault.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract PigeonFactory is Ownable{
    event vaultCreated();
    uint256 vaultAmount = 0;

    mapping(address => address) public allVaults;

    /*  bytes memory bytecode = type(UniswapV2Pair).creationCode;
        bytes32 salt = keccak256(abi.encodePacked(token0, token1));
        assembly {
            pair := create2(0, add(bytecode, 32), mload(bytecode), salt)
        }*/

    function createVault() external  {
        new PigeonVault(msg.sender, owner());
        vaultAmount++;
        emit vaultCreated();
    }

    function getVault(address user) external view returns(address){
        return allVaults[user];
    }


}
