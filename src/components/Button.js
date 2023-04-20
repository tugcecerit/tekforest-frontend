import React from "react";
import { Link } from "react-router-dom";
import './Button.css';

const Button = (props) => {
    const { to, label } = props;
    return (
        <button>
            <Link to={to} className='link'>{label}</Link>
        </button>
    )
}

export default Button;
