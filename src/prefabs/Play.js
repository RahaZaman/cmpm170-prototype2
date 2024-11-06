class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame, controls) {
        super(scene, x, y, texture, frame);

        this.controls = controls;
        this.active = true;

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.ACCELERATION = 2560;
        this.DRAG = 750;

        return this;
    }

    update() {
        if (this.controls.left.isDown || this.controls.right.isDown) {
            if (this.controls.left.isDown && this.active) {
                this.body.setAccelerationX(-this.ACCELERATION);
            }
            if (this.controls.right.isDown && this.active) {
                this.body.setAccelerationX(this.ACCELERATION);
            }
        } else {
            this.body.setAccelerationX(0);
            this.body.setDragX(this.DRAG);
        }
        if (this.controls.up.isDown || this.controls.down.isDown) {
            if (this.controls.up.isDown && this.active) {
                this.body.setAccelerationY(-this.ACCELERATION);
            }
            if (this.controls.down.isDown && this.active) {
                this.body.setAccelerationY(this.ACCELERATION);
            }
        } else {
            this.body.setAccelerationY(0);
            this.body.setDragY(this.DRAG);
        }

        if (this.scene.periodicTimer == 90)
            this.anims.play("warning");
        else if (this.scene.periodicTimer == 0)
            this.anims.play("idle");
    }

    makeInactive() {
        this.active = false;
        this.body.setAcceleration(0);
        this.body.setVelocity(0);
    }
}