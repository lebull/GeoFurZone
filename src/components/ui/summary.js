import React from "react";
import styled from "styled-components";

export const Summary = ({title, summary, link, linkText, image, alt}) => {

    const Summary = styled.div`
        padding: 10%;
    `;

    const ImageWrapper = styled.div`
        height: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `;

    const Image = styled.img`
        display: block;
        max-width: 100%;
        max-height: 100%;
    `;

    let calculatedLinkText = linkText ? linkText : "Learn More";

    return (
        <Summary>
            <h2>
                {title}
            </h2>
            <ImageWrapper>
                { image ? <Image src={image} alt={alt}/> : null }
            </ImageWrapper>
            <summary>
                {summary}
                { link ? <a href={link}><span>{calculatedLinkText}</span></a> : null }
            </summary>
        </Summary>
    );
}