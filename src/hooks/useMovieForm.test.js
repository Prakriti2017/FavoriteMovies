import useMovieForm from './useMovieForm'
import { renderHook ,act} from '@testing-library/react'

describe('useMovieForm hook',()=>{
    test('sets the input value',()=>{
        const { result } = renderHook(() => useMovieForm())
        act(() => {
            result.current.handleInputChange({target:{value:'test'}})
          })
        expect (result.current.value).toBe("test")
    })

    test('resets the input value',()=>{
        const { result } = renderHook(() => useMovieForm())
        act(() => {
            result.current.handleInputChange({target:{value:'test'}})
          })
        expect (result.current.value).toBe("test")
        act(() => {
            result.current.reset()
          })
        expect (result.current.value).toBe(undefined)
    })
})
