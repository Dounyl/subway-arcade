import breakout from './games/breakout/index.js'
import snake from './games/snake'

// 注册游戏及其元信息（可扩展）
const gameRegistry = {
  breakout: {
    name: '打砖块',
    init: breakout,
  },
  snake: {
    name: '贪吃蛇',
    init: snake,
  },
  // ✅ 添加新游戏只需要在这里注册
  // foo: {
  //   name: '新游戏',
  //   init: fooGame,
  // },
}

// 获取 URL 参数
const params = new URLSearchParams(window.location.search)
const type = params.get('type')

// 将所有参数转为对象（排除 type 参数本身）
const gameParams = Object.fromEntries([...params.entries()].filter(([key]) => key !== 'type'))

// 查找游戏并初始化
const game = gameRegistry[type]

if (game && typeof game.init === 'function') {
  game.init(gameParams)
} else {
  document.body.innerHTML = `<h2>未知游戏类型: ${type}</h2>`
}
