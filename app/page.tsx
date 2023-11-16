'use client';

import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import dynamic from 'next/dynamic'

function Home() {
  console.log(window.innerWidth)
  return (
    <div>
      <div className="bg-zinc-950 h-screen flex flex-col content-center items-center bg-cover bg-center" style={{ backgroundImage: "url('/6281053.jpg')" }}>
        <div className='mt-40'>
          <h1 className="text-[#00282A] font-bold lg:text-8xl text-3xl sm:text-6xl">THE LAKE FESTIVAL</h1>
          <h2 className="text-[#00282A] font-bold lg:text-4xl text-center text-xl sm:text-3xl">Les 14 & 15 Juin 2024</h2>
        </div>

        <FlipClockCountdown
          to={1718398052000}
          labels={['Jours', 'Heures', 'Minutes', 'Secondes']}
          labelStyle={ window.innerWidth >= 640 ? { fontSize: 20, fontWeight: 800, color: '#00282A' } : { fontSize: 12, fontWeight: 800, color: '#00282A' }}
          digitBlockStyle={window.innerWidth >= 640 ? { width: 40, height: 70, fontSize: 50 } : { width: 25, height: 35, fontSize: 25 }}
          dividerStyle={{ color: 'transparent', height: 1 }}
          separatorStyle={{ color: '#00282A', size: '6px' }}
          duration={0.5}
          className='mt-10'
        >
          Finished
        </FlipClockCountdown>


        <div className="flex flex-row items-center gap-2 my-10 bg-[#82B22B] rounded px-6 py-2 ">
          <MailOutlineOutlinedIcon style={window.innerWidth >= 640 ? { fontSize: 32 } : { fontSize: 24}} />
          <a href="mailto:piloufournet@gmail.com" className='lg:text-2xl font-medium text-sm sm:text-2xl'>Nous contacter</a>

        </div>

        <div className="fixed bottom-0 mb-8 border rounded bg-[#D7F7F6] py-1 bg-opacity-20 px-2 ">
          <h1 className="text-white font-medium lg:text-base text-sm text-center sm:text-1xl">©2023 THE LAKE FESTIVAL - Pierre-Louis FOURNET. All Rights Reserved.</h1>
        </div>
      </div>
    </div>
  )
}


export default dynamic(() => Promise.resolve(Home), {
  ssr: false
})