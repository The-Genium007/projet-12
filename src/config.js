const IS_DEV = false;  // true pour activer les données mockées

export const config = {
    useMock: IS_DEV, // bascule automatique
    apiBaseUrl: IS_DEV ? "https://api.tonsite.com" : "http://localhost:3000",
};