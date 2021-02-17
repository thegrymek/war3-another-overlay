import React from 'react';

export class BaseLayout extends React.Component {
  render() {
    return (
      <div className="w-full h-full absolute top-0 left-0 z-10">
        <div className="w-full flex flex-nowrap">{this.props.children}</div>
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
