import { render, fireEvent } from "@testing-library/react"
import Input from "../Input"

describe('Input component',()=>{
    test('displays error message when movieTitle is invalid',()=>{
        render(<Input />)
        
    })
}
)
