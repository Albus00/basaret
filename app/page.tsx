import React from 'react';

import TextButton from '../components/Buttons/TextButton'
import InstagramButton from '../components/Buttons/InstagramButton'
import ContactCard from '../components/ContactCard'
import Sponsor from '../components/Sponsor'
import Image from 'next/image';

export default function Page() {
  // Randomize the visibility for the sponsor logo that has only paid for the "slumpad" tier
  const logoVisible = Math.random() < 0.5;

  return (
    <div className="flex-1">
      <Image src={'/images/group-desktop.jpg'}
        width={2500}
        height={782}
        sizes="100vw"
        priority
        unoptimized={true}    // Hidden gem setting
        alt="Basårsfaddrar"
        className='object-contain'
      />
      <h1 className='py-6'>
        Välkommen Nollan!
      </h1>
      {/* First paragraph */}
      <div className='
      text-left pb-10 px-52 flex flex-col 
      handheld:px-32
      mobile:px-6
      '>
        <p className='
        text-xl text-justify pb-2
        mobile:text-lg
        thin:text-base
        '>
          På denna sida hittar Nollan information om vad som händer under första veckan på Linköpings Universitet, den så kallade ”Nolle-veckan”.
          Nolle-veckan består av både undervisning och roliga aktiviteter där alla Basårsnollan får chans att lära känna varandra. Aktiviteterna är såklart
          frivilliga, men vi hoppas att du vill vara med på så mycket som möjligt, Nollan!
          <br /><br />
          Viktigt att veta är att Linköpings Universitet tar kraftigt avstånd från förnedrande och kränkande nollningar som Nollan kanske hört talas om. Syftet
          med denna vecka är att ge Nollan en rolig start på basåret och en introduktion till livet som universitetsstudent! Vi som kommer att ta hand om dig
          under denna roliga period är en frisk blandning av studenter från olika tekniska utbildningar här på Campus Norrköping. För att se till så att du får
          en så bra start på studentlivet som möjligt kommer vi faddrar att vägleda dig genom din första vecka av studier och roliga aktiviteter.
          <br /><br />
          Det ska bli kul att ses!
        </p>
        <TextButton
          title="Glöm inte att fylla i nolle-enkäten!"
          url="https://forms.gle/wUThKNrecHkqgZcU8" />
        <InstagramButton
          title1="Följ oss på Instagram"
          title2="&nbsp;för fler uppdateringar!" // Non breaking space had to be used because regular space was ignored by HTML
          url="https://www.instagram.com/basaret_norrkoping/" />
      </div>

      {/* Klassföreståndare */}
      <div className='py-10'>
        <h2>Klassföreståndare</h2>
        <div className='
        flex justify-center
        handheld:flex-col handheld:space-y-24
        '>
          <ContactCard
            name='Josephine Zettervall'
            phone='0725286711'
            email='josze195@student.liu.se'
            program='Medieteknik' />
          <ContactCard
            name='Amanda Hult'
            phone='072-749 18 00'
            email='amahu396@student.liu.se'
            program='Medieteknik' />
        </div>
      </div>

      {/* Huvudklassfaddrar */}
      <div className='pt-10'>
        <h2>Huvudklassfaddrar</h2>
        <div className='
        flex justify-center
        handheld:flex-col handheld:space-y-24
        '>
          <ContactCard
            name='Gustaf Kronholm'
            phone='072-399 40 07'
            email='guskr150@student.liu.se'
            program='Medieteknik' />
          <ContactCard
            name='Albin Kjellberg'
            phone='072-246 68 12'
            email='albkj604@student.liu.se'
            program='Medieteknik' />
        </div>
      </div>

      {/* Sponsors */}
      <div className="
      flex flex-wrap justify-evenly items-center w-full py-20 px-32
      handheld:px-20 handheld:flex-col handheld:space-y-10
      mobile:px-8      
      ">
        <Sponsor company="ICA" className="grow-1 h-52 w-1/3 mobile:w-3/5" random={false} />
        <Sponsor company="NAB" className="grow-1 h-48 w-1/3 mobile:w-3/5" random={true} />
        <Sponsor company="Micropower" className="grow-2 h-48 w-2/3 mobile:w-full" random={false} />
      </div>
    </div>
  )
}
