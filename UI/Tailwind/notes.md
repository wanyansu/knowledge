## Tailwind CSS

#### Setups

```
module.exports = {
    theme: {
        extend: {
            colors: {
                vuejs: {
                    100: "#49e659",
                  }
              },
            fontSize: {
                sm: "2rem",
              },
          }
      },
  plugins: [],
}
```

Without using the extend object, the color entered will override the default colors.

<br>

```
spacing: {
    '1': '100px',
  }
```

In this case, if I use `mb-1` className, the margin below will be 100 pixels.

<br>

```
@layer base {
    html {
        @apply bg-slate-600 text-white text-lg font-bold;
        font-family: 'Inter', sans-serif;
      }
  }
```

This will apply the tailwind styles to the default global css.

<br>

#### Styles

`text-decoration-wavy text-decoration-8` These are font decorations.
`truncate` will set eclipse to the end of the fonts.

<br>

`flex-none` will make an item not flex. `grow` will make sure an item grows to its maximum possible width.

`col-span-2` will ensure a div takes two spaces instead of one for the coloumns allocated in a row using 'grid'. A maximum span number is the maximum columne in a row plus some random space.

`col-start-{n}` will determine from which column a component should start. `col-end-{n}` is the opposite.

With `auto-cols-max`, you do not define the numbers of columns (similar to flex), the children columns' width is determined by the contents of the columns.

`grid-rows-4` will makes the children contents appear vertically up to the fourth one.

`grid-flow-row-dense` will automatically fills the empty space if some of its children components are using several spans.

<br>

#### Layouts

`container` className has a max-width of 1,536 pixels. It adjusts the width responsively. It is usually used with `mx-auto` `p-4`.

A common setup:
```
theme: {
    container: {
        center: true,
      }
  }
```

<br>

`column-3` in parent element will separate contents to three columns.

If using `float-left` or `float-right`, texts will wrap around the component. Use `clear-left` className on texts to ensure they appear right under the item that is floating on the left.

For `absolute` position, to adjust t/b/l/r, use the `inset-x-0` default classNames or the `top-0`.

`object-left-bottom` is used to control the location of itself to be shown

#### Borders

`divide-cyan-300` and `divide-x-2` will create the borders in-between elements. If a reverse is used in flex, add the `divide-2-reverse` to ensure they are placed correctly.

Use `outline-none` to cancel out any outlines. `outline-offset-4` will created an empty space between the outline and the element.

`ring-4` will create a shadow surrounding an element. This ring can be styled and coloured.

#### Effects

`blur-md` adds a blurry filter on top of an existing element (img).

`bg-cyan-500/50` adds 50% opacity.

`brightness-100` can set the brightness of the element. `contrast-100`, `greyscale-0` and `drop-shadow` are all self explanatory. For the full list of the filter effects, refer to [here](https://tailwindcss.com/docs/blur)

#### Animations

Use `transition` class with the `hover:-translate-y-1` in the same component to create a hover effect.

`delay-50` determines how many milliseconds before something happens. `duration-100` determines the length of the time.

Some default animation effects are `animate-spin`, `animate-ping` (notifications), `animate-pulse` (skeletons) and `animate-bounce`.

`origin-top-left` and `rotate-45` can be used together and the origin position determines the pivotal point at which the element rotates.

`skew-y-12`

<br>

#### Design Systems

**By Default, tailwind wipes out the styling differences for h1, h2, h3 etc.**

To ensure components are reusable, go to `global.css`:

```css
@layer base {
    html {
        color: red;
      }

    h1 {
        @apply mb-2 text-3xl font-bold;
      }

    a {
        @apply underline text-blue-600 hover:text-purple-500 transition decoration-wavy;
      }
    
    input,
    select {
        @apply text-slate-500 border border-slate-300 p-1 rounded-sm outline-none mb-1;
      }

    input[type="text"] {
        @apply disabled:bg-slate-100 placeholder:italic;
      }

    input[type="checkbox"] {
        @apply p-2 accent-purple-500 mr-1;
        // `appearance-none` will remove the stylings for the default checkbox, however, it also removes the check tick.
      }

    label {
        @apply text-sm text-slate-700 font-medium leading-4;
        // This is fine tuning the design of a checkbox so that it is aligned to the first line of fonts.
        // <div className="flex items-start my-4"><input /><label></label></div>
      }

    select {
        @apply pr-8;
      }

    .btn {
        @apply px-4 py-2 rounded-lg hover:transition hover:duration-300 hover:opacity-80 disabled:bg-slate-400/40 hover:disabled:opacity-100;
      }

    .btn-primary {
        @apply bg-blue-600 hover:bg-blue-500 text-white;
      }

    .btn-secondary {
        @apply bg-slate-800 text-white;
      }
  }
```
<br>

*Special* - Customised Select Menu:

```tsx
<div className="Select">
  <div className="flex items-center justify-between child" onclick={() => setIsOpen(!isOpen)}>
    <span>{selectValue}</span>
    <div className={isOpen ? "rotate-180 transition": "rotate-0"}>
      <ArrowDown />
    </div>
  </div>
  {isOpen && (
    <div>
      <ul>
        <li className="child" onClick={() => updateValue("Option 1")}>
          Option 1
        </li>
        <li className="child" onClick={() => updateValue("Option 2")}>
          Option 2
        </li>
        <li className="child" onClick={() => updateValue("Option 3")}>
          Option 3
        </li>
      </ul>
    </div>
  )}
</div>
```

The above ArrowDown svg is downloaded from [this](https://icones.js.org) website.

<br>

```css
.Select {
    @apply w-32 border border-slate-300 rounded outline-none transition inline-block cursor-pointer;
  }

.Select .child {
    @apply text-slate-500 px-2 py-1
  }

.Select ul li {
    @apply hover:bg-slate-100;
  }
```

#### Core Concepts

You can style an element by using `first:pt-0` or `last:pb-0` etc. Before and after pseudo elements are also directly possible.

*Components*

```css
@layer components {
    .card {
        background-color: theme('colors.white');
        border-radius: theme('borderRadius.lg');
        padding: theme('spacing.6');
      }
  }
```

*Custom utilities*

```css
@layer utilities {
    .content-auto {
        content-visibility: auto;
      }
  }
```
