import Link from 'next/link'
import { Logo } from "../icons/logo"
import {BrandStyles} from "./styles"


function Brand ({...props}){
  return(
    <Link href="/">
    <BrandStyles {...props}>
      <Logo {...props}/>
      <figcaption><h2>SimplyToDo</h2></figcaption>
    </BrandStyles>
    </Link>
  )
}

export default Brand