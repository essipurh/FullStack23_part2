const PersonForm = ({ handleSubmit, nameValue, changeName, numberValue, changeNumber }) => {
    return (
        <form onSubmit={handleSubmit}>
        <div>
          name: 
          <input value={nameValue} onChange={changeName}/>
        </div>
        <div>
          number: <input value={numberValue} onChange={changeNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}
export default PersonForm