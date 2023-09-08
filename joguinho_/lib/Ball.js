import HitBox from "./HitBox.js"
import Sprite from "./Sprite.js"
import AnimatedSprite from "./AnimatedSprite.js"


// ####################################################

class Ball{
    constructor(x, y, width, height, radius, src, fps){
        this.position = { x: x, y: y }
        this.size = { width: width, height: height }
        this.radius = radius
        this.mouseX = 0
        this.mouseY = 0
        this.clicked = false
        this.img = new AnimatedSprite(src, this, fps)
        this.hitbox = new HitBox(this)
    }

// ####################################################

    movBolas(){
        // function lerp(v0, v1, t) {
        //     return v0 + t * (v1 - v0);
        // }
        // window.addEventListener("keydown", (tecla) =>{
        //     tecla.preventDefault()

        //     if (tecla.key == 'j') this.position.x -= 0.1
        //     if (tecla.key == 'i') this.position.y -= 0.1
        //     if (tecla.key == 'k') this.position.y += 0.1
        //     if (tecla.key == 'l') this.position.x += 0.1
        //     // if (tecla.key == 'u') this.position.x += Math.cos(this.position.x) * Math.sin(this.position.y) + 8
        // })

        // window.addEventListener("click", (mouse) => {
        //     let x = mouse.clientX
        //     let y = mouse.clientY
        //     this.mouseX = x
        //     this.mouseY = y
        //     this.clicked = true
            
        // })
        // // if(this.b)this.position.x += 0.1 * (this.aaaa - window.innerWidth/2)
        // if (this.clicked)this.position.x = lerp(this.position.x, this.mouseX - window.innerWidth/2, 0.1)
        // if (this.clicked)this.position.y = lerp(this.position.y, this.mouseY - window.innerHeight/2, 0.1)
    }


// ####################################################

    update(delta){
        this.movBolas()
        this.img.update(delta)
        this.hitbox.update(delta)

    }   

    render(ctx){        
        this.img.render(ctx)
        this.hitbox.render(ctx)
    }
}
export default Ball