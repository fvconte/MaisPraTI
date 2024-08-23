let thingsList = Array()

thingsList['hardware'] = Array()
thingsList['fruits'] = Array()
thingsList['people'] = Array('Flavio', 'Newton')

thingsList['hardware'][0] = 'Notebook'
thingsList['hardware'][1] = 'Mouse'
thingsList['hardware'][2] = 'Teclado'

thingsList['fruits'][0] = 'Laranja'
thingsList['fruits'][1] = 'Morango'

console.log(thingsList)
console.log(thingsList.sort())

console.table(thingsList)