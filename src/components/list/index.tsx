import { FC, useEffect, useState } from 'react'
import { ICar } from '../../types'
import { fetchCars } from '../../utils/service'
import Warning from './warning'



const List: FC = () => {


    const [cars, setCars] = useState<ICar[]>([])
    const [error, setError] = useState<string | null>(null)


    useEffect(() => {
        fetchCars()
            .then((data) => setCars(data.results))
            .catch((err) => setError(err.message))
    }, [])

    if (!cars) return <Warning />
    if (error) return <Warning />
    if (cars.length < 1) return <Warning />

    return (
        <div>
            <section>
                {
                    cars.map((cars, i) => (
                        <div key={i}>Kart</div>
                    ))
                }
            </section>
        </div>
    )
}

export default List