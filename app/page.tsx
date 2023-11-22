'use client';

import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import dynamic from 'next/dynamic'

function Home() {
  console.log(window.innerWidth)
  return (
    <div>
      <div className="bg-zinc-950 h-screen flex flex-col content-center items-center bg-cover bg-center justify-between" style={{ backgroundImage: "url('/6281053.jpg')" }}>
        <div className='mt-40'>
          <h1 className="text-[#00282A] font-bold lg:text-8xl text-3xl sm:text-6xl">THE LAKE FESTIVAL</h1>
          <h2 className="text-[#00282A] font-bold lg:text-4xl text-center text-xl sm:text-3xl">Les 14 & 15 Juin 2024</h2>
        </div>

        <FlipClockCountdown
          to={1718398052000}
          labels={['Jours', 'Heures', 'Minutes', 'Secondes']}
          labelStyle={window.innerWidth >= 640 ? { fontSize: 20, fontWeight: 800, color: '#00282A' } : { fontSize: 12, fontWeight: 800, color: '#00282A' }}
          digitBlockStyle={window.innerWidth >= 640 ? { width: 40, height: 70, fontSize: 50 } : { width: 25, height: 35, fontSize: 25 }}
          dividerStyle={{ color: 'transparent', height: 1 }}
          separatorStyle={{ color: '#00282A', size: '6px' }}
          duration={0.5}
          className='mt-10'
        >
          Finished
        </FlipClockCountdown>

        <div>
          <p className="text-center text-sm max-w-5xl bg-[#00282A] p-4 mx-4 rounded-lg bg-opacity-80 lg:text-xl sm:text-lg lg:p-6">THE LAKE FESTIVAL représente un événement dédié à la promotion d'une culture musicale éco-responsable.
            <br /> Notre mission s'étend au-delà du simple divertissement en visant à sensibiliser à l'importance de la durabilité dans le domaine de l'événementiel. Nous mettons en lumière les initiatives artistiques et engagées au niveau local et régional, encourageons la découverte et le soutien des nouveaux talents musicaux, et contribuons à renforcer la communauté autour de valeurs partagées telles que le respect de l'environnement et la solidarité.
            <br />
            <br />
            <div className="flex flex-row items-center justify-center gap-2 content-center">
              <MailOutlineOutlinedIcon style={window.innerWidth >= 640 ? { fontSize: 32 } : { fontSize: 24 }} />
              <p>Email de contact : piloufournet@gmail.com</p>
            </div>

          </p>
        </div>

        <div className="bottom-0 left-0 right-0 mb-8 mx-auto max-w-xl border rounded bg-[#D7F7F6] py-1 bg-opacity-20 px-2 text-center">
          <h1 className="text-white font-medium lg:text-base text-sm">©2023 THE LAKE FESTIVAL - Pierre-Louis FOURNET. All Rights Reserved.</h1>
        </div>

      </div>
    </div>
  )
}


export default dynamic(() => Promise.resolve(Home), {
  ssr: false
})