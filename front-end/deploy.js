// package.json配置执行脚本node ./deploy/deploy.js
import { execSync } from "child_process"
import os from "os"

// 检测操作系统类型
const platform = os.platform()

// 根据不同系统执行不同的命令
switch (platform) {
    case "darwin": {
        execSync("cd deploy && deploy.sh")
        break
    }
    case "win32": {
        execSync("cd deploy && deploy.bat")
        break
    }
    default: {
        runCommand("cd deploy && deploy.sh")
        break
    }
}

/**
 * 执行命令并返回输出
 * @param {string} command 
 */
function runCommand(command) {
    try {
        execSync(command, { stdio: "inherit" })
    } catch (error) {
        // 捕捉错误并输出
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        error && console.error("执行错误：" + error)
    }
}