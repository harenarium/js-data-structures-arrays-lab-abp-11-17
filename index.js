// Write your solution here!
const app = "I don't do much."

const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  drivers.push(name)
  return drivers
}

function destructivelyPrependKitten(name){
  drivers.unshift(name)
  return drivers
}

function destructivelyRemoveLastKitten(){
  drivers.pop()
  return drivers
}

function destructivelyRemoveFirstKitten(){
  drivers.shift()
}

function appendKitten(name){
  return [...drivers, name]
}

function prependKitten(name){
  return [name, ...drivers]
}

function removeLastKitten(){
  return drivers.slice(0,drivers.length-1)
}

function removeFirstKitten(){
  return drivers.slice(1)
}
