// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract SimpleStorage {
  string public hello;
  function set(string memory _hello) public {
    hello = _hello;
  }

  function get() view public returns (string memory) {
    return hello;
  }

  constructor() {
    hello = "hello!";
  }
}
