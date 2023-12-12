import '@testing-library/jest-dom'
import { render, fireEvent } from "@testing-library/react"
import App from "../App"

describe('App component',()=>{

    test("Renders the Movie Title", () => {
        const {getByLabelText}=render(<App />)
        const title = getByLabelText('Movie Title:')
    
        fireEvent.change(title, {target: {value: 'Barbie'}})
        
        expect(title.value).toBe('Barbie')

    })
    test("Renders the Release Date", () => {
        const {getByLabelText}=render(<App />)
        const releaseDate = getByLabelText('Release Date:')
    
        fireEvent.change(releaseDate, {target: {value: '2023-10-09'}})
        
        expect(releaseDate.value).toBe('2023-10-09')

    })
    test("Renders the Movie Rating", () => {
        const {getByLabelText}=render(<App />)
        const rating = getByLabelText('Movie Rating:')
    
        fireEvent.change(rating, {target: {value: 3.6}})
        
        expect(rating.value).toBe(3.6)

    })
    test("Renders the Genre", () => {
        const {getByLabelText}=render(<App />)
        const genre = getByLabelText('Genre:')
    
        fireEvent.change(genre, {target: {value: 'Action'}})
        
        expect(genre.value).toBe('Action')

    })
    test("Renders the Studio Email", () => {
        const {getByLabelText}=render(<App />)
        const studioEmail = getByLabelText('Studio Email:')
    
        fireEvent.change(studioEmail, {target: {value: 'Action'}})
        
        expect(studioEmail.value).toBe('Action')

    })

})

