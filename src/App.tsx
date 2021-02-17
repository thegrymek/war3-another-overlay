import React from 'react';
import {Layout1v1, Layout1v1Replay} from './components/views/Layout1v1';
import {W3Event, W3PlayerProps} from './w3/interfaces';
import {sortPlayers, checkPlayers} from './w3/tools';
import {theme} from './components/Theme';
import {ThemeProvider} from 'styled-components';

interface Event {
  content: W3Event;
  type: string;
}
interface WebSocketEvent {
  data: string;
}

export interface AppState {
  content: W3Event;
  settings: unknown;
}

export class App extends React.Component<{}, AppState> {
  state: AppState = {
    content: undefined,
    settings: undefined,
  };

  componentDidMount() {
    this.connect();
  }

  connect() {
    const socket = new WebSocket('ws://localhost:8124');
    socket.addEventListener('message', event => {
      this.onmessage(event);
    });
  }

  onmessage(event: WebSocketEvent) {
    const data: Event = JSON.parse(event.data);
    switch (data.type) {
      case 'state':
        this.setState({content: data.content});
        break;
    }
  }

  render() {
    if (!this.state.content) return <div />;

    const content = this.state.content;
    const players: W3PlayerProps[] = content.players.filter(
      (player: W3PlayerProps) => player['slot_state'] === 'PLAYING'
    );

    if (!checkPlayers(players)) return <div />;

    if (players.length === 1) {
      return (
        <ThemeProvider theme={theme}>
          <Layout1v1 player={players[0]} />
        </ThemeProvider>
      );
    }

    const playersData = sortPlayers(players);
    return (
      <ThemeProvider theme={theme}>
        <Layout1v1Replay players={playersData} />
      </ThemeProvider>
    );
  }
}

export default App;
