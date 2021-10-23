import * as me from 'melonjs/dist/melonjs.module.js';

 // Note : Jay Inheritance to be replaced with standard ES6 inheritance in melonjs 10+
class PlayerEntity extends me.Entity {

    /**
     * constructor
     */
    constructor(x, y, settings) {
        // call the parent constructor
        super(x, y , settings);
    }

    /**
     * update the entity
     */
    update(dt) {
        // change body force based on inputs
        //....
        // call the parent method
        return super.update(dt);
    }

   /**
     * colision handler
     * (called when colliding with other objects)
     */
    onCollision(response, other) {
        // Make all other objects solid
        return true;
    }
};

export default PlayerEntity;
