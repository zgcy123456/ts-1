# ts-1
typescript first sample
npm init -y

yarn add vite -D

update package.json
scripts:dev:vite

npm run dev


单元测试框架
Jest和Mocha

计算代码的覆盖率工具istanbul



npm install --save-dev jest @types/jest
https://jestjs.io/zh-Hans/docs/getting-started

本教程基于 yarn 来进行安装，如果使用使用 npm 和 pnpm 的话方法类似，无非就是把 yarn 换成 npm 或者 pnpm，yarn add 换成 npm install 或者 pnpm add，最保险的做法就是自行查阅一下这三者的安装区别，应该会很快。

npm i --save-dev typescript


npm ts-jest config:init



npm i --save-dev jest  #ts-jest 依赖 jest
npm i --save-dev ts-jest
npm i --save-dev @types/jest


1 同步ts-jest  ok
2 ts-jest sample  
3 样式调整。
3 地图多选
5 未生成的元素，如何添加事件


npm config set registry http://registry.npmjs.org/
npm config set registry https://registry.npmjs.org/

npm config set registry http://registry.npm.taobao.com


获取当前的镜像
npm config get registry

清除缓存
npm cache clean --force

下载报错，提示链接不上
npm config set strict-ssl false

tsc --init

npx tsc --init

npm run dev
npm run server

安装jquery
yarn add  jquery @types/jquery