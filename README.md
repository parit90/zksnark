**Zksnark using Zokrates**

*Background:*
ZoKrates is a toolbox for zkSNARKs on Ethereum. It helps you use verifiable computation in your DApp, from the specification of your program in a high level language to generating proofs of computation to verifying those proofs in Solidity.

Ethereum runs computations on all nodes of the network, resulting in high costs, limits in complexity, and low privacy. zkSNARKs have been enabling to only verify computations on-chain for a fraction of the cost of running them, but are hard to grasp and work with.

ZoKrates bridges this gap. It helps you create off-chain programs and link them to the Ethereum blockchain, expanding the possibilities for your DApp.


We can also install plugins inside online REMIX ide to run our snark program




About this Demo
For this demo purposes I am using two methods




****************

Method 1:

install zokrates using curl
> $ curl -LSfs get.zokrat.es | sh

we can export the environmanet variable to access zokrates cli commands in ~/.zshrc file
> export PATH=$PATH:$HOME/.zokrates/bin 

$ `git clone` this repo

Now we can write our snark programs. in this repo, there is a `program.zok` file which contains the source code to verify. 
There are list of resources available for writing a snark program for a given QAP.

resource: https://github.com/Zokrates/ZoKrates/blob/develop/zokrates_cli/examples/sub.zok
<br />
resource: https://zokrates.github.io/language/variables.html

for a given QAP in the problem statement `a^3 * 2b - 5`, `program.zok` file contains the snark program, which needs to get compile using below command. Please note that program.zok file contains the flatten code

> $ `zokrates compile -i program.zok`
compile will output three files
abi.json
out.r1cs
out file

here abi.json file is application binary interface which is similar when we compile a solidity source code file.
here r1cs file is rank 1 constraint system


> $ `zokrates setup`
this will setup proving.key and verification.key
here verification.key is generated by g16(g16 | gm17 | marlin) scheme, on bn128 elliptic curve cryptography (bn128 | bls12_381 | bls12_377 | bw6_761) and contains alpha, beta, gamma keys

> $ `zokrates compute-witness -a 1 2`
it will output out.wtns file and witness file


> $ `zokrates generate-proof`
it will produce proof.json file

> $ `zokrates export-verifier`
it will produce a solidity file name verifier.sol which we can use it in our solidity source code

> $ `zokrates verify`


****************


Method 2: 
<br />
<br />
We can generate and verify proof for a given snark code using 'zokrates-js' library.
'zokrates-js' comes as an npm package and we can install it as a dependency and use it according to available command of zokrates 

> $ git clone the repository
> run `npm install` command

we can initialize our source code which is zok code in source variable as string.
Run the index.js file with following cmd
> $ `node index.js`