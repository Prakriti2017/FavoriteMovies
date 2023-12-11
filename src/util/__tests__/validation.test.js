import { isEmail, isNotEmpty } from "../validation";
import {render,screen} from '@testing-library/react'

describe("IsEmail validation function ", ()=>{
    test("returns true for valid email", ()=>{
        expect(isEmail("abc@gmail.com")).toBe(true)
    })

    test("returns false for invalid email", ()=>{
        expect(isEmail("abc.com")).toBe(false)
    })
})

describe("IsNotEmpty validation function ", ()=>{
    test("returns true for not empty value", ()=>{
        expect(isNotEmpty("abc")).toBe(true)
    })

    test("returns false for not empty value", ()=>{
        expect(isNotEmpty("")).toBe(false)
    })
})