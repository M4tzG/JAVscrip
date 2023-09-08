import Sprite from "./Sprite.js"
import Timer from "./Timer.js"


class AnimatedSprite{

    constructor(sources, owner, fps){
        this.frames = []
        this.sources = sources 
        this.owner = owner

        this.timer = new Timer( 1000 / fps )
        this.frame_atual = 0
        this.populate_frames()
    }


    populate_frames(){
        console.log(this.sources)
        
        for(let i = 0; i < this.sources.length; i++){
            this.frames.push(new Sprite(this.sources[i], this.owner))

        }
        console.log(this.frames)
    }
    

    update(delta){
        this.timer.update(delta)
        if (this.timer.zerou) { 
  
            if(this.frame_atual < this.frames.length - 1){
                this.frame_atual += 1
            }
            else{
                this.frame_atual = 0
            }
        }   
        if (this.timer.iniciou == false){ 
            this.timer.start() 
        }
        
        
    }
    render(ctx){
        console.log(this.frame_atual)
        this.frames[this.frame_atual].render(ctx)
        
    }

}
export default AnimatedSprite


/*
    - loop para alterar os frames
*/