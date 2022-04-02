importScripts("/wallet/precache-manifest.86a5fb3c5c26de51782b755b83ee888e.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.setCacheNameDetails({
    prefix: "Wallet",
});

// These lines are responsible for precaching static resources. Using 'generateSW'(zero config), these lines would be added automatically to the serviceworker. 
// __precacheManifest is the list of resources you want to precache. It will be generated and imported automatically by workbox during build time 
self.__precacheManifest = [
    {
        "revision": null,
        "url": "https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css"
    },
    {
        "revision": null,
        "url": "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900"
    },
].concat(self.__precacheManifest);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

// Here is where we apply our customization for the api
// all the api request wich starts with this pattern(first parameter) will use CacheFirst strategy for caching
