import React, { FC , ReactNode} from 'react'


const MainWrapper: FC<{children: ReactNode}> = ({children}) => {
  return (
    <div className={`w-full md:max-w-[1200px] md:mx-auto`}>
        {children}
    </div>
  )
}

export default MainWrapper