import kaplay from "kaplay";
// import "kaplay/global"; // uncomment if you want to use without the k. prefix


export default function breakOut(options = {}) {
  const k = kaplay()

  k.loadRoot("./") // 用于加载资源

  k.loadSprite("bean", "sprites/bean.png")

  k.scene("main", () => {
    k.add([k.pos(120, 80), k.sprite("bean")])

    k.onClick(() => k.addKaboom(k.mousePos()))

    // 你可以使用 options 设置行为，比如 bean 的位置
    if (options.customText) {
      k.add([
        k.text(options.customText, { size: 24 }),
        k.pos(100, 150),
      ])
    }
  })

  k.go("main")
}