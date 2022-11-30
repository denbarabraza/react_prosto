import {ItemsPropsType} from "../Accordion/Accordion";

let items:ItemsPropsType[]

beforeEach(()=>{
    let items=[
        {id: 1, name: "Dima", value: "1"},
        {id: 2, name: "Denis", value: '2'},
        {id: 3, name: "Yana", value: '3'},
        {id: 4, name: "Viktor", value: '4'},
        {id: 5, name: "Ivan", value: '5'}
    ]
})

test('',()=>{
    //data
    let items=[
        {id: 1, name: "Dima", value: "1"},
        {id: 2, name: "Denis", value: '2'},
        {id: 3, name: "Yana", value: '3'},
        {id: 4, name: "Viktor", value: '4'},
        {id: 5, name: "Ivan", value: '5'}
    ]
    let newItem:ItemsPropsType={id: 11, name: "Kvadracopter", value: "11"}
    //action

    let valueWithA=items.filter(e => e.name.toLowerCase().indexOf('a') > -1)
    let valueUp =items.filter(e => e.value>'3')
    let valueLength =items.filter(e => e.name.length>4)

    //expect result
    expect(valueWithA.length).toBe(3)
    expect(valueUp.length).toBe(2)
    expect(valueLength.length).toBe(2)
})