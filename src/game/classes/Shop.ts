import GameManager from "../GameManager";
import {Sprite} from 'pixi.js';


export default class Shop extends Sprite {
    shopData: any
    buildShopId:number
    shopId: number
    name: string
    buildPrice: number
    money: number
    maxCapacity: number
    currentCapacity: number
    anchorValue: number
    spriteName: string

    constructor(objShop: any, width:number, xpos:number, ypos:number, id:number) {
        super()
        this.shopData = objShop
        this.anchorValue = 0.5
        this.x = xpos
        this.y = ypos
        this.width = width
        this.buildShopId = this.shopData.build_id
        this.shopId = id
        this.name = this.shopData.name
        this.buildPrice = this.shopData.build_price
        this.money = this.shopData.money
        this.maxCapacity = this.shopData.max_capacity
        this.currentCapacity = this.shopData.current_capacity
        this.spriteName = objShop.sprite_name
        console.log(this.spriteName)
    }

    public async loadTexture() {
        this.texture = await GameManager.getTexture(this.spriteName)
        const s = new Sprite(this.texture);
        s.anchor.set(this.anchorValue);
        s.x = this.x
        s.y = this.y
        GameManager.app.stage.addChild(s);
    }

    // todo create marker

    // todo create sign (shop name)

    // todo create capacity 



    // public createShop(){
    //     console.log("instance: " + gm.instance)

    //     let shop = gm.instance.k.add([
    //         gm.instance.k.sprite(this.spriteName, {width:this.width}),
    //         gm.instance.k.pos(this.xpos, this.ypos),
    //         gm.instance.k.anchor(this.anchor),
    //         gm.instance.k.area(),
    //         gm.instance.k.scale(this.scale),
    //         gm.instance.k.body({ isStatic: true }),
    //         "buildShop",
    //     ]);
    //     shop.add([
    //         gm.instance.k.text(this.name),
    //         gm.instance.k.pos(0,(-200)),
    //         gm.instance.k.rotate(0),
    //         gm.instance.k.anchor("center"),
    //         "shop_sign", // tag
    //     ])
    //     // object: marker 
    //     shop.add([
    //         gm.instance.k.rect(10, 40),
    //         gm.instance.k.pos(-100,300),
    //         gm.instance.k.rotate(0),
    //         gm.instance.k.area(),
    //         {
    //             marker_shop_id: this.shopId,
    //             marker_shop: this.name,
    //         },
    //         "marker_shop", // tag
    //     ])
    //      // object: capacity of shop
    //      shop.add([
    //         gm.instance.k.text(this.currentCapacity + "/" + this.maxCapacity),
    //         gm.instance.k.pos(0,0),
    //         gm.instance.k.rotate(0),
    //         gm.instance.k.anchor("center"),
    //         {
    //             sign_shop_id: this.shopId,
    //             sign_name: this.name,
    //         },
    //         "shop_cap", // tag
    //     ])
    //     return shop
    // }
}