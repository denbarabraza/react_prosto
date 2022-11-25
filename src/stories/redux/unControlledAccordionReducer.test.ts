import {unControlledAccordionAC, unControlledAccordionReducer} from "./unControlledAccordionReducer";

test('expect state is true',()=>{
    //data
    let state:boolean=false
    //action
    let res=unControlledAccordionReducer(state,unControlledAccordionAC())
    //expect
    expect(res).toBe(true)
})