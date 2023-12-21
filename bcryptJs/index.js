const crypto =require("crypto")


// const secret='abcdefg'


// const hash=crypto.createHmac('Sha256',secret).update('hash is creates').digest('hex')



// console.log(hash)
// // output: 1b989d82ceddc28c28258ff7b7a0181af93cb62d27f6a7b1be911e2c42b8d95d



// encryption and decryption
let password="new password"
const cipher=crypto.createCipher('aes192',password);

let encryption=cipher.update('Welcome to use cipher','utf-8','hex')

encryption+=cipher.final('hex')
console.log(encryption)
// 4c2bf61d4220dbe33fe544b6360acd9ef24c9eb61493fb91311b48000d5e2fc2


let dicipher=crypto.createDecipher('aes192',password)
const decryption='4c2bf61d4220dbe33fe544b6360acd9ef24c9eb61493fb91311b48000d5e2fc2'

let decrypt=dicipher.update(decryption,'hex','utf8')
decrypt+=dicipher.final('utf8')
console.log(decrypt)

