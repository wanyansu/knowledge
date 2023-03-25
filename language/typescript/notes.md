## TypeScript

In most cases, deduce the type for React components by looking at the deduced components *by the editor*.

```tsx
const NameBadge = (props: { name: string }): JSX.Element => {}
```

```tsx
type ControlPanelProps {
    name: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
  }

type AdminControls = ControlPanelProps & { isAmin: true }

const ControlPanel = ({ name, onChange }) => {]}
```

**If using Interface instead of Type:**

```tsx
interface ControlPanelProps {
    name: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
  }

interface SpecialControlPanelForAdminOnly extends ControlPanelProps {
    isAdmin: true;
  }
```

*How to set up type for 'children' as props:*

```tsx
type BoxProps = PropsWithChildren<{
    style: React.CSSProperties 
  }>

const Box = ({ children, style }: BoxProps) => {}

// import from react

// alternatively, use ReactNode
type BoxProps = { children: React.ReactNode }; 
```
*For a button:*


```tsx
type ButtonProps = React.ComponentPropsWithoutRef<'button'>;
// this includes all html elements

const Button = ({ children, onClick, type }: ButtonProps) => {
  return (
    <button onClick={onClick} type={type}>
      {children}
    </button>
  );
};
```

*About useState:*

```tsx
const [count, setCount] = useState(0);
const [draftCount, setDraftCount] = useState(count);

<form onSubmit = {(e) => {
  e.preventDefault();
  setCount(draftCount);
  }}
  >
  <input 
    type="number"
    value={0}
    onChange={(e) => setDraftCount(e.target.valueAsNumber)}
  />
  <button type="submit">Update Counter</button>
</form>
```
