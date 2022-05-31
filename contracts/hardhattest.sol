// SPDX-License-Identifier: MIT
pragma solidity 0.6.0;

contract hardhattest {
    uint256 public value;

    constructor() public {
        value = 0;
    }

    function setValue(uint _value) public {
        value = _value;
    }

    function increase() public {
        value++;
    }

    function desrease() public {
        value--;
    }
}