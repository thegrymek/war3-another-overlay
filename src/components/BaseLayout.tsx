import React from 'react';
import {NAVBAR_WIDTH} from '../config';

export class BaseLayout extends React.Component {
  render() {
    return (
      <div className="w-full h-full absolute top-0 left-0 z-10">
        <div className="w-full flex flex-nowrap">{this.props.children}</div>
      </div>
    );
  }
}

export interface SideLayoutProps {
  isLeft: boolean;
}
export class SideLayout extends React.Component<SideLayoutProps> {
  render() {
    let alignmentClass = undefined;

    if (this.props.isLeft) {
      alignmentClass = 'justify-items-start';
    } else {
      alignmentClass = 'justify-items-end';
    }

    return (
      <div
        className={'grid grid-cols-1 auto-rows-max z-10 ' + alignmentClass}
        style={{width: NAVBAR_WIDTH}}
      >
        {this.props.children}
      </div>
    );
  }
}

export class HeroesLayout extends React.Component {
  render() {
    return (
      <div className="w-full h-full absolute top left-0 z-0">
        {this.props.children}
      </div>
    );
  }
}
