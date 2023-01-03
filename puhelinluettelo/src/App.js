import { useState } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterPerson, setFilterPerson] = useState('')


  const addPerson = () => {
    if(newName.match(/^[a-z0-9]+/i)) {
      const newPerson = { name: newName, number: newNumber}
      setPersons(persons.concat(newPerson))
    }
    setNewName('')
    setNewNumber('')
  }
  const handleNewPersonSubmit = ( event ) => {
    event.preventDefault()
    persons.some(person => person.name.toLowerCase() ===  newName.toLowerCase())? window.alert(`${newName} is already added to phonebook`): addPerson()
  }

  const personsVisible = !filterPerson.match(/^[a-z0-9]+/i) ? persons : persons.filter(person => person.name.toLowerCase().includes(filterPerson.toLowerCase()))
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterValue={filterPerson} handleFilter={(event) => setFilterPerson(event.target.value)}/>
      <h2>New number</h2>
      <PersonForm handleSubmit={handleNewPersonSubmit} nameValue={newName} changeName={(event) => setNewName(event.target.value)} numberValue={newNumber} changeNumber={(event) => setNewNumber(event.target.value)}/>
      <h2>Numbers</h2>
      <Persons persons ={personsVisible}/>
    </div>
  )

}

export default App