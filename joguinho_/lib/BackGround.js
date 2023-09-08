class BackGround{

    constructor(src){
        this.img = new Image()
        this.img.src = src
        this.img.width = window.innerWidth
        this.img.height = window.innerHeight
        
        this.position = {x: 0 - window.innerWidth/2, y: 0 - window.innerHeight/2}
        this.size = {width: window.innerWidth, height: window.innerHeight}
    }



    update(delta){

    }

    render(ctx){
        const {x, y} = this.position
        const {width, height} = this.size
        ctx.beginPath()
        ctx.drawImage(this.img, x, y, width, height)
    }

}
export default BackGround
