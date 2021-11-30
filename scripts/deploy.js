const deploy = async () => {
  const [deployer] = await ethers.getSigners();

  console.log(`Deploying contract with the account: ${deployer.address}`);

  const CryptoGeeks = await ethers.getContractFactory("CryptoGeeks");
  const deployed = await CryptoGeeks.deploy();

  console.log(`CryptoGeeks has been deployed at: ${deployed.address}`);
};

deploy()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
