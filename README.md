* Examples

```ts
export const Toggle = () => {
  const [visible, setVisible] = useState(false)
  return (
    <div style={{border: '1px solid grey'}}>
      <button onClick={() => setVisible(x => !x)}>toggle</button>
      <AutoHeightAnimate state={visible}>
        {visible && <div>Content</div>}
      </AutoHeightAnimate>
    </div>
  )
}
```

```ts
export const Counter = () => {
  const [count, setCount] = useState(1)
  return (
    <div style={{border: '1px solid grey'}}>
      <button onClick={() => setCount(x => x + 1)}>+</button>
      <button onClick={() => setCount(x => Math.max(x - 1, 1))}>-</button>
      <AutoHeightAnimate state={count}>
        {Array(count).fill(0).map((x,i) => <div key={i}>Item {i}</div>)}
      </AutoHeightAnimate>
    </div>
  )
}
```
