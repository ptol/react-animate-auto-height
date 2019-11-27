import React, {useEffect, useState} from "react"
import {HeightProperty} from "csstype"

export const useElementHeight = (
  ref: React.RefObject<HTMLDivElement>,
  heightState: any,
  customHeight?: HeightProperty<number>,
) => {
  const [height, setHeight] = useState<HeightProperty<number>>(0)
  useEffect(() => {
    if (ref.current) {
      setHeight(
        customHeight === undefined || customHeight === "auto"
          ? ref.current.offsetHeight + "px"
          : customHeight,
      )
    }
  }, [heightState])
  return height
}
