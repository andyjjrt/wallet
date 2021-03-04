module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/wallet/'
    : '/',
    pwa: {
        name: 'wallet',
        themeColor: '#4DBA87',
        msTileColor: '#000000',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',
    }
}