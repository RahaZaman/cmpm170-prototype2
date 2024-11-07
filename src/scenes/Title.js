class Title extends Phaser.Scene {
    constructor() {
        super("titleScreen");
    }

    preload() {
        this.load.setPath("./assets/");
        this.load.bitmapFont("pixel_square", "fonts/pixel_square_0.png", "fonts/pixel_square.fnt");

        // Load your background image
        this.load.image('background', './Photos/background.png'); // Adjust the path if needed
    }

    create() {
        // Add the background image to the center of the canvas
        this.add.image(game.config.width / 2, game.config.height / 2, 'background')
            .setOrigin(0.5, 0.5)
            .setDisplaySize(game.config.width, game.config.height);

        this.startGame = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

        this.add.bitmapText(game.config.width / 2, (game.config.height / 2) - 40, "pixel_square",
        "WASD to move", 20).setOrigin(0.5);
        this.add.bitmapText(game.config.width / 2, game.config.height / 2, "pixel_square",
        "Press enter to start", 20).setOrigin(0.5);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(this.startGame))
            this.scene.start("levelScreen");
    }
}
