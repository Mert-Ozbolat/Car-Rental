import { FC } from 'react'
import Hero from '../components/hero'
import Filter from '../components/filter'

const Home: FC = () => {
    return (
        <div>
            <Hero />
            <Filter />
        </div>
    )
}

export default Home