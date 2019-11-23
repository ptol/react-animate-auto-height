import React, {CSSProperties, useEffect, useRef, useState} from "react"

export const AutoHeightAnimate = (props: {
  state: any
  className?: string
  style?: CSSProperties
  children: React.ReactNode
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)
  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.offsetHeight)
    }
  }, [props.state])
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
