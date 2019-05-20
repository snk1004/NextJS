来自 `http://nextjs.frontendx.cn`
> 快速开始
安装
安装它:

`npm install --save next react react-dom`
将下面脚本添加到 package.json 中:

`{
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  }
}`
Next.js 只支持React 16.
由于我们使用 React 16 的特性，所以不得不放弃对 React 15 以及以下版本的支持. 当前译版为7.0.0-canary.8

下面, 文件系统是主要的 API. 每个.js 文件将变成一个路由，自动处理和渲染。

新建 ./pages/index.js 到你的项目中:

`export default () => <div>Welcome to next.js!</div>`
运行 npm run dev 命令并打开 `http://localhost:3000`。 
如果你想使用其他端口，可运行 `npm run dev -- -p <设置端口号>`
