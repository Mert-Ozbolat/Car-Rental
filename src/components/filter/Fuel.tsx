import { FC } from 'react'

const Fuel: FC = () => {
    return (
        <form className='flex flex-col'>
            <label htmlFor="">Yakıt</label>

            <input type="string"
                placeholder='Fuel Type'
                className='w-24 py-[6px] px-2 rounded-[4px] shadow text-black bg-white'
            />
        </form>
    )
}

export default Fuel