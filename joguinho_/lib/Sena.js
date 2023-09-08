import BouFiliot from "./BouFiliot.js"
import Figuro from "./Figuro.js"
import BackGround from "./BackGround.js"
import AnimatedSprite from "./AnimatedSprite.js"


// ####################################################

const Josue = new BouFiliot( 0, 0, 100, 150, 10, ["././resouces/2x/1_2x_dogato.png", "././resouces/2x/2_2x_dogato.png", "././resouces/2x/3_2x_dogato.png", "././resouces/2x/4_2x_dogato.png", "././resouces/2x/5_2x_dogato.png", "././resouces/2x/6_2x_dogato.png"], 10)
// const Julio = new Figuro(-50, -50, 50, 50, 0, "././resouces/eu.jpg")
const Bah = new BackGround("././resouces/legal.png")
// const Penis = new AnimatedSprite(["././resouces/shek.png", "././resouces/eu.jpg", "././resouces/legal.png"], Josue, 3)

// -------------------------

const Sena = (ctx) => {
    // Penis.update(10)
    Bah.update(10)
    // Julio.update(10)
    Josue.update(10)

// -----------------------    
//  =-= ordem importa =-=
    
    Bah.render(ctx)
    // Julio.render(ctx)
    Josue.render(ctx) 
    // Penis.render(ctx)

}

export default Sena

// flip image js