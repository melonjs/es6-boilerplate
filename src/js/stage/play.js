import * as me from 'melonjs/dist/melonjs.module.js';

// Note : Jay Inheritance to be replaced with standard ES6 inheritance in melonjs 10+
export var PlayScreen = me.Stage.extend({
    /**
     *  action to perform on state change
     */
    onResetEvent: function() {
        // add a gray background to the default Stage
        me.game.world.addChild(new me.ColorLayer("background", "#202020"));

        // add a font text display object
        me.game.world.addChild(new me.BitmapText(me.game.viewport.width / 2, me.game.viewport.height / 2,  {
            font : "PressStart2P",
            size : 4.0,
            textBaseline : "middle",
            textAlign : "center",
            text : "Hello World !"
        }));
    }
})

export default PlayScreen;
