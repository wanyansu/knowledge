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
