import {useImage} from 'react-image'

export default function Images({link, classes}) {
    const {src} = useImage({
      srcList: link,
    })
  
    return <img src={src} className="classes"/>
  }
  