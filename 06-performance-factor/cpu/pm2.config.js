/*
 * @Description: 
 * @Date: 2021-05-14 20:15:24
 * @LastEditTime: 2021-05-14 21:13:26
 * @LastEditors: linwei
 */
module.exports = {
  apps : [{
    name: "nodejs-performance-factor-cpu", // 启动进程名
    script: "./index.js", // 启动文件
    instances: 2, // 启动进程数
    exec_mode: 'cluster', // 多进程多实例
    env_development: {
      NODE_ENV: "development",
      watch: true, // 开发环境使用 true，其他必须设置为 false
    },
    env_testing: {
      NODE_ENV: "testing",
      watch: false, // 开发环境使用 true，其他必须设置为 false
    },
    env_production: {
      NODE_ENV: "production",
      watch: false, // 开发环境使用 true，其他必须设置为 false
    },
    log_date_format: 'YYYY-MM-DD HH:mm Z',
    error_file: '~/data/err.log', // 错误日志文件，必须设置在项目外的目录，这里为了测试
    out_file: '~/data/info.log', //  流水日志，包括 console.log 日志，必须设置在项目外的目录，这里为了测试
    max_restarts: 10,
  }]
}