import { createContext, useState, ReactNode } from 'react';


export type AnimationContextDataProps = {

  animation: any,
  handleGoPageAnimation: (animationSelected: any) => void
}

type animationContextProviderProps = {
  children: ReactNode;
}

export const AnimationContext = createContext<AnimationContextDataProps>({} as AnimationContextDataProps);

export function AnimationContextProvider({ children }: animationContextProviderProps) {

  const [ animation, setAnimation ] = useState([]);

  
  function handleGoPageAnimation(animationSelected: any){
    setAnimation(animationSelected) 
  }

  return (
    <AnimationContext.Provider value={{
      animation,
      handleGoPageAnimation
    }}>
      {children}
    </AnimationContext.Provider>
  )
}