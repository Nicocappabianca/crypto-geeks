const deploy = async () => {
  const [deployer] = await ethers.getSigners();
  const maxSupply = 10000;

  console.log(`Deploying contract with the account: ${deployer.address}`);

  const CryptoGeeks = await ethers.getContractFactory("CryptoGeeks");
  const deployed = await CryptoGeeks.deploy(maxSupply);

  console.log(`CryptoGeeks has been deployed at: ${deployed.address}`);
};

deploy()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
