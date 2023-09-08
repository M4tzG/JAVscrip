class Sprite{
    constructor(src, owner){
        this.img = new Image()
        this.img.src = src
        this.img.width = owner.width
        this.img.height = owner.height
        
        this.position = owner.position
        this.size = owner.size
    }

// ####################################################

    update(delta){

    }

    render(ctx){
        const {x, y} = this.position
        const {width, height} = this.size
        ctx.beginPath()
        ctx.drawImage(this.img, x, y, width, height)
    }
}
export default Sprite