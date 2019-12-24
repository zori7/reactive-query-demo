module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/reactive-query-demo/' : '',
    pluginOptions: {
        webpackBundleAnalyzer: {
            openAnalyzer: true
        }
    },
    transpileDependencies: [
        'vuetify'
    ],
    configureWebpack: {
        performance: {
            hints: false
        },
        optimization: {
            splitChunks: {
                minSize: 10000,
                maxSize: 200000,
            }
        }
    },
}