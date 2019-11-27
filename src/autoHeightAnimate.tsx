import React, {CSSProperties, useRef} from "react"
import {HeightProperty} from "csstype"
import {useElementHeight} from "./useElementHeight"

export const AutoHeightAnimate = (props: {
  heightState: any
  height?: HeightProperty<number>
  className?: string
  style?: CSSProperties
  children: React.ReactNode
}) => {
  const [height, ref] = useElementHeight(props.heightState, props.height)
  return (
    <div
      style={{
        height,
        overflow: "hidden",
        transition: "height 0.3s",
        ...props.style,
      }}
      className={props.className}
    >
      <div style={{overflow: "hidden"}} ref={ref}>
        {props.children}
      </div>
    </div>
  )
}
