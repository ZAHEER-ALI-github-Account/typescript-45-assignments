//question no 40
function make_album(artist: string, title: string, tracks? : number){
    let album: {artist: string, title: string, tracks?:number} = {
        artist : artist,
        title : title
    }
    if(tracks !== undefined){
        album.tracks = tracks;
    }
    return album;
}
let album1 = make_album(`artist 1`, `album title 1`);
console.log(album1);

let album2 = make_album(`artist 2`, `album title 2`);
console.log(album2);

let album3 = make_album(`artist 3`, `album title 3`,12);
console.log(album3);