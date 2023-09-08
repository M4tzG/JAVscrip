// ####################################################
class HitBox{
    constructor( owner ){
        this.size =owner.size
        this.position = owner.position
        this.owner = owner
        this.isInside = false
        this.clicked = false
        this.hide = true
        this.MouseEntered()
        this.ClickListener()   
    }

// ####################################################

    ClickListener(){
        window.addEventListener("mousedown", (mouse)=>{
            this.clicked = true          
        })
        window.addEventListener("mouseup", (mouse)=>{
            this.clicked = false   
        })
    }

    onclick(callback){
        if(this.isInside && this.clicked){
            let minhames = 0
            callback(minhames)
        }
    }

    MouseEntered(){
        window.addEventListener('mousemove', (mouse)=>{
            let mussex = mouse.clientX - window.innerWidth/2
            let mussey = mouse.clientY - window.innerHeight/2
            const {x, y} = this.position
            const {width, height} = this.size
            const n = {x: x, y: y}
            const p = {x: n.x + width, y: y}
            const k = {x: x, y: n.y + height}
            const f = {x: n.x + width, y: n.y + height}

            if(mussex > n.x && mussex < p.x){
                if(mussey > p.y && mussey < f.y){
                    this.isInside = true
                }
            }
            else this.isInside = false
        })
    }
    
// ####################################################

    update(delta){
        this.onclick((event)=>{
            console.log("finsas", event)
            // this.owner.size.width = 888
        })
    }
    render(ctx){
        if(this.hide)return
        
        const {x, y} = this.position
        const {width, height} = this.size
        ctx.save()
        ctx.strokeStyle = 'red'
        ctx.strokeRect(x, y, width, height)
        ctx.restore()
    }
}
export default HitBox