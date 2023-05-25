import React from 'react';

import TextButton from '../components/Buttons/TextButton'
import InstagramButton from '../components/Buttons/InstagramButton'
import ContactCard from '../components/ContactCard'
import Sponsor from '../components/Sponsor'
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <div className='h-[28rem] relative'>
        <Image src={'/images/group.jpg'}
          fill
          alt="Basårsfaddrar"
          className='object-contain'
        />
      </div>
      <h1 className='
      py-6
      mobile:text-3xl mobile:px-8
      '>
        Välkommen Nollan!
      </h1>
      {/* First paragraph */}
      <div className='
      text-left pb-10 px-52 flex flex-col 
      handheld:px-32
      mobile:px-10
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
          url="https://docs.google.com/forms/d/e/1FAIpQLSfZDkA28xAoCHObyb-qLweAkRcDjCUlYVQLFcFU-TnLo2p8tg/viewform" />
        <InstagramButton
          title1="Följ oss på Instagram"
          title2="&nbsp;för fler uppdateringar!" // Non breaking space had to be used because regular space was ignored by HTML
          url="https://www.instagram.com/basaret_norrkoping/" />
      </div>

      {/* Klassföreståndare */}
      <div className='py-10'>
        <h2 className='
        pb-8 
        handheld:text-6xl
        mobile:text-4xl
        thin:text-2xl
        '>Klassföreståndare</h2>
        <div className='
        flex justify-center space-x-10 
        handheld:flex-col handheld:space-y-24
        '>
          <ContactCard
            name='Thomas Bui'
            phone='070-428 97 55'
            email='thobu687@student.liu.se'
            program='Elektronikdesign'
            img_src='/images/thomas.jpg' />
          <ContactCard
            name='Amanda Hult'
            phone='072-749 18 00'
            email='amahu396@student.liu.se'
            program='Medieteknik'
            img_src='/images/amanda.jpg' />
        </div>
      </div>

      {/* Huvudklassfaddrar */}
      <div className='pt-10'>
        <h2 className='
        pb-8 
        handheld:text-6xl
        mobile:text-4xl
        thin:text-2xl
      '>
          Huvudklassfaddrar
        </h2>
        <div className='
        flex justify-center space-x-10 
        handheld:flex-col handheld:space-y-24
        '>
          <ContactCard
            name='Liv Halldén'
            phone='072-176 51 02'
            email='livha714@student.liu.se'
            program='Grafisk Design och Kommunikation'
            img_src='/images/liv.jpg' />
          <ContactCard
            name='Johanna Eklundh'
            phone='072-302 99 10'
            email='johek392@student.liu.se'
            program='Medieteknik'
            img_src='/images/johanna.jpg' />
        </div>
      </div>

      {/* Sponsors */}
      {/* TODO: Fix ICA logo on mobile */}
      <div className="
      flex justify-evenly items-center w-full py-20 px-32
      handheld:px-20 handheld:flex-col handheld:space-y-10
      mobile:px-8      
      ">
        <Sponsor company="ICA" img_src='/images/sponsors/ica.png' className="grow-1 h-48 w-1/3" />
        <Sponsor company="Voyado" img_src='/images/sponsors/voyado.png' className="grow-1 h-48 w-2/3" />
      </div>
    </div>
  )
}
