import React, { useState, useEffect } from 'react'

import { projectsData, projectsNav } from './Data'

import WorksItems from './WorksItems'

const Works = () => {
    const [item, setItem] = useState({ name:'all' })
    const [projects, setProjects] = useState([])
    const [active, setActive] = useState(0)

    useEffect(() => {
        if(item.name === 'all') {
            setProjects(projectsData)
        }else {
            const newProjects = projectsData.filter((project) => project.category === item.name)
            setProjects(newProjects)
        }
    }, [item])

    const handleClick = (e, index) => {
        setItem({name: e.target.textContent})
        setActive(index)
    }

    return (
        <div>
            <div className="work__filters">
                {
                    projectsNav?.map((item, index) => (
                        <span 
                            className={`${active===index?'active-work':''} work__item`} 
                            onClick={(e) => handleClick(e, index)} 
                            key={index}>{item.name}
                        </span>
                    ))
                }
            </div>

            <div className="work__container container grid">
                {
                    projects?.map(({ id, image, title, category }) => (
                        <WorksItems 
                            id={id}
                            key={id}
                            image={image}
                            title={title}
                            category={category}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Works