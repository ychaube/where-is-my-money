import React from 'react'

import './section.styles.scss';

const Section = ({title, sectionLinkTitle, children}) => {
    return (
        <div className="section__container">
            <div className="section__header">
                <h2>{title}</h2>
                <div className="section__link">{sectionLinkTitle}</div>
            </div>
            <div className="section__content">
                {children}
            </div>
        </div>
    )
}

export default Section
