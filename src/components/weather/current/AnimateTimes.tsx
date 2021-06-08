import { FC } from 'react'
import style from './AnimateBlock.module.css'

type PropTypes = {
  reverse?: boolean
  animate?: boolean
}

export const AnimateTimes: FC<PropTypes> = ({ reverse = false, animate = true }) => (
  <div
    className={[
      style.AnimateBlock,
      animate ? style.Animate : '',
      reverse ? style.AnimateBlockReverse : '',
    ].join(' ')}
  >
    <div />
    <div />
    <div />
  </div>
)
