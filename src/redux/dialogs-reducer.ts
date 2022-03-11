const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'
export const dialogsReducer = (state:any,action:any) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageText = action.body
            return state
        case SEND_MESSAGE:
            const body = state.newMessageText
            state.messages.push({id: 5, message: body})
            state.newMessageText = ''
            return state
        default: return state
    }

}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const newMessageBodyActionCreator = (body: string) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
})