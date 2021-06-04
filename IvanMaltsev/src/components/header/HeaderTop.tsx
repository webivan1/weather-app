import { FC, ReactNode } from 'react'
import { Container } from '../container/Container'
import style from './HeaderTop.module.css'

type PropTypes = {
  children: ReactNode
}

export const HeaderTop: FC = ({ children }) => (
  <div className={style.Header}>
    <Container>{children}</Container>
  </div>
)
