module.exports = {
    runtimeCaching: [{
        urlPattern: /^https:\/\/firebasestorage.googleapis.com\/v0\/b\/(.+)$/g,
        handler: 'cacheFirst'
    }]
}