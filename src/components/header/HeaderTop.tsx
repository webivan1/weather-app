import { FC, ReactNode } from 'react'
import { Container } from '../container/Container'
import style from './HeaderTop.module.css'

type PropTypes = {
  children: ReactNode
}

export const HeaderTop: FC<PropTypes> = ({ children }) => (
  <div data-testid="header" className={style.Header}>
    <Container>{children}</Container>
  </div>
)
