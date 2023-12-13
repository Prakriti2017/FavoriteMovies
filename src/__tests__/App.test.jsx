import '@testing-library/jest-dom'
import { render, fireEvent } from "@testing-library/react"
import App from "../App"

describe('DisplayMovies component',()=>{

    test("Renders the Movie Title", () => {
        const {getByLabelText}=render(<App />)
        const title = getByLabelText('Movie Title:')
    
        fireEvent.change(title, {target: {value: 'Barbie'}})
        
        expect(title.value).toBe('Barbie')

    })

})

describe('MovieForm component',()=>{
    test('displays error message when movieTitle is invalid',()=>{

        const {getByLabelText, getByText}=render(<App />)
        const title = getByLabelText('Movie Title:')
    
        fireEvent.change(title, {target: {value: ''}})
        fireEvent.blur(title)
        
        const errorElement = getByText('Please enter a Movie Title',{exact:false})
        expect(errorElement).toBeInTheDocument()

    })

    test('removes error message when movieTitle is valid',()=>{

        const {getByLabelText, queryByText}=render(<App />)
        const title = getByLabelText('Movie Title:')
    
        fireEvent.change(title, {target: {value: 'Spiderman'}})
        fireEvent.blur(title)
        
        const errorElement = queryByText('Please enter a Movie Title',{exact:false})
        expect(errorElement).toBeNull()

    })
}
)



