const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
	publicPath: '',
	filenameHashing: false,
	transpileDependencies: true,
	productionSourceMap: false,
})
