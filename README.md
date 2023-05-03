# **Sydney Mapley | Zeller Code Test**

### **Foreword**

**important**

After building out the application, I discovered that stitches does not work with Jest, and subsequently react-testing-library. I attempted to get them working together for a few hours but was unable to remedy this.

I will be refactoring the project to use another css-in-js library so I can provide adequate testing for the application.

**Approach**

I've used Next.js as a foundation for the application as it's the framework I'm most familiar with, for the scale of the test it's absolutely overkill - I just thought I'd approach it in a way that has an apparent scaling path in a real world scenario.

I opted to query the data in getStaticProps over any other method because the brief did specify "best practices for performance optimisation".

I am aware though that in a full application this wouldn't be the correct approach because the data would be dependent on authentication and need to be rendered server side, or client side based on the users authentication status.

As I stated earlier I intended to use react-testing-library for testing, but I was unable to get stitches to work with jest so I will need to refactor the application to use another css-in-js library to provide adequate testing.

I've submitted the application prior to the necessary reworks to include testing as it is in a finished state, but will update as soon as I have a chance to refactor things.

## **Getting started**

### **Relevant documentation**

- [NextJS](https://nextjs.org/docs/getting-started)
- [Stitches - Styled Components](https://stitches.dev/docs/installation)
- [Framer Motion](https://www.framer.com/docs/)
- [Apollo Client](https://www.apollographql.com/docs/react/get-started/setup/installation)
- [GraphQL](https://graphql.org/learn/)

### **Initial Setup**

- run `nvm use` to use the required node version
- run `yarn`
- duplicate `.env.example` to `.env` and populate with appropriate values
- run `yarn dev` to start your local environment

### **Stitches - Styled Components**

There's a few reasons I've decided to go with stitches for the styled components over emotion like we have in previous projects, some of which being;

- Better runtime performance
- Has built in theming, previously I had paired `styled-system` with `emotion` to achieve a similar result
- Custom util support, for things like creating shorthand for css properties, e.g. `px: 16` vs `padding-left: 16, padding-right: 16`. In the past I did this with styled-system but couldn't expand on them, at this current point in time I've included all the short hand from styled-system in the theme config (`styles/stitches.config.tsx`), any future utils can be added here as well.
- Token based system for css values
- And what sold me on making the switch in the first place, component variants. I will elaborate on why, and how it works below.

**Stitches variants overview**

Variants are how stitches handles props getting passed to the component. you define them inside the styled component along with the rest of your styles, and once defined you can now use props on the component to determine the variant to be used for the component. Here is a simple example of how it works, full documentation will also be linked.

```javascript
const Button = styled("button", {
  // universal styles that apply to all variants
  px: 16,
  py: 8,
  cursor: "pointer",
  "&:hover": {
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
  },
  variants: {
    theme: {
      dark: {
        bg: "#1a1a1a",
        color: "#fff",
      },
      light: {
        color: "#1a1a1a",
        bg: "#fff",
      },
    },
  },
});

export const Example = () => {
  return (
    <>
      <Text as="h3" variant="Body-Regular">
        {" "}
        Button Example{" "}
      </Text>
      <Button theme="dark">Button</Button>
    </>
  );
};
```

You can also specify styling for when multiple variants are used together if the pairing results in a different look than those variants being used individually, these are called compound variants and you define these in a similar way to regular variants, just with an added step of specifying which variants result in that style.

```javascript
const Button = styled("button", {
  // universal styles that apply to all variants
  px: 16,
  ...
  variants: {
    theme: {
      dark: {...},
      light: {...},
    },
    scale: {
      lg: {...},
      md: {...}
    }
  },
  compoundVariants: [
    {
      theme: 'dark',
      scale: 'lg',
      css: {
        //styling that applies to the button when passed props for theme, and scale.
        ...
      }
    }
  ]
})
```

On top of this you can also set the default variants for the component, so when no props are passed it will default to the specific styling of your choice, default variants just slow in at the end of the styled component;

```javascript
defaultVariants: {
  theme: 'light',
  scale: 'md',
}
```

This is just a brief rundown on how the variants work, for a more in depth look you can find it [here](https://stitches.dev/docs/variants).

### **Framer Motion - Animation Library**

framer motion is a powerful animation library to handle animations in the site. For simple effects css animation is perfectly fine, but I strongly encourage utilising framer when trying to do anything more involved. It provides really elegant syntax, the ability to control the animation based on state changes, specialised user interactions, and when used correctly will run animations at a stable 60fps.

There's a lot to go over with framer, but as it's not a necessity in the project, I will just link the documentation [here](https://www.framer.com/docs/).
