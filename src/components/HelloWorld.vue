<script setup lang="ts">
import GameManager from "../game/GameManager"
import { Application, Assets, Sprite } from 'pixi.js';
import Shop from "../game/classes/Shop"
import Person from "../game/classes/Person"
import {shopsDataArray} from "../game/shopsDataArray"

// start pixi
await GameManager.startPixi()
console.log(GameManager)

let shop1 = new Shop(shopsDataArray[0],0,200,GameManager.app.screen.height / 2,0)
shop1.loadTexture()
console.log(shop1)


let shop2 = new Shop(shopsDataArray[1],0,600,GameManager.app.screen.height / 2,0)
shop2.loadTexture()
console.log(shop2)

let person = new Person(0)
person.loadTexture()
person.loadHappiness()
let personS = person.spriteP
requestAnimationFrame(update);

function update() {
  console.log(personS.x)
  personS.x += 5;
  //GameManager.app.render(GameManager.app.stage);// todo: with ticker
  requestAnimationFrame(update);
}

</script>

<template>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
