import React from "react";

const SlickPrevArrow = (props: any) => {
    const { onClick } = props;
    return (
        <span className="slider_prev" onClick={onClick}><svg width="17" height="30" viewBox="0 0 17 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M17 28.5L15.5 30L0.5 15L15.5 0L17 1.5L3.5 15L17 28.5Z" fill="black"/></svg></span>
    );
}

export default SlickPrevArrow