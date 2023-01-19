
import React from 'react';
import '../src/scss/tailwind.scss';

import { addDecorator, addParameters } from '@storybook/react';
import {withThemesProvider} from 'storybook-addon-styled-component-theme';
import {theme} from '../src/themes/simple/settings';

const themes = [theme];

const Layout = ({ children }) => {
  return (
    <div className="flex h-auto w-full">
      {children}
    </div>
  )
}

export default Layout;

addDecorator(storyFn => <Layout>{storyFn()}</Layout>);
addDecorator(withThemesProvider(themes));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
addParameters({
  options: {
    showPanel: true,
    panelPosition: "right",
  },
});
