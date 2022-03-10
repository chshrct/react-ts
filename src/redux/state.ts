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
            ]
        }
    },
    _callSubscriber(state:any){},
    subscribe(observer:any){
        this._callSubscriber=observer
    },
    getState(){
        return this._state
    },

    dispatch(action:any){
        if(action.type==='ADD-POST'){
            let newMessage = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            }
            this._state.profilePage.posts.push(newMessage)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        }else if (action.type==='UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newPostText
            this._callSubscriber(this._state)
        }
    }

}
