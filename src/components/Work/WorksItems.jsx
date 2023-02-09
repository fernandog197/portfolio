import React from 'react'

const WorksItems = ({ id, image, title, category, url }) => {
    
    return (
        <div className='work__card' key={id}>
            <img src={image} alt="work__img" className='work__img' />
            <h3 className="work__title">{title}</h3>
            <a href={url} target='_blank' className="work__button">
                Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
            </a>
        </div>
    )
}

export default WorksItems