# Summary

`warcraft3-another-overlay` is another warcraft 3 overlay to use in tools like obs. Overlay depends on [war3observer](https://github.com/sides/war3observer) that gathers data from game using observer API.



# Development

Dependencies:
* node - download from official page: https://nodejs.org/en/
* war3observer - download from newest tag zip: https://github.com/sides/war3observer/tags


After download `war3observer` unzip and copy warcraft3 icons to 

```bash
war3-another-overlay/public/asserts/icons
```


Installation

```bash
$ yarn install
```

To run overlay in browser run in order:
1. run a game and go with some replay
2. run `war3observer.exe`
3. run command to build `scss` file: `yarn run build:tailwind`

You are ready to go!

```bash
$ yarn run start
```

Try out also storybook!

```
$ yarn run storybook
```

it should open new tab in your browser. There you can test components
separately using some fake data.


# Contribute

1. Fork repository on GitHub to start making your changes to the main branch (or branch off of it).
2. Write tests in storybook that prove that bug or future works as expected
3. Check your code
4. Send a pull request!


# License

War3-another-overlay is under MIT license, see LICENSE for more details.
