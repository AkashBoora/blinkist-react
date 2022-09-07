import React from 'react'



export interface IconComponentProps{
    src: string ;
    className?: string,
    onClick?: () => void;
    style?: React.CSSProperties,
}

export const IconComponent= (props:IconComponentProps) =>{

  return (
   
    <img  data-testid="icon" src={props.src} alt='BlinkList' className={props.className} style={props.style}/>
    
  )
}

