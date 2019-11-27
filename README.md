# Examples

## Using AutoHeightAnimate HOC

```tsx
export const Toggle = () => {
  const [visible, setVisible] = useState(false)
  return (
    <div style={{border: '1px solid grey'}}>
      <button onClick={() => setVisible(x => !x)}>toggle</button>
      <AutoHeightAnimate heightState={visible}>
        {visible && <div>Content</div>}
      </AutoHeightAnimate>
    </div>
  )
}
```

```tsx
export const Counter = () => {
  const [count, setCount] = useState(1)
  return (
    <div style={{border: '1px solid grey'}}>
      <button onClick={() => setCount(x => x + 1)}>+</button>
      <button onClick={() => setCount(x => Math.max(x - 1, 1))}>-</button>
      <AutoHeightAnimate heightState={count}>
        {Array(count).fill(0).map((x,i) => <div key={i}>Item {i}</div>)}
      </AutoHeightAnimate>
    </div>
  )
}
```


## Using useElementHeight hook

```tsx
export const ToggleWithHook = () => {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const height = useElementHeight(ref, visible)
  return (
    <div style={{border: '1px solid grey', padding: 10}}>
      <button onClick={() => setVisible(x => !x)}>toggle</button>
      <div style={{ overflow: 'hidden', transition: 'height 0.3s', height }} >
        <div ref={ref}>
          {visible && <div>Content</div>}
        </div>
      </div>
    </div>
  )
}
```
