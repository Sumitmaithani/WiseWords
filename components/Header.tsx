import Image from 'next/image'
import { useContext } from 'react'
import Logo from '../static/logo.png'
//import { MediumContext } from '../context/MediumContext'
//import Modal from 'react-modal'
//import { useRouter } from 'next/navigation'
import Link from 'next/link'
//import PostModal from './PostModal'

const styles = {
    wrapper: 'flex justify-center gap-10 p-5 bg-[#FCC017]',
    content: `max-w-7xl flex-1 flex justify-between gap-10`,
    logoContainer: 'flex items-center flex-start',
    logo: 'cursor-pointer object-contain',
    bannerNav: 'flex cursor-pointer items-center space-x-5',
    accentedButton: 'bg-black text-white py-2 px-4 rounded-full',
  }
  

export default function Header() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <Image
            className={styles.logo}
            src={Logo}
            height={40}
            width={200}
            alt=''
          />
        </div>
        {/* {currentUser ?
          ( */}
            <div className={styles.bannerNav}>
              <div>Our Story</div>
              <div>Membership</div>
              <Link href={'/?addNew=1'}>
                <div className={styles.accentedButton}>Write</div>
              </Link>
              <div className={styles.accentedButton}>Get Unlimited Access</div>
            </div>
          {/* )
          :
          ( */}
            {/* <div className={styles.bannerNav}>
              <div>Our Story</div>
              <div>Membership</div>
              <div onClick={handleUserAuth}>Sign in</div>
              <div className={styles.accentedButton}>Get Started</div>
            </div> */}
          {/* )
        } */}
      </div>
      {/* <Modal
        isOpen={Boolean(router.query.addNew)}
        onRequestClose={() => router.push('/')}
        style={customStyles}
      >
         <PostModal/>
      </Modal> */}
    </div>
  )
}
