import React from 'react';
import {ComponentMeta} from '@storybook/react';

import Inventory from '.';
import {twoItems, fourItems, allItems} from '../../../fixtures';

export default {
  title: 'Molecules / Inventory',
  component: Inventory,
} as ComponentMeta<typeof Inventory>;

export const EmptyInventory = () => <Inventory items={[]} />;
export const TwoItemsInventory = () => <Inventory items={twoItems} />;
export const FourItemsInventory = () => <Inventory items={fourItems} />;
export const AllItemsInventory = () => <Inventory items={allItems} />;
