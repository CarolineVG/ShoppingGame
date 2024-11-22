// singleton: accesibble everywhere
import {Application, Assets, Texture, Ticker, Sprite} from 'pixi.js';

export default class GameManager {
    private constructor() {
    }

    // vars
    //private static _instance: GameManager
    public static app: Application

    public static get width(): number {
        return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    public static get height(): number {
        return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    }

    public static async startPixi(): Promise<void> {
        console.log(document.getElementById("pixi-canvas"));

        // create app
        GameManager.app = new Application();
        await GameManager.app.init(
            { 
                resolution: window.devicePixelRatio || 1,
                resizeTo: window,
                autoDensity: true,
                background: '#1099bb'
            });
       
        // add canvas to html
        let canvas = document.getElementById("app")
        if(canvas)
            canvas.appendChild(GameManager.app.canvas);

        
        // load textures in the background
        await Assets.init({ manifest: "../src/game/textures.json" });
        Assets.backgroundLoadBundle(["buildings", "people"]);
    }
    

    public static async getTexture(name:string){
        const t = await Assets.load(name);
        if(typeof t === 'undefined'){
            throw Error('no texture');
        } else {
            return t;
        }
    }
}

