import { useState } from 'react'
import '../styles/components/SearchField.css'

function SearchField() {
    const [textContent, setTextContent] = useState('')

    function handleChange(event) {
        const { value } = event.target
        setTextContent(value)
    }

    function handleErase() {
        setTextContent('')
    }

    return (
            <div className="search-container">
                <div className="search-field round-border">
                    <div className="lupa-container">
                        <svg className="search-icon"  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.375 17.5H18.3875L18.0375 17.1625C19.2625 15.7375 20 13.8875 20 11.875C20 7.3875 16.3625 3.75 11.875 3.75C7.3875 3.75 3.75 7.3875 3.75 11.875C3.75 16.3625 7.3875 20 11.875 20C13.8875 20 15.7375 19.2625 17.1625 18.0375L17.5 18.3875V19.375L23.75 25.6125L25.6125 23.75L19.375 17.5ZM11.875 17.5C8.7625 17.5 6.25 14.9875 6.25 11.875C6.25 8.7625 8.7625 6.25 11.875 6.25C14.9875 6.25 17.5 8.7625 17.5 11.875C17.5 14.9875 14.9875 17.5 11.875 17.5Z"/>
                        </svg>
                    </div>
                    <div className="input-container">
                        <input 
                            className="input-value" 
                            autocapitalize="sentences" 
                            autocomplete="on" 
                            autocorrect="on" 
                            placeholder="Search for people" 
                            spellcheck="true"
                            type="text" 
                            value={textContent}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="erase-container round-border" style={textContent === '' ? {display: 'none'} : {display: 'flex'}} onClick={handleErase}>
                        <svg viewBox="0 0 15 15" className="erase-icon">
                            <g>
                                <path d="M8.914 7.5l5.793-5.793c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L7.5 6.086 1.707.293c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L6.086 7.5.293 13.293c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L7.5 8.914l5.793 5.793c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L8.914 7.5z">
                                </path>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
    )
}

export default SearchField