const { initialize } = require('zokrates-js')


initialize().then((zokratesProvider) => {
    const source = "def main(private field a, private field b) -> field {field x = a*a*a; field y = b+b; field z = x * y; return z-5; }";

    // compilation
    const artifacts = zokratesProvider.compile(source);

    // computation
    const { witness, output } = zokratesProvider.computeWitness(artifacts, ["1","2"]);

    // run setup
    const keypair = zokratesProvider.setup(artifacts.program);

    // generate proof
    const proof = zokratesProvider.generateProof(artifacts.program, witness, keypair.pk);

    // export solidity verifier
    const verifier = zokratesProvider.exportSolidityVerifier(keypair.vk);
    
    // or verify off-chain
    const isVerified = zokratesProvider.verify(keypair.vk, proof);
	console.log("varified = ", isVerified)
}).catch(err =>{console.log(err)})