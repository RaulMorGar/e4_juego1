// Código generado automáticamente. No editar.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "nivel1":
            case "nivel1":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010000000000000000010000000000010100000000000000000100000000000101000000000000000001000000000001010000000000000000000000000000010100000000000000000100000000000101000000000000000001000000000001010101010101010101010000000000000100000000000000000000000000000001000000000000000001000000000001010000000000000000010000000000010100000000000000000100000000000101000000000000000001000000000001010000000000000000010000000000010100000000000000000100000000000101010101010101010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 . . . . . 2 
2 . . . . . . . . 2 . . . . . 2 
2 . . . . . . . . 2 . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . 2 . . . . . 2 
2 . . . . . . . . 2 . . . . . 2 
2 2 2 2 2 2 2 2 2 2 . . . . . . 
2 . . . . . . . . . . . . . . . 
2 . . . . . . . . 2 . . . . . 2 
2 . . . . . . . . 2 . . . . . 2 
2 . . . . . . . . 2 . . . . . 2 
2 . . . . . . . . 2 . . . . . 2 
2 . . . . . . . . 2 . . . . . 2 
2 . . . . . . . . 2 . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.hazardLava0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Código generado automáticamente. No editar.
