/*
    Assessment Requirements
    1. Create a variable that can hold a number of NFT's. What type of variable might this be?
    2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
    The metadata values will be passed to the function as parameters. When the NFT is ready, 
    you will store it in the variable you created in step 1
    3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
    4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const nftArray = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, eyeColor, shirtType, bling) {
    try {
        if (!name || !eyeColor || !shirtType || !bling) {
            throw new Error("All metadata fields (name, eyeColor, shirtType, bling) are required.");
        }

        const nft = {
            "name": name,
            "eyeColor": eyeColor,
            "shirtType": shirtType,
            "bling": bling
        };

        nftArray.push(nft);
        console.log("Minted:", name);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    // Check if there are NFTs to display
    if (nftArray.length === 0) {
        console.log("No NFTs to display.");
    } else {
        console.log("\nID\t\tNAME\t\tEYE COLOR\t\tSHIRT TYPE\t\tBLING");
        for (let i = 0; i < nftArray.length; i++) {
            console.log(`${i + 1}\t\t${nftArray[i].name}\t\t${nftArray[i].eyeColor}\t\t\t${nftArray[i].shirtType}\t\t\t${nftArray[i].bling}`);
        }
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nTotal Number of Minted NFTs:", nftArray.length);
}

// call your functions below this line
mintNFT("Alice", "Brown", "Hoodie", "Gold Necklace");
mintNFT("Bobby", "Blue", "T-Shirt", "Silver Bracelet");
mintNFT("Charlie", "Green", "Polo", "Diamond Earrings");
mintNFT("David", "Hazel", "Jacket", "Platinum Watch");
mintNFT("Mikael", "Gray", "Dress", "Ruby Ring");
listNFTs();
getTotalSupply();
