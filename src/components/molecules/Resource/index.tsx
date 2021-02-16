import React from 'react';
import {RESOURCE_GRADIENTS, RESOURCE_TEXT_COLOR} from '../../../config';

export interface ResourceProps {
  resourceType: string;
}
export default class Resource extends React.Component<ResourceProps> {
  render() {
    const rowClassNames = [
      'grid grid-rows-2 px-2 bg-gradient-to-t',
      RESOURCE_GRADIENTS[this.props.resourceType],
    ];
    const valueClassNames = [
      'align-middle',
      RESOURCE_TEXT_COLOR[this.props.resourceType],
    ];
    return (
      <div className={rowClassNames.join(' ')}>
        <div>
          <span className={valueClassNames.join(' ')}>
            {this.props.children}
          </span>
        </div>
        <div>
          <span className="align-middle text-xs uppercase">
            {this.props.resourceType}
          </span>
        </div>
      </div>
    );
  }
}
