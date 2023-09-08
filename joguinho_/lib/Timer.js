class Timer {
    constructor(delay){
        this.iniciou = false
        this.zerou = false
        this.delay = delay
        this.inicial_tempo = 0
    }


    start(){
        this.inicial_tempo = performance.now()
        this.iniciou = true

    }
    zerar(){
 
        this.inicial_tempo = 0
        this.zerou = true
        this.iniciou = false
    }

    update(delta){
        this.zerou = false
        let final_tempo = performance.now()
        
        let _delta = final_tempo - this.inicial_tempo

        if (_delta >= this.delay){ this.zerar()}
    
    }

} 
export default Timer