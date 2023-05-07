import Image from 'next/image'


const Loading = () => {
  return (
    <div className='flex items-center justify-center h-screen'><Image priority={true} src="/loading.svg" alt="loading" width={100} height={100}/></div>
  )
}

export default Loading