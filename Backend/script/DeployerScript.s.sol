// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.10;

import "forge-std/Script.sol";
import "../src/PigeonFactory.sol";
import "../src/IPool.sol";
import "../src/ISwapRouter.sol";
import "./IPigeonVault.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
contract Deploy is Script {

    function run() public {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        uint256 userPrivateKey = vm.envUint("PRIVATE_KEY_USER");

        vm.startBroadcast(deployerPrivateKey);
        PigeonFactory pidgeonFactory = new PigeonFactory();

        vm.stopBroadcast();
        vm.startBroadcast(userPrivateKey);

        IPigeonVault pigeonVault = IPigeonVault(pidgeonFactory.createVault());
        IERC20(0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889).transfer(address(pigeonVault), 0.01 ether);

     /*   
        
                    Manual Creation of rules & Execution

        IPigeonVault pigeonVault = IPigeonVault(0x26957cb1ab95a3E13E341e7d4ebF2304089fd642);

        address[] memory pathAddresses = new address[](2);
        pathAddresses[0] = address(0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889);
        pathAddresses[1] = address(0xE097d6B3100777DC31B34dC2c58fB524C2e76921);

        IPigeonVault.Rule memory rule1;
        IPigeonVault.Rule memory rule2;
        IPigeonVault.Rule memory rule3;
        rule1 = IPigeonVault.Rule(0.01 ether, 1800 ether, true, block.timestamp, 10, 0, 0, pathAddresses, uint8(PigeonVault.Exchange.Quickswap), uint8(PigeonVault.Action.exchange), true);
        rule2 = IPigeonVault.Rule(0.01 ether, 1800 ether, true, block.timestamp+86400, 10, 0, 0, pathAddresses, uint8(PigeonVault.Exchange.Quickswap), uint8(PigeonVault.Action.exchange), true);
        rule3 = IPigeonVault.Rule(0.001 ether, 1800 ether, false, block.timestamp-1, 1, 0, 0, pathAddresses, uint8(PigeonVault.Exchange.Quickswap), uint8(PigeonVault.Action.exchange), true);
        pigeonVault.createRule(rule1);
        pigeonVault.createRule(rule2);
        pigeonVault.createRule(rule3);*/

       // vm.stopBroadcast();
       // vm.startBroadcast(deployerPrivateKey);
       
        //pigeonVault.execRule(2);

    }
}