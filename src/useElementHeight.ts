import React, {useEffect, useRef, useState} from "react"
import {HeightProperty} from "csstype"

export const useElementHeight = (
  heightState: any,
  customHeight?: HeightProperty<number>,
): [HeightProperty<number>, React.RefObject<any>] => {
  const ref = useRef<any>(null)
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
  return [height,ref]
}
