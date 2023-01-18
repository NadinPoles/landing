import React from "react";

const SlickNextArrow = (props: any) => {
    const { onClick } = props;
    return (
        <span className="slider_next" onClick={onClick}><svg width="17" height="30" viewBox="0 0 17 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M0 28.5L1.5 30L16.5 15L1.5 0L0 1.5L13.5 15L0 28.5Z" fill="black"/></svg></span>
    );
}

export default SlickNextArrow