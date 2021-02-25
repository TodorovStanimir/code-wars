const songDecoder = (song) => song.replace(/(WUB)+/g, ' ').trim();

console.log(songDecoder("AWUBBWUBC")); //A B C
console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC")); //A B C
console.log(songDecoder("WUBAWUBBWUBCWUB")); //A B C
console.log(songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")); // WE ARE THE CHAMPIONS MY FRIEND