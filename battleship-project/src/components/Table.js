import React from 'react'
import '../styles/Table.css'


const Table = (props) => {
    return (
        <div>
            <table className={`battlefield-table ${props.className}`}>
                <tbody>
                    <tr className='battlefield-row'>
                        <td id="A1"  style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'>
                                <div className='marker marker-row'>1</div>
                                <div className='marker marker-col'>A</div>
                            </div>
                        </td>
                        <td id="B1" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'>
                                <div className='marker marker-col'>B</div>
                            </div>
                        </td>
                        <td id="C1" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'>
                                <div className='marker marker-col'>C</div>
                            </div>
                        </td>
                        <td id="D1" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'>
                                <div className='marker marker-col'>D</div>
                            </div>
                        </td>
                        <td id="E1" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'>
                                <div className='marker marker-col'>E</div>
                            </div>
                        </td>
                        <td id="F1" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'>
                                <div className='marker marker-col'>F</div>
                            </div>
                        </td>
                        <td id="G1" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'>
                                <div className='marker marker-col'>G</div>
                            </div>
                        </td>
                        <td id="H1" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'>
                                <div className='marker marker-col'>H</div>
                            </div>
                        </td>
                        <td id="I1" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'>
                                <div className='marker marker-col'>I</div>
                            </div>
                        </td>
                        <td id="J1" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'>
                                <div className='marker marker-col'>J</div>
                            </div>
                        </td>
                    </tr>
                    <tr className='battlefield-row'>
                        <td id="A2" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'>
                                <div className='marker marker-row'>2</div>
                            </div>
                        </td>
                        <td id="B2" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="C2" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="D2" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="E2" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="F2" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="G2" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="H2" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="I2" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="J2" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                    </tr>
                    <tr className='battlefield-row'>
                        <td id="A3" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'>
                                <div className='marker marker-row'>3</div>
                            </div>
                        </td>
                        <td id="B3" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="C3" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="D3" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="E3" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="F3" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="G3" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="H3" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="I3" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="J3" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                    </tr>
                    <tr className='battlefield-row'>
                        <td id="A4" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'>
                                <div className='marker marker-row'>4</div>
                            </div>
                        </td>
                        <td id="B4" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="C4" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="D4" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="E4" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="F4" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="G4" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="H4" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="I4" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="J4" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                    </tr>
                    <tr className='battlefield-row'>
                        <td id="A5" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'>
                                <div className='marker marker-row'>5</div>
                            </div>
                        </td>
                        <td id="B5" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="C5" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="D5" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="E5" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="F5" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="G5" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="H5" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="I5" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="J5" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                    </tr>
                    <tr className='battlefield-row'>
                        <td id="A6" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'>
                                <div className='marker marker-row'>6</div>
                            </div>
                        </td>
                        <td id="B6" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="C6" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="D6" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="E6" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="F6" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="G6" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="H6" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="I6" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="J6" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                    </tr>
                    <tr className='battlefield-row'>
                        <td id="A7" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'>
                                <div className='marker marker-row'>7</div>
                            </div>
                        </td>
                        <td id="B7" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="C7" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="D7" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="E7" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="F7" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="G7" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="H7" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="I7" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="J7" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                    </tr>
                    <tr className='battlefield-row'>
                        <td id="A8" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'>
                                <div className='marker marker-row'>8</div>
                            </div>
                        </td>
                        <td id="B8" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="C8" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="D8" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="E8" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="F8" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="G8" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="H8" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="I8" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="J8" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                    </tr>
                    <tr className='battlefield-row'>
                        <td id="A9" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'>
                                <div className='marker marker-row'>9</div>
                            </div>
                        </td>
                        <td id="B9" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="C9" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="D9" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="E9" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="F9" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="G9" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="H9" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="I9" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="J9" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                    </tr>
                    <tr className='battlefield-row'>
                        <td id="A10" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'>
                                <div className='marker marker-row'>10</div>
                            </div>
                        </td>
                        <td id="B10" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="C10" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="D10" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="E10" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="F10" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="G10" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="H10" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="I10" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
                            <div className='battlefield-cell-content'></div>
                        </td>
                        <td id="J10" style={props.style} className='battlefield-cell' onClick={props.handleClick}>
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