import axios from "axios";
import React from "react";
import { UsersPropsType } from "./UsersContainer";
import s from './Users.module.css'

class Users extends React.Component<UsersPropsType> {
  
  onPageSelect(page:number){
    this.props.setCurrentPage(page)
    axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
        .then((response) => {
          this.props.setUsers(response.data.items);
        });
  }


  componentDidMount() {
      axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then((response) => {
          this.props.setUsers(response.data.items);
          this.props.setTotalUsersCount(response.data.totalCount)
        });
  }



  render() {

  const pagesCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize) 
  let pages = []
  for(let i =1;i<=pagesCount;i++){
    pages.push(i)
  }
  

    return (
            <div>
        {pages.map(page=><span key={page} className={this.props.currentPage===page?s.selected:''} onClick={()=>this.onPageSelect(page)}>{page}</span>
        )}
        {this.props.users.map((u) => (
          <div key={u.id}>
            <span>
              <div>
                <img
                  src={
                    u.photos.small !== null
                      ? u.photos.small
                      : "https://cdn-icons-png.flaticon.com/512/147/147142.png"
                  }
                  alt="avatar"
                  width={"100px"}
                />
              </div>
              <div>
                {u.followed ? (
                  <button onClick={() => this.props.unfollow(u.id)}>
                    Unfollow
                  </button>
                ) : (
                  <button onClick={() => this.props.follow(u.id)}>
                    Follow
                  </button>
                )}
              </div>
            </span>
            <span>
              <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </span>
              <span>
                <div>{"u.location.country"}</div>
                <div>{"u.location.city"}</div>
              </span>
            </span>
          </div>
        ))}
      </div>
    );
  }
}

export default Users;
