const data = '{"trainerName": "Red","homeTown": "Pallet Town","born": 1996,"partyPokemon": [{"name": "Pikachu","level": 81,"type": "Electric","moves": ["Charm", "Quick Attack", "Thunderbolt", "Thunder"]},{"name": "Blastoise","level": 84,"type": "Water","moves": ["Rain Dance", "Blizzard", "Surf", "Whirlpool"]},{"name": "Snorlax","level": 75,"type": "Normal","moves": ["Amnesia", "Snore", "Rest", "Body Slam"]}]}'

const pokedata = JSON.parse(data)

console.log(pokedata.trainerName) // "Red"
console.log(pokedata["trainerName"]) // "Red"
console.log(pokedata.partyPokemon[0].name) // Pikachu

let object = {
  trainerName: "Blue",
  born: 1996,
  partyPokemon: [
    {
      name: "Arcanine",
      level: 63,
      type: "Fire",
      moves: ["Roar", "Leer", "Ember", "Take Down"]
    }
  ]
}

let bluepokedata = JSON.stringify(object)

console.log(bluepokedata) // {"trainerName":"Blue","born":1996,"partyPokemon":[{"name":"Arcanine","level":63,"type":"Fire","moves":["Roar","Leer","Ember","Take Down"]}]}