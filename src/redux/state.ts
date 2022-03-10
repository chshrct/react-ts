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
    getState(){
        return this._state
    },
    _callSubscriber(state:any){},
    newPostTextEdit(s: string){
        this._state.profilePage.newPostText = s
        this._callSubscriber(this._state)
    },
    addPost(){
        let newMessage = {
            id: 3,
            message: this._state.profilePage.newPostText,
            likeCount: 0
        }
        this._state.profilePage.posts.push(newMessage)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)

    },
    subscribe(observer:any){
        this._callSubscriber=observer
    }
}
