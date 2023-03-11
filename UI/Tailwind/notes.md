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

`text-decoration-wavy text-decoration-8` These are font decorations.
`truncate` will set eclipse to the end of the fonts.
 
