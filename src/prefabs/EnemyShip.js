// EnemySpaceship prefab
class EnemySpaceship extends Spaceship {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame, pointValue);
        scene.add.existing(this); // add object to existing scene
        this.points = pointValue; // store pointValue
        this.moveSpeed = game.settings.enemyspaceshipSpeed; 
    }
    update() {
        // move spaceship left
        this.x -= this.moveSpeed;
        // wrap around from left edge to right edge
        if (this.x <= 0 - this.width) {
            this.reset();
        }
    }

    // position reset
    reset() {
        this.x = game.config.width;
    }
}

