import '@testing-library/jest-dom'
import { render } from "@testing-library/react"
import App from "../App"

describe('App component',()=>{

    test()

    test("Renders the main page", () => {
        render(<App />)
        expect(true).toBeTruthy()
    })

})

