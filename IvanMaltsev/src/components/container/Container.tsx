import { FC, ReactNode } from 'react'
import style from './Container.module.css'

type PropTypes = {
  children: ReactNode
}

export const Container: FC<PropTypes> = ({ children }) => (
  <div className={style.Container}>{children}</div>
)
