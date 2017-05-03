namespace engine.res {

    var __cache  = {};
    var ASSETS_PATH = "assets/";
    var __imageConfig = {

        "images": [
            { name: "wander-icon.jpg", width: 180, height: 180 },
            { name: "S_Watcher.png", width: 190, height: 190 },
        ]

    };


    export function loadConfig() {
        var length = __imageConfig.images.length;

        __imageConfig.images.forEach((config) => {
            
           
           
        });
    }
    
    

    /*
    export function loadRes(name) {
            var resource = getRes(name);
            resource.load();
        }

        export function getRes(name: string) {
            if (__cache[name]) {
                console.log("same cache !")
                return __cache[name]
            }
            else {
                __cache[name] = new ImageResource(name);
                return __cache[name];
            }
        }
        */

        let imageJason = [
    //path:
    { id: "Accept.png", width: 120, height: 60 },
    { id: "Close.png", width: 120, height: 60 },
    { id: "Close_s.png", width: 30, height: 30 },
    { id: "DialogueBg.png", width: 260, height: 180 },
    { id: "Finish.png", width: 120, height: 60 },
    { id: "Kill.png", width: 120, height: 60 },
    { id: "idel1.png", width: 60, height: 93 },
    { id: "idel1_L.png", width: 60, height: 93 },
    { id: "idel1_R.png", width: 60, height: 93 },
    { id: "idel2.png", width: 60, height: 93 },
    { id: "idel2_L.png", width: 60, height: 93 },
    { id: "idel2_R.png", width: 60, height: 93 },
    { id: "idel3.png", width: 60, height: 93 },
    { id: "idel3_L.png", width: 60, height: 93 },
    { id: "idel3_R.png", width: 60, height: 93 },
    { id: "idel4.png", width: 60, height: 93 },
    { id: "idel4_L.png", width: 60, height: 93 },
    { id: "idel4_R.png", width: 60, height: 93 },
    { id: "move1.png", width: 60, height: 93 },
    { id: "move1_L.png", width: 60, height: 93 },
    { id: "move1_R.png", width: 60, height: 93 },
    { id: "move2.png", width: 60, height: 93 },
    { id: "move2_L.png", width: 60, height: 93 },
    { id: "move2_R.png", width: 60, height: 93 },
    { id: "move3.png", width: 60, height: 93 },
    { id: "move3_L.png", width: 60, height: 93 },
    { id: "move3_R.png", width: 60, height: 93 },
    { id: "move4.png", width: 60, height: 93 },
    { id: "move4_L.png", width: 60, height: 93 },
    { id: "move4_R.png", width: 60, height: 93 },
    { id: "npc_0_nullIcon.png", width: 161, height: 278 },
    { id: "npc_0_taskAcceptable.png", width: 161, height: 278 },
    { id: "npc_0_taskDuring.png", width: 161, height: 278 },
    { id: "npc_0_taskFinish.png", width: 161, height: 278 },

    { id: "npc_1_nullIcon.png", width: 161, height: 278 },
    { id: "npc_1_taskAcceptable.png", width: 161, height: 278 },
    { id: "npc_1_taskDuring.png", width: 161, height: 278 },
    { id: "npc_1_taskFinish.png", width: 161, height: 278 },

    { id: "S_FuMO25.png", width: 190, height: 190 },
    { id: "S_Prinz Eugen.jpg", width: 261, height: 380 },
    { id: "S_Setuper.png", width: 190, height: 190 },
    { id: "S_SKC34.png", width: 190, height: 190 },
    { id: "S_Watcher.png", width: 190, height: 190 },
    { id: "tile_1.png", width: 64, height: 64 },
    { id: "tile_2.png", width: 64, height: 64 },
];


        export class ImageResource {

             id: string;



            bitmapData: HTMLImageElement;

            width: number;

            height: number;

            constructor(name: string,_width:number,_height:number) {
                this.width = _width;
                this.height = _height;
                this.id =  name;
            }
            /*
            public load() {
                var realResource = document.createElement("img");
                realResource.src = this.url;
                realResource.onload = () => {
                    this.bitmapData = realResource;
                    console.log(realResource.src  + "Has Loaded")
                }
            }
            */
        }

        export class Resourse {
        resourses: ImageResource[];
        private static Res: Resourse;
        constructor() {
            ;
        }
        public static getInstance(): Resourse {
            if (Resourse.Res == null) {
                Resourse.Res = new Resourse();
                Resourse.Res.resourses = new Array();
                return Resourse.Res;
            } else {
                return Resourse.Res;
            }
        }
        getRes(id: string): ImageResource {
            console.log(id.match("null"));
            
            if (id.match("null")) {
                console.log("not find " + id + " in imageJason");//此处可替换为“若没有该id，则添加至resource数组”
                return null;
            }
            
            for (let i = 0; i < this.resourses.length; i++) {
                if (this.resourses[i].id.match(id)) {
                    return this.resourses[i];
                }
            }


        }
        initial() {
            imageJason.forEach((x) => {
                var y = new ImageResource(x.id, x.width, x.height);
                this.resourses.push(y);
            })
        }
    }

    }