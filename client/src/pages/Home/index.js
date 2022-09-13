import React from 'react'
import Header from '../../components/Header'
import HeroSlider from '../../components/HeroSlider'
import classes from './Home.module.scss'
const Home = () => {
  return (
    <div className={classes.title}>
        <Header />
        <HeroSlider />
    </div>
  )
}

export default Home