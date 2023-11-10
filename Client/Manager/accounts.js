class Property {
  constructor({name, price, rent, type, set}) {
    this.name = name
    this.price = price
    this.set = set
    this.type = type
    this.mortgage = Math.ceil(price.ownership / 2)
    this.unmortgage = this.mortgage + Math.ceil(this.mortgage * 0.1)
    this.hsell = this.price.house_and_hotel / 2
    this.rent = rent
    this.houselevel = 0
    this.inSet = false;
    this.isMortgaged = false
    this.owner = ''
  }
  

}
properties = [
  old_kent_road = {
    name: 'Old Kent Road',
    type: 'Property',
    set: 'Brown',
    price: {
      ownership: 60,   //cost
      house_and_hotel: 50
    },
    rent: {
      base: 2,
      set: 4,
      house_and_hotel: [10, 30, 90, 160, 250]
    }
  },
  whitechapel_road = {
    name: 'Whitechapel Road',
    type: 'Property',
    set: 'Brown',
    price: {
      ownership: 60,   //cost
      house_and_hotel: 50
    },
    rent: {
      base: 4,       //site
      set: 8,        //site doubled
      house_and_hotel: [20, 60, 180, 320, 450]   //1 hse, 2 hses, 3 hses, 4 hses, Hotel
    }
  },
  the_angel_islington = {
    name: 'The Angel Islington',
    type: 'Property',
    set: 'Light Blue',
    price: {
      ownership: 100,   //cost
      house_and_hotel: 50
    },
    rent: {
      base: 6,       //site
      set: 12,        //site doubled
      house_and_hotel: [30, 90, 270, 400, 550]   //1 hse, 2 hses, 3 hses, 4 hses, Hotel
    }
  },
  euston_roa = {
    name: 'Euston Road',
    type: 'Property',
    set: 'Light Blue',
    price: {
      ownership: 100,   //cost
      house_and_hotel: 50
    },
    rent: {
      base: 6,       //site
      set: 12,        //site doubled
      house_and_hotel: [30, 90, 270, 400, 550]   //1 hse, 2 hses, 3 hses, 4 hses, Hotel
    }
  },
  pentonville_road = {
    name: 'Pentonville Road',
    type: 'Property',
    set: 'Light Blue',
    price: {
      ownership: 120,    //cost
      house_and_hotel: 100
    },
    rent: {
      base: 8,       //site
      set: 16,        //site doubled
      house_and_hotel: [40, 100, 300, 450, 600]   //1 hse, 2 hses, 3 hses, 4 hses, Hotel
    }
  },
  pall_mall = {
    name: 'Pall Mall',
    type: 'Property',
    set: 'Pink',
    price: {
      ownership: 140,    //cost
      house_and_hotel: 50
    },
    rent: {
      base: 10,     //site
      set: 20,        //site doubled
      house_and_hotel: [50, 150, 450, 625, 750]   //1 hse, 2 hses, 3 hses, 4 hses, Hotel
    }
  },

  whitehall = {
    name: 'Whitehall',
    type: 'Property',
    set: 'Pink',
    price: {
      ownership: 140,    //cost
      house_and_hotel: 100
    },
    rent: {
      base: 10,       //site
      set: 20,        //site doubled
      house_and_hotel: [50, 150, 450, 625, 750]   //1 hse, 2 hses, 3 hses, 4 hses, Hotel
    }
  },
  northumberland_avenu = {
    name: 'Northumberland Avenue',
    type: 'Property',
    set: 'Pink',
    price: {
      ownership: 160,    //cost
      house_and_hotel: 100
    },
    rent: {
      base: 12,       //site
      set: 24,        //site doubled
      house_and_hotel: [60, 180, 500, 700, 900]   //1 hse, 2 hses, 3 hses, 4 hses, Hotel
    }
  },
  bow_street = {
    name: 'Bow Street',
    type: 'Property',
    set: 'Orange',
    price: {
      ownership: 180,    //cost
      house_and_hotel: 100
    },
    rent: {
      base: 14,       //site
      set: 28,        //site doubled
      house_and_hotel: [70, 200, 550, 750, 950]   //1 hse, 2 hses, 3 hses, 4 hses, Hotel
    }
  },
  marlborough_street = {
    name: 'Marlborough Street',
    type: 'Property',
    set: 'Orange',
    price: {
      ownership: 180,    //cost
      house_and_hotel: 100
    },
    rent: {
      base: 14,      //site
      set: 28,        //site doubled
      house_and_hotel: [70, 200, 550, 750, 950]   //1 hse, 2 hses, 3 hses, 4 hses, Hotel
    }
  },
  vine_street = {
    name: 'Vine Street',
    type: 'Property',
    set: 'Orange',
    price: {
      ownership: 200,    //cost
      house_and_hotel: 100
    },
    rent: {
      base: 16,       //site
      set: 32,        //site doubled
      house_and_hotel: [80, 220, 600, 800, 1000]   //1 hse, 2 hses, 3 hses, 4 hses, Hotel
    }
  },
  the_strand = {
    name: 'The Strand',
    type: 'Property',
    set: 'Red',
    price: {
      ownership: 220,    //cost
      house_and_hotel: 150
    },
    rent: {
      base: 18,       //site
      set: 36,       //site doubled
      house_and_hotel: [90, 250, 700, 875, 1050]   //1 hse, 2 hses, 3 hses, 4 hses, Hotel
    }
  },
  fleet_street = {
    name: 'Fleet Street',
    type: 'Property',
    set: 'Red',
    price: {
      ownership: 220,    //cost
      house_and_hotel: 150
    },
    rent: {
      base: 18,       //site
      set: 36,        //site doubled
      house_and_hotel: [90, 250, 700, 875, 1050]   //1 hse, 2 hses, 3 hses, 4 hses, Hotel
    }
  },
  trafalgar_square = {
    name: 'Trafalgar Square',
    type: 'Property',
    set: 'Red',
    price: {
      ownership: 240,    //cost
      house_and_hotel: 150
    },
    rent: {
      base: 20,       //site
      set: 40,       //site doubled
      house_and_hotel: [100, 300, 750, 925, 1100]   //1 hse, 2 hses, 3 hses, 4 hses, Hotel
    }
  },
  leicester_square = {
    name: 'Leicester Square',
    type: 'Property',
    set: 'Yellow',
    price: {
      ownership: 260,    //cost
      house_and_hotel: 150
    },
    rent: {
      base: 22,       //site
      set: 44,       //site doubled
      house_and_hotel: [110, 330, 800, 975, 1150]   //1 hse, 2 hses, 3 hses, 4 hses, Hotel
    }
  },
  coventry_street = {
    name: 'Coventry Street',
    type: 'Property',
    set: 'Yellow',
    price: {
      ownership: 260,    //cost
      house_and_hotel: 150
    },
    rent: {
      base: 22,       //site
      set: 44,       //site doubled
      house_and_hotel: [110, 330, 800, 975, 1150]   //1 hse, 2 hses, 3 hses, 4 hses, Hotel
    }
  },
  piccadilly = {
    name: 'Piccadilly',
    type: 'Property',
    set: 'Yellow',
    price: {
      ownership: 280,    //cost
      house_and_hotel: 150
    },
    rent: {
      base: 24,       //site
      set: 48,       //site doubled
      house_and_hotel: [120, 360, 850, 1025, 1200]   //1 hse, 2 hses, 3 hses, 4 hses, Hotel
    }
  },
  regent_street = {
    name: 'Regent Street',
    type: 'Property',
    set: 'Green',
    price: {
      ownership: 300,    //cost
      house_and_hotel: 200
    },
    rent: {
      base: 26,       //site
      set: 52,       //site doubled
      house_and_hotel: [130, 390, 900, 1100, 1200]   //1 hse, 2 hses, 3 hses, 4 hses, Hotel
    }
  },
  oxford_street = {
    name: 'Oxford Street',
    type: 'Property',
    set: 'Green',
    price: {
      ownership: 280,    //cost
      house_and_hotel: 200
    },
    rent: {
      base: 22,       //site
      set: 44,       //site doubled
      house_and_hotel: [120, 360, 850, 1025, 1200]   //1 hse, 2 hses, 3 hses, 4 hses, Hotel
    }
  },
  bond_street = {
    name: 'Bond Street',
    type: 'Property',
    set: 'Green',
    price: {
      ownership: 320,    //cost
      house_and_hotel: 200
    },
    rent: {
      base: 28,       //site
      set: 56,       //site doubled
      house_and_hotel: [160, 450, 1000, 1200, 1400]   //1 hse, 2 hses, 3 hses, 4 hses, Hotel
    }
  },
  park_lane = {
    name: 'Park Lane',
    type: 'Property',
    set: 'Blue',
    price: {
      ownership: 350,    //cost
      house_and_hotel: 200
    },
    rent: {
      base: 35,       //site
      set: 70,       //site doubled
      house_and_hotel: [175, 500, 1100, 1300, 1500]   //1 hse, 2 hses, 3 hses, 4 hses, Hotel
    }
  },
  mayfair = {
    name: 'Mayfair',
    type: 'Property',
    set: 'Blue',
    price: {
      ownership: 400,    //cost
      house_and_hotel: 200
    },
    rent: {
      base: 50,       //site
      set: 100,       //site doubled
      house_and_hotel: [200, 600, 1400, 1700, 2000]   //1 hse, 2 hses, 3 hses, 4 hses, Hotel
    }
  },
  kings_cross_station = {
    name: 'Kings Cross Station',
    type: 'Railroad',
    set: 'Railroad',
    price: {
      ownership: 200,    //cost
    },
    rent: [25, 50, 100, 200]
  },
  marlybone_station = {
    name: 'Marlybone Station',
    type: 'Railroad',
    set: 'Railroad',
    price: {
      ownership: 200,    //cost
    },
    rent: [25, 50, 100, 200]
  },
  fenchurch_st_station = {
    name: 'Fenchurch St Station',
    type: 'Railroad',
    set: 'Railroad',
    price: {
      ownership: 200,    //cost
    },
    rent: [25, 50, 100, 200]
  },
  liverpool_st_station = {
    name: 'Liverpool St Station',
    type: 'Railroad',
    set: 'Railroad',
    price: {
      ownership: 200,    //cost
    },
    rent: [25, 50, 100, 200]
  },
  electric_company = {
    name: 'Electric Company',
    type: 'Utility',
    set: 'Utility',
    price: {
      ownership: 150,    //cost
    },
    rent: {
      base: 4,
      set: 10
    }
  },
  water_works = {
    name: 'Water Works',
    type: 'Utility',
    set: 'Utility',
    price: {
      ownership: 150,    //cost
    },
    rent: {
      base: 4,
      set: 10
    }
  }
]
let Properties = [];
properties.forEach(prop => {
  Properties.push(new Property({
    name: prop.name,
    type: prop.type,
    set: prop.set,
    price: prop.price,
    rent: prop.rent
  }))
})

class Account {
  constructor(name) {
    this.name = name
    this.balance = 1500
    this.properties = []
  }
  buy(propertyname) {
    

    let property = findProperty(propertyname)
    if (property === undefined) {$('#output').text('Not a property'); return 0}
    if (this.balance < property.price.ownership) {$('#output').text('Not enough money'); return 0}
    console.log(property.name)
    if(property.owner !== '') { $('#output').text(`already owned by ${property.owner}`); return 0 }
    console.log(property)
    this.balance -= property.price.ownership
    this.properties.push(property)
    property.owner = this.name
    this.checkSet(property)
    $('#output').text(`${this.name} has bought ${property.name}, ${this.name} now has $${this.balance}`)
  }
  rent(property) {
    console.log('rent')
    let rent

    property = findProperty(property)
    if (property === undefined) {$('#output').text('Not a property'); return 0}
    if (property.isMortgaged) {$('#output').text('Property is mortgaged'); return 0}
    
    if (property.owner === this.name || 
    property.owner === '') {$('#output').text('Property owned by you or no one'); return 0}
    if (property.type === 'Property' || property.type === 'Utility') {
      if (!property.inSet) {
        rent = property.rent.base
      } else {
        if (property.type === 'Property') {
          if (property.houselevel === 0) {
            rent = property.rent.set
          } else {
            rent = property.rent.house_and_hotel[property.houselevel - 1]
          }
        }
      }
    } else if (property.type === 'Railroad') {
      console.log(property)
      console.log(this.checkRailroad(property))
      rent = property.rent[this.checkRailroad(property) - 1]
    }
    if (this.balance < rent) {$('#output').text('Not enough money'); return 0}
    this.balance -= rent
    findAccount(property.owner).balance += rent
    $('#output').text(`${this.name} has paid ${property.owner} $${rent}`)
  }
  pay(amount) {
    if(isNaN(amount)) {$('#output').text(`Not a number`); return 0}
    if(this.balance < amount) {$('#output').text('Not enough money'); return 0}
    this.balance -= amount
    $('#output').text(`${this.name} now has $${this.balance}`)
  }
  collect(amount) {
    if(isNaN(amount)) {$('#output').text(`Not a number`); return 0}
    this.balance += amount
    $('#output').text(`${this.name} now has $${this.balance}`)
  }
  incomeTax() {
    if(this.balance < 200) {$('#output').text('Not enough money'); return 0}
    this.balance -= 200
    $('#output').text(`${this.name} now has $${this.balance}`)
  }
  superTax() {
    if(this.balance < 100) {$('#output').text('Not enough money'); return 0}
    this.balance -= 100
    $('#output').text(`${this.name} now has $${this.balance}`)
  }
  go() {
    this.balance += 200
    $('#output').text(`${this.name} now has $${this.balance}`)
  }
  jailFee() {
    if(this.balance < 50) {$('#output').text('Not enough money'); return 0}
    this.balance -= 50
    $('#output').text(`${this.name} now has $${this.balance}`)
  }
  checkSet(property) {
    let set = property.set
    let type = property.type
    console.log(set, type)
    let Max = 3
    if (set === 'Brown' || set === 'Blue' || type === 'Utility') {
      Max = 2
    } else if (type === 'Railroad') {
      Max = 4
    }
    console.log(Max)
    let props = []
    let propsownedbyyou = 0
    Properties.forEach(prop => {
      if (prop.set === set) {
        if (prop.owner === this.name) {
          propsownedbyyou++
          console.log(prop)
          props.push(prop)
        }
      }
    })
    console.log(props)
    if (Max === propsownedbyyou) {
      props.forEach(prop => {
        prop.inSet = true
      })
    } else {
      Properties.forEach(prop => {
        if (set === prop.set) {
          prop.inSet = false
        }
      })
    }
  }
  checkRailroad(property) {
    if (property.type !== 'Railroad') {return 0}
    let propertiesownedbyowner = 0
    Properties.forEach(prop => {
      if (prop.type === 'Railroad') {
        if (property.owner === prop.owner) {
          propertiesownedbyowner++
        }
      }

    })
    return propertiesownedbyowner
  }
  mortgage(property) {
    console.log('mortgage')
    property = findProperty(property)
    if(property === undefined) {$('#output').text('Not a property'); return 0}
    if(this.name !== property.owner) {$('#output').text('Not your property'); return 0}
    if(property.houselevel !== 0) {$('#output').text(`${property.houselevel} houses are on this property`); return 0}
    if (!property.isMortgaged) {
      this.balance += property.mortgage;
      property.isMortgaged = true;
      $('#output').text(`${property.name} is now mortgaged, you have $${this.balance}`)
    } else {$('#output').text('This property is already mortgaged')}
  }
  unmortgage(property) {
    console.log(property)
    property = findProperty(property)
    if(property === undefined) {$('#output').text('Not a property')}
    if(this.name !== property.owner) {$('#output').text('Not your property'); return 0}
    if(property.isMortgaged) {
      this.balance -= property.unmortgage
      property.isMortgaged = false
      $('#output').text(`${property.name} is now unmortgaged, you have $${this.balance}`)
    } else {$('#output').text('This property is already unmortgaged')}
  }
  
  build(property) {
    property = findProperty(property)
    if(property === undefined) {$('#output').text('Not a property')}
    if(this.name !== property.owner) {$('#output').text('Not your property'); return 0}
    if(property.type !== 'Property') {$('#output').text('Cant build on this type of property'); return 0}
    if(!property.inSet) {$('#output').text('This property is not in a set'); return 0}
    if(property.isMortgaged) {$('#output').text('This property is mortgaged'); return 0}
    if(property.houselevel === 5) {$('#output').text('This property already has a hotel'); return 0}
    let setprop = []
    Properties.forEach(prop => {
      if (prop.set === property.set) {
        setprop.push(prop.houselevel)
      }
    })
    console.log(setprop)
    let even = true
    setprop.forEach(prophlvl => {
      if(prophlvl === property.houselevel - 1) { even = false }
    })
    if (even === false) {$('#output').text('Houses arent even'); return 0}
    this.balance -= property.price.house_and_hotel
    property.houselevel++
    if(property.houselevel === 5) {$('#output').text(`${property.name} now has a hotel, ${this.name} now has $${this.balance}`)}
    else if (property.houselevel === 1){$('#output').text(`${property.name} has 1 house, ${this.name} now has $${this.balance}`)}
    else {$('#output').text(`${property.name} has ${property.houselevel} houses, ${this.name} now has $${this.balance}`)}
    
  }
  sellh(property) {
    property = findProperty(property)
    if(property === undefined) {$('#output').text('Not a property')}
    console.log(property.owner)
    if(this.name !== property.owner) {$('#output').text('Not your property'); return 0}
    if(property.type !== 'Property') {$('#output').text('This type of property doesent support buildings'); return 0}
    if(!property.inSet) {$('#output').text('This property is not in a set'); return 0}
    if(property.isMortgaged) {$('#output').text('This property is mortgaged'); return 0}
    if(property.houselevel === 0) {$('#output').text('This property already has no houses'); return 0}
    let setprop = []
    Properties.forEach(prop => {
      if (prop.set === property.set) {
        setprop.push(prop.houselevel)
      }
    })
    console.log(setprop)
    let even = true
    setprop.forEach(prophlvl => {
      if(prophlvl === property.houselevel + 1) { even = false }
    })
    if (even === false) {$('#output').text('Houses arent even'); return 0}
    this.balance += property.hsell
    property.houselevel--
    if(property.houselevel === 1) {$('#output').text(`${property.name} now has 1 house, you now have $${this.balance}`)}
    else {$('#output').text(`${property.name} now has ${property.houselevel} houses, you now have $${this.balance}`)}
  }
}


function findProperty(name) {
  if(typeof(name) === undefined) {console.log('prop is undef'); return 0}
  console.log(name)
  name = name.toLowerCase()
  let prop
  Properties.forEach(property => {
    
    if(property.name.toLowerCase() === name) { prop = property }
  })
  
  return prop
}
let usernames = JSON.parse(sessionStorage.getItem('usernames'))
let Accounts = [new Account(usernames[0]), new Account(usernames[1]), new Account(usernames[2]), new Account(usernames[3])]
function findAccount(owner) {
  let acc;
  Accounts.forEach(account => {
    if(account.name === owner) { acc = account }
  })
  return acc
}

