const express = require("express");
import * as ethers from "ethers";
import contractABI from "./ABI/contractABI.json";
require("dotenv").config();

const app = express();
const PORT = 5000 || process.env.PORT;

app.post("/api/v1/mint", (req, res) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  setNFTContract(new Contract(contractAddress, contractABI.abi, signer));
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
