import {rerenderEntireThree} from "../render";


export const state = {
    profilePage:{
        posts:[
            {id: 1, message: 'hello', likeCount: 10},
            {id: 2, message: 'hiho', likeCount: 5}
        ],
        newPostText: 'LolXd'
    },
    dialogsPage:{
        users:[
            {id: 1, name: 'Алеша'},
            {id: 2, name: 'Володя'},
            {id: 3, name: 'Анюта'},
            {id: 4, name: 'Федя'},
            {id: 5, name: 'Вика'},
            {id: 6, name: 'Леся'},
            {id: 7, name: 'Зина'}
        ],
        messages:[
            {id: 1, message: 'hello there'},
            {id: 2, message: 'How r u doing?'},
            {id: 3, message: 'No comprende'}
        ]
    }
}

export const newPostTextEdit = (s:string)=>{
    state.profilePage.newPostText=s
    rerenderEntireThree(state)
}

export const addPost = ()=>{
    let newMessage = {
        id:3,
        message: state.profilePage.newPostText,
        likeCount:0
    }
    state.profilePage.posts.push(newMessage)
    state.profilePage.newPostText=''
    rerenderEntireThree(state)

}

