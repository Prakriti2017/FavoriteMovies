import '@testing-library/jest-dom'
import { render, fireEvent } from "@testing-library/react"
import App from "../App"

describe('App component',()=>{

    test("Renders the main page", () => {
        const {getByLabelText}=render(<App />)
        const title = getByLabelText('Movie Title:')
    
        fireEvent.change(title, {target: {value: 'ddlj'}})
        
        expect(title.value).toBe('ddlj')

    })

})

