import React from "react";
import style from './Dialogs.module.css'
import {Link} from "react-router-dom";

const Dialogs = (props:any)=>{
return(
    <div className={style.dialogs}>
        <div className={style.dialogItems}>
            <div className={style.dialog + ' ' + style.active}>
                <Link to={'1'}>Алеша</Link>

            </div>
            <div className={style.dialog}>
                <Link to={'2'}>Володя</Link>
            </div>
            <div className={style.dialog}>
                <Link to={'3'}>Анюта</Link>
            </div>
            <div className={style.dialog}>
                <Link to={'4'}>Федя</Link>
            </div>
            <div className={style.dialog}>
                <Link to={'5'}>Вика</Link>
            </div>
            <div className={style.dialog}>
                <Link to={'6'}>Леся</Link>
            </div>
            <div className={style.dialog}>
                <Link to={'7'}>Зина</Link>
            </div>
        </div>
        <div className={style.messages}>
            <div className="message">Hello</div>
            <div className="message">How r u doing?</div>
            <div className="message">No comprende</div>
        </div>
    </div>
)
}


export default Dialogs