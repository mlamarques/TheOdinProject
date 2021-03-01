import '../styles/Experience.css'

function Experience(props) {
    return(
        <div>
            <h1>Experience</h1>
            <div className='info-container'>
                <label htmlFor="exOrg">Organization <input id='exOrg' type='text' placeholder='Organization name'></input></label>
                <label htmlFor="exRole">Role <input id='exRole' type='text' placeholder='Role'></input></label>
                <label htmlFor="exDescription">Description <input id='exDescription' type='text' placeholder='Description'></input></label>
                <label htmlFor="exDataStart">Start <input id='exDataStart' type='date'></input></label>
                <label htmlFor="exDataEnd">End <input id='exDataEnd' type='date'></input></label>
                <label className="control-label-root">
                    <span className="switch-root">
                        <span className="switch-thumb-wrapper">
                            <input className="switch-input" id="exOngoingDate" type="checkbox" value=""/>
                            <span className="switch-thumb"></span>
                        </span>
                    </span> 
                    <span className='ongoing'>Ongoing</span>
                </label>
            </div>
            <div>
                <button type='button'><span><i class="fas fa-plus"></i></span>Add</button>
            </div>
            <hr/>
        </div>
    )
}

export default Experience