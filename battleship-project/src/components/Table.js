import React from 'react'
import '../styles/Table.css'


const Table = (props) => {
    return (
        <div>
            <table className='battlefield-table'>
                <tbody>
                    <tr className='battlefield-row'>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'>
                                <div className='marker marker-row'>1</div>
                                <div className='marker marker-col'>A</div>
                            </div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'>
                                <div className='marker marker-col'>B</div>
                            </div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'>
                                <div className='marker marker-col'>C</div>
                            </div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'>
                                <div className='marker marker-col'>D</div>
                            </div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'>
                                <div className='marker marker-col'>E</div>
                            </div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'>
                                <div className='marker marker-col'>F</div>
                            </div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'>
                                <div className='marker marker-col'>G</div>
                            </div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'>
                                <div className='marker marker-col'>H</div>
                            </div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'>
                                <div className='marker marker-col'>I</div>
                            </div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'>
                                <div className='marker marker-col'>J</div>
                            </div>
                        </td>
                    </tr>
                    <tr className='battlefield-row'>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'>
                                <div className='marker marker-row'>2</div>
                            </div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                    </tr>
                    <tr className='battlefield-row'>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'>
                                <div className='marker marker-row'>3</div>
                            </div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                    </tr>
                    <tr className='battlefield-row'>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'>
                                <div className='marker marker-row'>4</div>
                            </div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                    </tr>
                    <tr className='battlefield-row'>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'>
                                <div className='marker marker-row'>5</div>
                            </div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                    </tr>
                    <tr className='battlefield-row'>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'>
                                <div className='marker marker-row'>6</div>
                            </div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                    </tr>
                    <tr className='battlefield-row'>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'>
                                <div className='marker marker-row'>7</div>
                            </div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                    </tr>
                    <tr className='battlefield-row'>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'>
                                <div className='marker marker-row'>8</div>
                            </div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                    </tr>
                    <tr className='battlefield-row'>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'>
                                <div className='marker marker-row'>9</div>
                            </div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                    </tr>
                    <tr className='battlefield-row'>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'>
                                <div className='marker marker-row'>10</div>
                            </div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className='player-title'>
                <h1>{props.playerName}</h1>
            </div>
        </div>
    )
}

export default Table