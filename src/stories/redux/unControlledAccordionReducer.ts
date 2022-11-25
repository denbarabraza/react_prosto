export type ActionType = ReturnType<typeof unControlledAccordionAC>

export const unControlledAccordionReducer = (state: boolean, action: ActionType) => {
    switch (action.type) {
        case 'TOOGGLE_ACCORDION':
            return !state
        default:
            return state
    }
}

export const unControlledAccordionAC = () => {
    return {
        type: 'TOOGGLE_ACCORDION'
    } as const
}