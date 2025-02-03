import { FC } from 'react'
import { ICar } from '../../types'
import calcPrice from '../../utils/calcPrice'
import Info from './info'
import { motion } from 'motion/react';
import generateImage from './../../utils/generateImage';
import Button from '../button';

type Props = {
    car: ICar
}


const Card: FC<Props> = ({ car }) => {
    return (
        <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className='car-card group'>
            <h2>{car.make} {car.model}</h2>

            <div className='flex mt-6 text-[19]'>
                <span className='font-semibold'>$</span>
                <span className='text-[32px]'>{calcPrice(car)}</span>
                <span className='font-semibold self-end'>/day</span>
            </div>

            <div className='w-full'>
                <img src={generateImage(car)} alt="" className='w-full h-full object-contain' />
            </div>

            <motion.div initial={{ scale: 0.5 }} whileInView={{ scale: 1 }} className='w-full'>
                <div className='hidden group-hover:block'>
                    <Info car={car} />
                </div>
                <div className='hidden group-hover:block'>
                    <Button text='More' designs='w-full text-white' />
                </div>
            </motion.div>

        </motion.div >
    )
}

export default Card