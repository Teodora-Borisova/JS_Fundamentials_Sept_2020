function solve(arr){

    class Song{
        constructor( typeList, name, time){
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }
    
    let songs = [];
    let numSongs = arr.shift();
    let typeSong = arr.pop();
    
    for (let i = 0; i < numSongs; i++) {
        let[typeList, name, time] = arr[i].split('_');
        let song = new Song(typeList, name, time);
        songs.push(song);        
    }

    if( typeSong === 'all' || typeSong === 'Type List'){
        songs.forEach((i) => i.name)
    }else{
        let filtered = songs.filter((i) => i.typeList)
    }
}
solve([3, 
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);



