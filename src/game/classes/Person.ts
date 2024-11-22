
import GameManager from "../GameManager";
import {Sprite} from 'pixi.js';


export default class Person extends Sprite {
    personId: number
    speed: number
    spriteName: string
    shopId: number
    shopsVisited: boolean[] // todo aanpassen 
    money: number
    happiness: number
    direction: string
    isMoving: boolean
    isMovingToShop: boolean
    anchorValue: number
    spriteP: Sprite

    constructor(id:number){
        super()
        this.personId = id
        this.speed = 10000
        this.spriteName = "person" // todo: sprite_array[i]
        this.shopId = 0
        this.shopsVisited = [false, false]
        this.money = 100
        this.happiness = 0
        this.direction = "right"
        this.isMoving = true
        this.isMovingToShop = false 
        this.anchorValue = 0.5
        this.x = 400
        this.y = 500
        this.spriteP = new Sprite()
    }


    public async loadTexture() {
        this.texture = await GameManager.getTexture(this.spriteName)
        this.spriteP = new Sprite(this.texture);
        this.spriteP.anchor.set(this.anchorValue);
        this.spriteP.x = this.x
        this.spriteP.y = this.y
        console.log(this.spriteP)
        GameManager.app.stage.addChild(this.spriteP);
        //requestAnimationFrame(this.update);

    }

    public async loadHappiness() {
        this.texture = await GameManager.getTexture("happy")
        const s = new Sprite(this.texture);
        s.anchor.set(this.anchorValue);
        s.x = this.x
        s.y = this.y - 120
        s.scale.set(0.1);
        GameManager.app.stage.addChild(s);
    }
    
    // public update() {
    //     console.log(this.spriteP)
    //     this.spriteP.x += 1;
    
    //     GameManager.app.render();
        
    //     requestAnimationFrame(this.update);
    // }

    //todo show money

    // todo show happiness 
}

// export default class Person {
//     personId: number
//     speed: number
//     spriteName: string
//     shopId: number
//     shopsVisited: boolean[] // todo aanpassen 
//     money: number
//     happiness: number
//     direction: string
//     isMoving: boolean
//     isMovingToShop: boolean
//     scale: number

//     constructor(id:number){
//         this.personId = id
//         this.speed = 10000
//         this.spriteName = "ventje" // todo: sprite_array[i]
//         this.shopId = 0
//         this.shopsVisited = [false, false]
//         this.money = 100
//         this.happiness = 0
//         this.direction = "right"
//         this.isMoving = true
//         this.isMovingToShop = false 
//         this.scale = 0.4
//     }

//     createPerson(){
//         /*let sprite_array = ["person1", "person2", "person3"]
//         let i = Math.floor(Math.random() * 3);*/

//         let person = gm.instance.k.add([
//             gm.instance.k.sprite(this.spriteName),
//             gm.instance.k.pos(80, 600),
//             gm.instance.k.scale(this.scale),
//             gm.instance.k.anchor("top"),
//             gm.instance.k.color(),
//             gm.instance.k.rotate(0),
//             gm.instance.k.area({collisionIgnore: ["person"]}), // collision checking
//             gm.instance.k.body(), 
//             gm.instance.k.offscreen({ destroy: true }),
//             "persontag", // tag
//         ]);
    
//         // object: money of person
//         person.add([
//             gm.instance.k.text(this.money.toString(), {
//                 size: 60,
//                 font: "sans-serif"
//             }),
//             gm.instance.k.color(20,188,70),
//             gm.instance.k.pos(0,(-50)),
//             gm.instance.k.rotate(0),
//             gm.instance.k.anchor("center"),
//             "person_money",
//         ])
    
//         // object: happiness of person
//         person.add([
//             gm.instance.k.text(this.happiness.toString(), {
//                 size: 60,
//                 font: "sans-serif"
//             }),
//             gm.instance.k.color(20,188,70),
//             gm.instance.k.pos(0,(-100)),
//             gm.instance.k.rotate(0),
//             gm.instance.k.anchor("center"),
//             "person_happiness",
//         ])
    
//         person.play("right")
    
//         return person; 
//     }

//     updateHappiness(value:number){

//     }
// }