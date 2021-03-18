# Summary

[![CircleCI](https://circleci.com/gh/thegrymek/war3-another-overlay.svg?style=shield)](https://app.circleci.com/pipelines/github/thegrymek/war3-another-overlay)


`warcraft3-another-overlay` is another warcraft 3 overlay to use in tools like obs. Overlay depends on [war3observer](https://github.com/sides/war3observer) that gathers data from game using observer API.

Usage of this tool is limited to watching replays and spactate games. It's limitation of Warcraft3 Observer API rather than this overlay.


# Roadmap

0.1 - We are still not here
- [x] setup ci and add one task: lint
- [x] cleanup todo lines
- [x] remove config file and use theme everywhere
- [x] move fonts to public
- [x] add changelog
- [x] release build

0.2
- [ ] show current units in navbar
- [ ] show upgrades in navbar. Group upgrades by ranged, melle, casters. 
- [ ] add black blur on colddown text
- [ ] increase healthbar, manabar, expbar height. Use black background instead of white. Try to add text in bars with current / max information.
- [ ] if hero hasnt picked ability, show plus icon
- [ ] add license badge
- [ ] add version badge

0.3
- [ ] add animation if new element appears or disapears
- [ ] add icon to hero level and remove black gradient
- [ ] add notification about new build or new upgrade at the bottom

0.4
- [ ] add new navbar at the middle with some configurable title
- [ ] add 2v2 mode


# Development

Dependencies:
* node - download from official page: https://nodejs.org/en/
* war3observer - download from newest tag zip: https://github.com/sides/war3observer/tags


After download `war3observer` unzip and copy warcraft3 icons to 

```bash
war3-another-overlay/public/assets/icons
```

Installation

```bash
$ npm install
```

To run overlay in browser run in order:
1. run a game and go with some replay
2. run `war3observer.exe`
3. run command to build `scss` file: `yarn run build:tailwind`

You are ready to go!

```bash
$ npm run start
```

Try out also storybook!

```
$ npm run storybook
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
