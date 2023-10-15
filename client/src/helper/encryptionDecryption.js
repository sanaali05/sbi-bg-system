import CryptoJS from 'crypto-js'

export const encrypt = (data) => {
    var encryptedData = CryptoJS.AES.encrypt(data, 'wearelearners').toString();
    return encryptedData;
}

export const decrypt = (data) => {
    if (data) {
        var bytes = CryptoJS.AES.decrypt(data, 'wearelearners');
        var decryptedData = bytes.toString(CryptoJS.enc.Utf8);
        return decryptedData;
    }

}