# Motion One React Component

A **declarative** react component for the **Motion One** animaion library.

## How to use
Use it as a React Component.

```jsx
import { spring } from 'motion';

<MotionOne
  animation={{
    x: 200,
  }}
  transition={{
    duration: 1,
    easing: spring(),
  }}
>
  <p>This child has an animation</p>
</MotionOne>
```

## Dependency
[Motion One](https://motion.dev/)

### Happy Building ♡
