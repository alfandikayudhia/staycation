import React from "react";
import { Link } from "react-dom";
import propTypes from 'prop-types';
export default function button(props) {
    const className = [props.className]
    if(props.isPrimary) className.push("btn-rpimary")
    if(props.isLarge) className.push("btn-lg")
    if(props.isSmall) className.push("btn-sm")
    if(props.isBlock) className.push("btn-block")
    if(props.hasShadow) className.push("btn-shadow")

    // eslint-disable-next-line no-unused-vars
    const onClick =() => {
        if (props.onClick) props.onClick()
    }
    if (props.type === "link"){
        if(props.isExternal){
            return(
                // eslint-disable-next-line react/jsx-no-target-blank
                <a 
                href={props.href} 
                className={className.join("")} 
                style={props.style} 
                target={props.target ==="_blank" ? "_blank" : undefined} 
                rel={props.target ==="_blank" ? "noopener noreferrer": undefined}
                >
                {props.children }</a>
            )
        } else{
            return(
            <Link
                to={props.href}
                className={className.join(" ")}
                style={props.style}
                onClick={onClick}
            >
                {props.children}
            </Link>
            )
        }
    }
    return (<button
            className={className.join(" ")}
            style={props.style}
            onClick={onClick}
            >
                {props.children}
            </button>
    );
}
button.propTypes={
    type: propTypes.oneOf(["button", "link"]),
    onClick: propTypes.func,
    href: propTypes.string,
    target: propTypes.string,
    className: propTypes.string,
    isDisabled: propTypes.bool,
    isLoading: propTypes.bool,
    isSmall: propTypes.bool,
    isLarge: propTypes.bool,
    hasShadow: propTypes.bool,
}