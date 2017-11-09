// Write your solution here!
const app = "I don't do much."

var driver = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  driver.push(name)
  return driver
}

function destructivelyPrependKitten(name){
  driver.unshift(name)
  return driver
}

function destructivelyRemoveLastKitten(){
  driver.pop()
  return driver
}

function destructivelyRemoveFirstKitten(){
  driver.shift()
}

function appendKitten(name){
  return [...driver, name]
}

function prependKitten(name){
  return [name, ...driver]
}

function removeLastKitten(){
  return driver.slice(0,driver.length-1)
}

function removeFirstKitten(){
  return driver.slice(1)
}