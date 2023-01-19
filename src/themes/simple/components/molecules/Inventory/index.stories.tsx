import {Meta} from '@storybook/react/types-6-0';

import Inventory from '.';
import {twoItems, fourItems, allItems} from '../../fixtures';

export default {
  title: 'Molecules / Inventory',
  component: Inventory,
} as Meta;

export const EmptyInventory = () => <Inventory items={[]} />;
export const TwoItemsInventory = () => <Inventory items={twoItems} />;
export const FourItemsInventory = () => <Inventory items={fourItems} />;
export const AllItemsInventory = () => <Inventory items={allItems} />;
