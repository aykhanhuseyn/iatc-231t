# State management

## useState

### share => prop drilling

```jsx
  const [count, setCount] = useState(0)

  <ChildCoumponent count={count} />
```

## reducer

### useReducer

### [state, dispatch]

### dispatch({ type: Action.Login, payload: { username: '', password: '' } })

## context

### createContext

```js
  const UserContext = createContext({
    username: 'john_doe',
    token: 'someSecretToken'
  })
```

### useContext

```js
const context = useContext(UserContext)
```

### Provider

```jsx
  <BrowserRouter>
    <App />
  </BrowserRouter>
```

## redux
