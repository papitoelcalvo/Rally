import { NextPage } from 'next'

interface Props {}

const Rally: NextPage<Props> = ({}) => {
  return <div className=''>
    <div className='w-full h-[100vh] pt-[10vh]'>
        <div className='w-full h-[90vh] bg-black'></div>
    </div>
    <div className='w-full h-[100vh] pt-[10vh]'>
        <div className='w-full h-[90vh] bg-black'></div>
    </div>
    <div className='w-full h-[100vh] pt-[10vh]'>
        <div className='w-full h-[90vh] bg-black'></div>
    </div>
  </div>
}

export default Rally