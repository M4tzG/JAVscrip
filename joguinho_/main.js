import Sena from "./lib/Sena.js"


// ####################################################

const Canvas = document.getElementById("game_canvas")
const ctx = Canvas.getContext("2d")
Canvas.width = window.innerWidth
Canvas.height = window.innerHeight

// =================================
//
// Sprite.js; --------------- ok
// Scene.js; ---------------- ok
// BackGround.js ------------ ok/2
// Animated Sprite.js; ------
// Delta?; ------------------ 
//
// =================================
//  fazr função para redimenconar, cm o     
//      Canvas.width = window.innerWidth
//      Canvas.height = window.innerHeight


const MainLoop = ()=>{
    ctx.save()
    Canvas.width = window.innerWidth
    Canvas.height = window.innerHeight
    ctx.translate(Canvas.width/2, Canvas.height/2)
    ctx.restore()
    Sena(ctx)
    requestAnimationFrame(MainLoop)
}

export default MainLoop
