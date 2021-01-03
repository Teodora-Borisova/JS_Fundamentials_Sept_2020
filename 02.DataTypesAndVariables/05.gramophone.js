function solve(band, album, song){

let fullRotationSec = 2.5;

let songDuration = (album.length * band.length) * song.length/2;
let rotations = Math.ceil(songDuration / fullRotationSec);

console.log(`The plate was rotated ${rotations} times.`);


}
solve('Black Sabbath','Paranoid','War Pigs');