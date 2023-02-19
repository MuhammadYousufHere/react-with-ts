<!-- React 18 -->

### React 18

it has really bunch of new features, but the most important one is the new concurrent mode.

useTransition()
useDeferredValue()

-- if you could not wait for the data, you can use useDeferredValue() to get the data as soon as possible.

useTransition() is used to show the loading state.
example code:

```js
const [startTransition, isPending] = useTransition({
  timeoutMs: 3000,
})

function handleClick() {
  startTransition(() => {
    // This update might be batched together with other updates.
    // But if it takes more than 3 seconds, it will be rendered on its own.
    setCount(count + 1)
  })
}
```

### React 18 SSR

-- React 18 SSR is not ready yet, but it will be ready soon.

<--------------------------------------------------------------------------------- -->
