import React from 'react'
import Svg, {Path} from 'react-native-svg'

import { number } from 'prop-types'

const LogoBasic = ({width, height}) => {
  return (
    <Svg height={height} width={width} viewBox="0 0 1000 1000">
      <Path 
        fill="#29ade4"
        d="M500,59.39c243.34,0,440.61,197.27,440.61,440.61S743.34,940.61,500,940.61,59.39,743.34,59.39,500,256.66,59.39,500,59.39M500,0A500.12,500.12,0,0,0,305.36,960.68,500.11,500.11,0,0,0,694.64,39.32,496.91,496.91,0,0,0,500,0Z"
        />
      <Path 
        fill="#ed2024"
        d="M500,394S444,219,290,291.32c0,0-114.33,67.67-35,219.33s245,259,245,259,165.66-107.33,245-259-35-219.33-35-219.33C556,219,500,394,500,394"
      />
    </Svg>
  )
}

LogoBasic.propTypes ={
  height: number,
  width: number
}

LogoBasic.defaultProps = {
  height: 100,
  width: 100
}

export default LogoBasic

