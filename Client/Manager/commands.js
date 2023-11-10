
class Commands {
  constructor(keyword, callbackfunction) {
    this.keyword = keyword;
    this.callbackfunction = callbackfunction;
  }
  runCommand(player) {
    this.callbackfunction(player)
  }
}

const go = new Commands('go', (player) => {   
  player = findAccount(player)
  player.go()
})
const buy = new Commands('buy', (player) => {
  console.log('buy')
  player = findAccount(player)
  let prop = JSON.parse(sessionStorage.getItem('arguments')).substr(4)
  console.log(prop)
  player.buy(prop)
  
})
const own = new Commands('own', (player) => {
  player = findAccount(player)
  let prop = JSON.parse(sessionStorage.getItem('arguments')).substr(4)
  let property = findProperty(prop)
  property.owner = player.name
  player.checkSet(property)
  $('#output').text(`${player.name} now owns ${property.name}`)
})
const money = new Commands('money', (player) => {
  player = findAccount(player)
  $('#output').text('$' + player.balance)
})
const rent = new Commands('rent', (player) => {    //rent
  player = findAccount(player)
  let prop = JSON.parse(sessionStorage.getItem('arguments')).substr(5)
  player.rent(prop)
})
const pay = new Commands('pay', (player) => {     //pay
  player = findAccount(player)
  let amount = JSON.parse(sessionStorage.getItem('arguments')).substr(4)
  player.pay(Number(amount))
})
const collect = new Commands('collect', (player) => {     //collect
  player = findAccount(player)
  let amount = JSON.parse(sessionStorage.getItem('arguments')).substr(8)
  player.collect(Number(amount))
})
const incomeTax = new Commands('income tax', (player) => {     //incomeTax
  player = findAccount(player)
  player.incomeTax()
})
const superTax = new Commands('super tax', (player) => {    //superTax 
  player = findAccount(player)
  player.superTax()
})
const jailFee = new Commands('jail', (player) => {       //jailFee
  player = findAccount(player)
  player.jailFee()
})
const mortgage = new Commands('mortgage', (player) => {      //mortgage
  player = findAccount(player)
  let prop = JSON.parse(sessionStorage.getItem('arguments')).substr(9)
  player.mortgage(prop)
})
const unmortgage = new Commands('unmortgage', (player) => {       //unmortgage
  player = findAccount(player)
  let prop = JSON.parse(sessionStorage.getItem('arguments')).substr(11)
  player.unmortgage(prop)
})
const build = new Commands('build', (player) => {       //build
  player = findAccount(player)
  let prop = JSON.parse(sessionStorage.getItem('arguments')).substr(6)
  player.build(prop)
})
const sellHouse = new Commands('sell', (player) => {       //sellHouse
  player = findAccount(player)
  let prop = JSON.parse(sessionStorage.getItem('arguments')).substr(5)
  player.sellh(prop)
})
const listProps = new Commands('list', (player) => {       //sellHouse
  player = findAccount(player)
  let msg = 'You own'
  player.properties.forEach(property => {
    console.log(player.properties.length)
    if (player.properties.indexOf(property) === player.properties.length - 1) {
      msg = msg + ` ${property.name}`
    } else {
      msg = msg + ` ${property.name},`
    }
  })
  $('#output').text(msg)
})
let commands = [go, buy, money, own, rent, pay, collect, incomeTax, superTax, jailFee, unmortgage, mortgage, build, sellHouse, listProps];

function findCommand(keyword) {
  let foundcommand;
  let commandFound = false;
  for (let i = 0; i < commands.length && !commandFound; i++) {
    if (keyword.includes(commands[i].keyword)) {
      foundcommand = commands[i]
      commandFound = true
    }
  }
  console.log(foundcommand)
  if (foundcommand === undefined) {
    return undefined
  }
  return foundcommand
}