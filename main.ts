scene.onOverlapTile(SpriteKind.Player, myTiles.tile14, function (sprite, location) {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile17, function (sprite, location) {
    scene.setBackgroundColor(8)
    Cerrojo.setPosition(22, 100)
    tiles.setCurrentTilemap(tilemap`level1`)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile10, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile11, function (sprite, location) {
    game.gameOver(false)
})
info.onCountdownEnd(function () {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles10, function (sprite, location) {
    scene.setBackgroundColor(12)
    tiles.setCurrentTilemap(tilemap`nivel4`)
    Cerrojo.x = 3
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    Cerrojo.x = 600
    game.showLongText("Has encontrado un tesoro, ahora has desbloqueado la puerta.", DialogLayout.Top)
    tiles.setCurrentTilemap(tilemap`nivel3`)
    pause(1287309813123)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile12, function (sprite, location) {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile15, function (sprite, location) {
    scene.setBackgroundColor(8)
    Cerrojo.x = 22
    tiles.setCurrentTilemap(tilemap`nivel8`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    scene.setBackgroundColor(14)
    Cerrojo.setPosition(50, 100)
    tiles.setCurrentTilemap(tilemap`nivel8`)
})
let Cerrojo: Sprite = null
Cerrojo = sprites.create(img`
    . . . b 5 b . . . . . . . . . . 
    . . . . b 5 b . . . . . . . . . 
    . . . . . c b . . . . . . . . . 
    . . . . b b b b b b . . . . . . 
    . . . b 5 5 5 5 5 b b . . . . . 
    . . f d 5 5 f 1 d 5 b b . . . . 
    . . c 4 d 5 f f 1 5 5 b . . . . 
    . . 4 4 d d b f d 5 5 b . . . . 
    b 4 4 4 4 4 5 5 5 d b b d d d b 
    . b 4 4 4 4 4 5 5 b 5 5 5 d b b 
    . . b 5 5 5 5 5 d 5 5 5 5 c d b 
    . b 5 5 5 5 5 5 b 5 5 d c d d c 
    . b 5 5 5 5 5 5 5 b c c d d b c 
    . b d 5 5 5 5 5 d d d d d d c . 
    . . b b 5 5 5 d d d d d b c . . 
    . . . b b c c c c c c c c . . . 
    `, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`nivel2`)
scene.setBackgroundColor(9)
forever(function () {
    controller.moveSprite(Cerrojo, 100, 0)
    Cerrojo.ay = 100
    scene.cameraFollowSprite(Cerrojo)
    if (controller.right.isPressed()) {
        Cerrojo.setImage(img`
            . . . . . . . . . . b 5 b . . . 
            . . . . . . . . . b 5 b . . . . 
            . . . . . . . . . b c . . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . . . . b b 5 d 1 f 5 5 d f . . 
            . . . . b 5 5 1 f f 5 d 4 c . . 
            . . . . b 5 5 d f b d d 4 4 . . 
            b d d d b b d 5 5 5 4 4 4 4 4 b 
            b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
            b d c 5 5 5 5 d 5 5 5 5 5 b . . 
            c d d c d 5 5 b 5 5 5 5 5 5 b . 
            c b d d c c b 5 5 5 5 5 5 5 b . 
            . c d d d d d d 5 5 5 5 5 d b . 
            . . c b d d d d d 5 5 5 b b . . 
            . . . c c c c c c c c b b . . . 
            `)
    }
    if (controller.left.isPressed()) {
        Cerrojo.setImage(img`
            . . . b 5 b . . . . . . . . . . 
            . . . . b 5 b . . . . . . . . . 
            . . . . . c b . . . . . . . . . 
            . . . . b b b b b b . . . . . . 
            . . . b 5 5 5 5 5 b b . . . . . 
            . . f d 5 5 f 1 d 5 b b . . . . 
            . . c 4 d 5 f f 1 5 5 b . . . . 
            . . 4 4 d d b f d 5 5 b . . . . 
            b 4 4 4 4 4 5 5 5 d b b d d d b 
            . b 4 4 4 4 4 5 5 b 5 5 5 d b b 
            . . b 5 5 5 5 5 d 5 5 5 5 c d b 
            . b 5 5 5 5 5 5 b 5 5 d c d d c 
            . b 5 5 5 5 5 5 5 b c c d d b c 
            . b d 5 5 5 5 5 d d d d d d c . 
            . . b b 5 5 5 d d d d d b c . . 
            . . . b b c c c c c c c c . . . 
            `)
    }
    if (controller.A.isPressed() && Cerrojo.isHittingTile(CollisionDirection.Bottom)) {
        Cerrojo.vy = -100
    }
    if (controller.A.isPressed() && Cerrojo.tileKindAt(TileDirection.Bottom, sprites.builtin.oceanSand2)) {
        Cerrojo.vy = -125
    }
})
