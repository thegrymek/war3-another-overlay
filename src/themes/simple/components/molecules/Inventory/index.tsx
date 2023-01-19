import React from 'react';
import styled from 'styled-components';

import {W3ItemProps} from '../../../../../w3/interfaces';
import {groupInventory, createEmptyInventory} from '../../../../../w3/tools';
import {INumberedDictType} from '../../../../../w3/types';
import Item from '../Item';
import {v4 as uuid} from 'uuid';

const FixedDiv = styled.div`
  ${props => `width: ${props.theme.item.iconSize * 2}px;`}
  ${props => `height: ${props.theme.item.iconSize * 3}px;`}
`;

export interface InventoryProps {
  items: W3ItemProps[];
}
interface InventoryState {
  items: INumberedDictType<W3ItemProps>;
}
export default class Inventory extends React.Component<
  InventoryProps,
  InventoryState
> {
  public static defaultProps: InventoryProps = {
    items: [],
  };
  constructor(props: InventoryProps) {
    super(props);

    // lets create empty inventory
    // {0: emptyItem, 1: emptyItem, 2: emptyItems ...}
    const emptyItems = createEmptyInventory();

    // here we dont have all slots, because game provides
    // only items that hero has, no empty items.
    // {2: someItem, 3: anotherItem}
    const providedItems = groupInventory(this.props.items);

    // lets merge and overwrite empty invertory by real inventory
    // {0: emptyItem, 1: emptyItem, 2: someItem, ... 5: emptyItem}
    const groupedItems = {...emptyItems, ...providedItems};

    this.state = {
      items: groupedItems,
    };
  }

  renderItem(item: W3ItemProps) {
    return (
      <Item
        id={item.id}
        key={uuid()}
        charges={item.charges}
        cooldown={item.cooldown}
        slot={item.slot}
      />
    );
  }

  render() {
    return (
      <FixedDiv className="grid grid-cols-2">
        {Object.keys(this.state.items).map(key =>
          this.renderItem(this.state.items[key])
        )}
      </FixedDiv>
    );
  }
}
