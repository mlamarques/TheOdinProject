import Table from './components/Table'
import Cell from './components/Cell'
import './styles/App.css'

function App() {

  function handleClick(event) {
    console.log(event.currentTarget)
    const row = event.currentTarget.parentNode
    const rowIndex = Array.prototype.indexOf.call(row.parentNode.children, row)
    const columnIndex = Array.prototype.indexOf.call(row.children, event.currentTarget)
    const cellLetter = document.querySelectorAll('.battlefield-row')[0].childNodes[columnIndex].children[0].lastChild.innerText
    const cellPosition = `${cellLetter}${rowIndex + 1}`
    console.log(cellPosition)
  }

  const shipStyle = {
    'background': 'blue'
  }

  return (
    <div className="App">
      {/* <Table style={this.id = 'A1' && shipStyle} playerName={'You'}/>
      <Table handleClick={handleClick} playerName={'Enemy'}/> */}
      <table className='battlefield-table'>
                <tbody>
                    <tr className='battlefield-row'>
                      <Cell>
                        <div className='marker marker-row'>1</div>
                        <div className='marker marker-col'>A</div>
                      </Cell>
                      <Cell />
                      <Cell />
                      <Cell />
                      <Cell />
                      <Cell />
                      <Cell />
                      <Cell />
                      <Cell />
                      <Cell />
                    </tr>
                    <tr className='battlefield-row'>
                      <Cell />
                      <Cell />
                      <Cell />
                      <Cell />
                      <Cell />
                      <Cell />
                      <Cell />
                      <Cell />
                      <Cell />
                      <Cell />
                    </tr>
                    <tr className='battlefield-row'>
                      <Cell />
                      <Cell />
                      <Cell />
                      <Cell />
                      <Cell />
                      <Cell />
                      <Cell />
                      <Cell />
                      <Cell />
                      <Cell />
                    </tr>
                    <tr className='battlefield-row'>
                      <Cell />
                      <Cell />
                      <Cell />
                      <Cell />
                      <Cell />
                      <Cell />
                      <Cell />
                      <Cell />
                      <Cell />
                      <Cell />
                    </tr>
                    <tr className='battlefield-row'>
                      <Cell />
                      <Cell />
                      <Cell />
                      <Cell />
                      <Cell />
                      <Cell />
                      <Cell />
                      <Cell />
                      <Cell />
                      <Cell />
                    </tr>
                    <tr className='battlefield-row'>
                      <Cell />
                      <Cell />
                      <Cell />
                      <Cell />
                      <Cell />
                      <Cell />
                      <Cell />
                      <Cell />
                      <Cell />
                      <Cell />
                    </tr>
                    <tr className='battlefield-row'>
                      <Cell />
                      <Cell />
                      <Cell />
                      <Cell />
                      <Cell />
                      <Cell />
                      <Cell />
                      <Cell />
                      <Cell />
                      <Cell />
                    </tr>
                    <tr className='battlefield-row'>
                      <Cell />
                      <Cell />
                      <Cell />
                      <Cell />
                      <Cell />
                      <Cell />
                      <Cell />
                      <Cell />
                      <Cell />
                      <Cell />
                    </tr>
                    <tr className='battlefield-row'>
                      <Cell />
                      <Cell />
                      <Cell />
                      <Cell />
                      <Cell />
                      <Cell />
                      <Cell />
                      <Cell />
                      <Cell />
                      <Cell />
                    </tr>
                    <tr className='battlefield-row'>
                      <Cell />
                      <Cell />
                      <Cell />
                      <Cell />
                      <Cell />
                      <Cell />
                      <Cell />
                      <Cell />
                      <Cell />
                      <Cell />
                    </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
