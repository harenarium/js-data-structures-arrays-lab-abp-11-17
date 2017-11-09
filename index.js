// Write your solution here!
const app = "I don't do much."

const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name){
  drivers.push(name)
  return drivers
}

function destructivelyPrependDriver(name){
  drivers.unshift(name)
  return drivers
}

function destructivelyRemoveLastDriver(){
  drivers.pop()
  return drivers
}

function destructivelyRemoveFirstDriver(){
  drivers.shift()
}

function appendDriver(name){
  return [...drivers, name]
}

function prependDriver(name){
  return [name, ...drivers]
}

function removeLastDriver(){
  return drivers.slice(0,drivers.length-1)
}

function removeFirstDriver(){
  return drivers.slice(1)
}
