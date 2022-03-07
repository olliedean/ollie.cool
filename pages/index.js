import { faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head'
import Image from 'next/image'
import SocialBadge from '../components/SocialBadge'
import SpotifyWidget from '../components/SpotifyWidget'

export default function Home() {
  return (
    <div className="w-full">
      <div className="h-full flex items-center">
        <div className="sm:flex sm:flex-row items-center w-full">
          <div className="flex-auto text-center sm:text-left">
            <span className="text-2xl font-bold">👋 hiya, i'm ollie</span>
            <p>
              a freelance fullstack developer based in&nbsp;
              <a href="https://www.google.com/maps/place/Lincoln/@53.2182753,-0.6255359,12z/data=!3m1!4b1!4m5!3m4!1s0x48780ccb711104fb:0x36603dcfe8c7ddc7!8m2!3d53.230688!4d-0.540579" target="_blank">lincoln, uk.</a>
              <br />
              <SocialBadge link="https://github.com/olliedean" hoverColor="text-gray-500" className="hover:text-gray-700">
                <FontAwesomeIcon icon={faGithub} />
              </SocialBadge>
              <SocialBadge link="https://instagram.com/olliedeannn" hoverColor="text-red-400">
                <FontAwesomeIcon icon={faInstagram} />
              </SocialBadge>
              <SocialBadge link="https://twitter.com/Zenternal" hoverColor="text-sky-500">
                <FontAwesomeIcon icon={faTwitter} />
              </SocialBadge>
            </p>
          </div>
          <div className="flex-auto mt-4 sm:mt-0">
            <SpotifyWidget />
          </div>
        </div>
      </div>
      <div className="hover:text-gray-500 hover:text-red-400 hover:text-sky-500" aria-label="don't question it"></div>
    </div>
  )
}
