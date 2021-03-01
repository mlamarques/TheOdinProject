import '../styles/Information.css'

function Information(props) {
    return (
        <div>
            <h1>Info</h1>
            <div className='info-container'>
                <label htmlFor="infoName">Name <input 
                                                    id='infoName' 
                                                    name='setName'
                                                    type='text' 
                                                    placeholder='your name' 
                                                    onChange={props.handleChange} 
                                                    value={props.name}>
                                                </input></label>
                <label htmlFor="infoEmail">e-mail <input 
                                                    id='infoEmail' 
                                                    name='setEmail'
                                                    type='text' 
                                                    placeholder='your e-mail' 
                                                    onChange={props.handleChange}
                                                    value={props.email}>
                                                </input></label>
                <label htmlFor="infoPhone">Phone <input 
                                                    id='infoPhone' 
                                                    name='setPhone'
                                                    type='number' 
                                                    placeholder='your phone number' 
                                                    onChange={props.handleChange}
                                                    value={props.phone}>
                                                </input></label>
            </div>
            <hr/>
        </div>
        
    )
}

export default Information