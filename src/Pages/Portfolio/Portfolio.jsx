import React, { useState } from 'react';
import PageHeaderContent from '../../PageHeaderContent/PageHeaderContent';
import { IoMdContact } from 'react-icons/io'
import './Portfolio.scss'
import image1 from '../../images/My-Flix.png'
import image2 from '../../images/Fitness-Exercise.png'
import image3 from '../../images/ZET.png'
import image4 from '../../images/CarToys-Home.png'
import image5 from '../../images/Art-Craft-School-Home.png'
import image6 from '../../images/Chines-Food-Restaurant-Home.png'
import image7 from '../../images/Car-Doctor.png'
import image8 from '../../images/Travel-.png'
import { Link } from 'react-router-dom';

const portfolioData = [
  {
    id : 3,
    name : 'Movie Site',
    image : image1,
    link:'https://netflix-aa6bc.web.app/'
  },
  {
    id : 3,
    name : 'Fitness Site',
    image : image2,
    link: 'https://gfe-web.netlify.app/'
  },
  {
    id : 3,
    name : 'Tavel Agency',
    image : image8,
    link:'https://world-travel1-website.netlify.app/'
  },
  {
    id : 3,
    name : 'Promotion Site',
    image : image3,
    link:'https://zet-web.netlify.app/'
  },
  {
    id : 2,
    name : 'Restaurant Site',
    image : image6,
    link:'https://chines-food-restaurant.web.app/'
  },
  {
    id : 2,
    name : 'Car Site',
    image : image4,
    link:'https://toy-car-395e4.web.app/'
  },
  {
    id : 2,
    name : 'ArtSchool Site',
    image : image5,
    link:'https://art-school-cbe01.web.app/'
  },

  {
    id : 2,
    name : 'Car Service Site',
    image : image7,
    link:'https://car-doctor-455db.web.app/'
  },

]

const filterData = [
  {
    filterId : 1,
    label : 'All'
  },
  {
    filterId : 2,
    label : 'Development'
  },
  {
    filterId : 3,
    label : 'Design'
  }
]



const Portfolio = () => {

  const [filteredValue , setFilteredValue] = useState(1)
  const [hoverValue , setHoverValue] = useState(null)

  function handelClick(currentId){
     setFilteredValue(currentId)
  }

  function handleHover(index){
     setHoverValue(index)
  }

  console.log(hoverValue)

  const filteredItems = filteredValue === 1 ? portfolioData : portfolioData.filter(item=>item.id === filteredValue)


  return (
    <section id='portfolio' className='portfolio'>
      <PageHeaderContent headerText ='My Portfolio' icon={<IoMdContact size={40}/>}></PageHeaderContent>
      
      <div className='portfolio__content'>
        <ul className='portfolio__content__filter'>
          {
            filterData.map((item)=>(
              <li className={item.filterId === filteredValue ? 'active' : ''} onClick={()=>handelClick(item.filterId)} key={item.filterId}>
                {
                  item.label
                }
              </li>
            ))}
        </ul>
        <div className='portfolio__content__cards'>
          {
            filteredItems.map((item,index)=>(
              <div className='portfolio__content__cards__item' key={`cardItem${item.name.trim()}`} onMouseEnter={()=>handleHover(index)} onMouseLeave={()=>handleHover(null)}>
               <div className='portfolio__content__cards__item__image-wrapper'>
                <a href="">
                  <img alt={item.name} src={item.image}/>
                </a>

               </div>
               <div className='overlay'>
                   {
                    index === hoverValue && (
                      <div>
                        <p>{item.name}</p>
                        <Link to={item.link} target='_blank'><button>Visit</button></Link>
                      </div>

                    )
                   }
               </div>
              </div>
            ))}

        </div>
      </div>
    </section>
  );
};

export default Portfolio;