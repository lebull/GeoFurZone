import React from "react";

export const Summary = ({title, summary, link, linkText, image, alt}) => {

    let calculatedLinkText = linkText ? linkText : "Learn More";

    return (
        <div>
            <h2>
                {title}
            </h2>
            { image ? <img src={image} alt={alt}/> : null }
            <summary>
                {summary}
                { link ? <a href={link}><span>{calculatedLinkText}</span></a> : null }
            </summary>
        </div>
    );
}