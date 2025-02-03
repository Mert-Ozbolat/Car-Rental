import { FC } from 'react'
import { ICar } from '../../types'

type Props = {
    car: ICar
}

const Info: FC<Props> = ({ car }) => {
    return (
        <div className='w-full text-black'>
            <div>
                <img src="steering-wheel.svg" alt="" className='w-[25px]' />
                <p>{car.trany}</p>
            </div>
            <div>
                <img src="tire.svg" alt="" className='w-[25px]' />
                <p>{car.drive}</p>
            </div>
            <div>
                <img src="calendar.svg" alt="" className='w-[25px]' />
                <p>{car.drive}</p>
            </div>
        </div>
    )
}

export default Info