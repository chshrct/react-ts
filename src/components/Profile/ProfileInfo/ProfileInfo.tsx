import React from "react";
import style from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683__340.png" alt="mountain"/>
            </div>
            <div className={style.descriptionBlock}>

                <img src="https://i.pinimg.com/originals/b8/5f/58/b85f58e2e1e38407f50ea4e2cf30f08f.png" alt="dog"/>
                <div>ava+description</div>
            </div>
        </div>
    )
}