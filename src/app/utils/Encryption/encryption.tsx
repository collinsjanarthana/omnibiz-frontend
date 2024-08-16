import CryptoJS from 'crypto-js';

const SECRET_KEY = process.env.NEXT_PUBLIC_ENCRYPTION_KEY || '';

export const encryptId = (id: string): string => {
    return CryptoJS.AES.encrypt(id, SECRET_KEY).toString();
};

export const decryptId = (encryptedId: string): string => {
    const bytes = CryptoJS.AES.decrypt(encryptedId, SECRET_KEY);
    return bytes.toString(CryptoJS.enc.Utf8);
};
