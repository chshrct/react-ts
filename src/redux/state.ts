import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";


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
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state)
    }

}
