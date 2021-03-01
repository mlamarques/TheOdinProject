function Education(props) {
    return(
        <div>
            <h1>Education</h1>
            <div className='info-container'>
                <label htmlFor="edOrg">Organization 
                    <input 
                        id='edOrg' 
                        name='setEduOrg' 
                        type='text' 
                        placeholder='Organization name' 
                        onChange={props.handleChange}
                        value={props.eduOrg}
                    ></input></label>
                <label htmlFor="edTitle">Title 
                    <input 
                        id='edTitle' 
                        name='setEduTitle' 
                        type='text' 
                        placeholder='Title' 
                        onChange={props.handleChange}
                        value={props.eduTitle}
                    ></input></label>
                <label htmlFor="edDescription">Description 
                    <input 
                        id='edDescription' 
                        name='setEduDescription' 
                        type='text' 
                        placeholder='Description' 
                        onChange={props.handleChange}
                        value={props.eduDescription}
                    ></input></label>
            </div>
            <div>
                <button type='button' onClick={props.addEducation}><span><i class="fas fa-plus"></i></span>Add</button>
            </div>
        </div>
        
    )
}

export default Education