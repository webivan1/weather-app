import { FC } from 'react'
import style from './ReloadBar.module.css'
import { useProgressBar } from './useProgressBar'

type PropTypes = {
  seconds: number
}

export const ReloadBar: FC<PropTypes> = ({ seconds }) => {
  const { second, progressBarWidth } = useProgressBar(seconds)

  return (
    <div data-testid="progress-bar" className={style.Wrapper}>
      <div className={style.Heading}>Reloading in {second < 10 ? `0${second}` : second}s</div>
      <div className={style.Bar}>
        <div
          style={{ transform: `translateX(-${progressBarWidth}%)` }}
          className={style.ProgressBar}
        />
      </div>
    </div>
  )
}
