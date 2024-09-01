import SocialIcon from '@/components/social-icons'
import siteMetadata from '@/data/siteMetadata'

export default function IconBox() {
  return (
    <div className="card bg-blue-pink flex h-[12rem] w-[4rem] items-center justify-center">
      <div className="flex flex-col space-y-5 text-white">
        <SocialIcon kind="github" href={siteMetadata.github} className="text-white" />
        <SocialIcon kind="linkedin" href={siteMetadata.linkedin} className="text-white" />
        <SocialIcon kind="instagram" href={siteMetadata.instagram} className="text-white" />
      </div>
    </div>
  )
}
