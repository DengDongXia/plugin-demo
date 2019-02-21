module.exports = (api, projectOptions) => {
  api.registerCommand('watch', {
  	description: 'watch plugin for vue cli 3',
  	usage: 'vue-cli-service watch',
  	options: {}
  }, (args) => {
    // 输出传入的参数
    console.log('watch 命令注册成功')
    // projectOptions 拿到的是 vue.config.js 文件暴露出来的配置
    console.log(projectOptions.pluginOptions.watch.param)
  })
}