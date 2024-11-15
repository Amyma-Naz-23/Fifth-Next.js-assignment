import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center' >
            <div>
                <h2 data-aos="zoom-in-up" className='text-4xl md:text-5xl'>Technologies I work with</h2>
                <p className='text-gray-500 pt-2'data-aos="zoom-in-up">
                    I have a solid foundation in web development, specializing in HTML, CSS and Typescript. My experience extend to useing frameworks like React and Next.js to create dynamic and use friendly applications. I'm also proficent in Tailwind CSS for efficient styling and design. With a passion for learning, I stay updated on the latest technologiest to enhance Skill set and contribute effectively to Projects.
                </p>
            </div>
            <div>
               <div className='grid grid-cols-2 text-red-500 text-3xl sm:text-4xl'>
                <div className='space-y-2'data-aos="zoom-in-up">
                    <h2>HTML</h2>
                    <h2>Typescript</h2>
                    <h2>React.js</h2>
                    <h2>Next.js</h2>
                
                </div>

                <div className='space-y-2'data-aos="zoom-in-up">
                    <h2>CSS</h2>
                    <h2>Tailwind CSS</h2>
                    <h2>Node.js</h2>
                    <h2>Figma</h2>
                
                </div>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default Skills