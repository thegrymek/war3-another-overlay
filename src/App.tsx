import React from 'react';
import {Layout1v1, Layout1v1Replay} from './components/views/Layout1v1';
import {W3Event, W3PlayerProps} from './w3/interfaces';
import {sortPlayers, checkPlayers, isPlayerPlaying} from './w3/tools';
import {theme} from './components/Theme';
import {ThemeProvider} from 'styled-components';

// Uncomment for test and develop purposes
import event from './events/event_late_game.json';

interface Event {
  content: W3Event;
  type: string;
}
interface WebSocketEvent {
  data: string;
}

export interface AppState {
  content?: W3Event;
  settings?: unknown;
}

export class App extends React.Component<{}, AppState> {
  state: AppState = {
    content: undefined,
    settings: undefined,
  };

  componentDidMount() {
    // Uncomment to load fake data
    this.setState({content: event.content});
    // Comment out to not use connection in development
    // this.connect();
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
    const players: W3PlayerProps[] = content.players.filter(isPlayerPlaying);

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
