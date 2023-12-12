import { isEmail, isNotEmpty } from "../validation";

describe("IsEmail validation function ", ()=>{
    test("returns true for valid email", ()=>{
        expect(isEmail("abc@gmail.com")).toBe(true)
    })
    test("returns true for valid email prakriti", ()=>{
        expect(isEmail("Prakritiadhikari2017@gmail.com")).toBe(true)
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