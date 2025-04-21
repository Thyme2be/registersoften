import tupineImg from '../../public/tupine.png';
import Image from "next/image"

const Logo = () => {
  return (
    <Image
      src={tupineImg}
      alt="Picture of the author"
      className=' w-96 '
    />
  )
}

export default Logo
