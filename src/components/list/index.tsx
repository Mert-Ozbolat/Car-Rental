import { FC, useEffect, useState } from 'react'
import { ICar } from '../../types'
import { fetchCars } from '../../utils/service'
import Warning from './warning'
import Card from './card'



const List: FC = () => {


    const [cars, setCars] = useState<ICar[] | null>(null)
    const [error, setError] = useState<string | null>(null)


    useEffect(() => {
        fetchCars()
            .then((data) => setCars(data.results))
            .catch((err) => setError(err.message))
    }, [])

    if (!cars) return <Warning>Yükleniyor...</Warning>
    if (error) return <Warning>Hata</Warning>
    if (cars.length < 1) return <Warning>Veriler Bulunamadı...</Warning>

    return (
        <div className='padding-x max-width'>
            <section className='home-cars-wrapper'>
                {
                    cars.map((car, i) => (
                        <Card key={i} car={car} />
                    ))
                }
            </section>
        </div>
    )
}

export default List