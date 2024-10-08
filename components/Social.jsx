import Link from "next/link";
import {FaGithub, FaLinkedin , FaTwitter} from "react-icons/fa"
import { SocialIcon } from 'react-social-icons'

const socials= [
    { icon:<FaGithub />, path:''},
    { icon:<FaTwitter />, path:''},
    { icon:<FaLinkedin />, path:''},
]

const Social = ({containerStyles, iconStyles}) => {
  return <div className={containerStyles}>
      {socials.map((item,index) => {
        return (<Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
        </Link>)
      })}
    </div>
  
}

export default Social
