# The Sound of Numbers
A simple number-to-note web application. The idea is to take a string of digits and map them to various musical modes in selected keys and then play back the stream at the tempo of your choosing. Includes a handful of well-known mathematical constants for fun, including Pi, e, gamma, root 2 and 5 and base-12 Pi. The latter allows an onto mapping of the chromatic scale.

The application uses ToneJS which is a wrapper around the browser audio player.

Demo [https://www.andrewlienhard.io/soundofnumbers/](https://www.andrewlienhard.io/soundofnumbers/)

One such sequence [https://www.youtube.com/watch?v=rN3uKiyFMRk](https://www.youtube.com/watch?v=rN3uKiyFMRk)

The basis for this app is described in more detail here: [https://www.andrewlienhard.io/irrational-composition/](https://www.andrewlienhard.io/irrational-composition/)


## build
`yarn install`

`yarn start` for development

`yarn build` for building

## test

`yarn test` gives this error: ReferenceError: AudioBuffer is not defined

Fixing requires so some sort of mock. Haven't looked into it yet. ToneJs has a solution.
