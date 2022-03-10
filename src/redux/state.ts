const ADD_POST = 'ADD-POST';
const UPADATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

export const store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'hello', likeCount: 10},
                {id: 2, message: 'hiho', likeCount: 5}
            ],
            newPostText: 'LolXd'
        },
        dialogsPage: {
            users: [
                {id: 1, name: 'Алеша'},
                {id: 2, name: 'Володя'},
                {id: 3, name: 'Анюта'},
                {id: 4, name: 'Федя'},
                {id: 5, name: 'Вика'},
                {id: 6, name: 'Леся'},
                {id: 7, name: 'Зина'}
            ],
            messages: [
                {id: 1, message: 'hello there'},
                {id: 2, message: 'How r u doing?'},
                {id: 3, message: 'No comprende'}
            ],
            newMessageText: 'qwe'
        }
    },
    _callSubscriber(state: any) {
    },
    subscribe(observer: any) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },

    dispatch(action: any) {
        if (action.type === ADD_POST) {
            let newMessage = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            }
            this._state.profilePage.posts.push(newMessage)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPADATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newPostText
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageText = action.body
            this._callSubscriber(this._state)
        } else if (action.type === SEND_MESSAGE) {
            const body = this._state.dialogsPage.newMessageText
            this._state.dialogsPage.messages.push({id: 5, message: body})
            this._state.dialogsPage.newMessageText = ''
        }
    }

}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostActionCreator = (text: string) => ({
    type: UPADATE_NEW_POST_TEXT,
    newPostText: text
})

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const newMessageBodyActionCreator = (body:string) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
})
