# 目录结构

- `src` - 主要代码
    - `main.js` - 入口文件，类似路由功能
    - `games` - 游戏代码
      - `game_name` - 游戏名称
        - `index.js` - 游戏入口
- `dist` - 打包后的代码
- `public` - 静态资源
- `index.html` - 主页
- `game.html` - 游戏页
- `README.md` - 说明文档


## 开发

```sh
$ npm run dev
```

运行于 http://localhost:3001

## 打包

```sh
$ npm run build
```

将js文件打包放入 `dist/`

```sh
$ npm run zip
```

will build your game and package into a .zip file, you can upload to your server or itch.io / newground etc.