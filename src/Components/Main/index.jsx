import React from 'react';
import './index.css';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shardCount: 1,
      prefix: '!',
      status: 'online',
      game: {
        type: 'Playing',
        name: [],
        url: '',
        interval: 60
      },
      music: {
        status: true,
        passes: 1
      }
    };
  }

  setShardCount(event) {
    let shardCount = Number(event.target.value);
    this.setState({
      shardCount: shardCount >= 1 ? shardCount : 1
    });
  }

  setPrefix(event) {
    let prefix = String(event.target.value).replace(/ /g, '-');
    this.setState({
      prefix: prefix.length ? prefix : '!'
    });
  }

  setStatus(event) {
    this.setState({
      status: event.target.value.toLowerCase()
    });
  }

  setGame(key, event) {
    if (key === 'type') {
      this.setState({
        game: {
          type: event.target.value,
          name: this.state.game.name,
          url: this.state.game.url,
          interval: this.state.game.interval
        }
      });
    }
  }

  render() {
    return (
      <main>
        <div className='container'>
          <div className='input'>
            <label>How many shards do you need?</label>
            <input
              type='text'
              name='shardCount'
              value={ this.state.shardCount }
              onChange={ event => this.setShardCount(event) }
            />
          </div>

          <div className='input'>
            <label>What sould be the prefix?</label>
            <input
              type='text'
              name='prefix'
              value={ this.state.prefix }
              onChange={ event => this.setPrefix(event) }
            />
          </div>

          <div className='input'>
            <label>What sould be status?</label>
            <label>
              <input
                className='online'
                type='radio'
                name='status'
                value='Online'
                onChange={ event => this.setStatus(event) }
              />
              Online
            </label>
            <label>
              <input
                className='idle'
                type='radio'
                name='status'
                value='Idle'
                onChange={ event => this.setStatus(event) }
              />
              Idle
            </label>
            <label>
              <input
                className='dnd'
                type='radio'
                name='status'
                value='DND'
                onChange={ event => this.setStatus(event) }
              />
              Do Not Disturb
            </label>
            <label>
              <input
                className='invisible'
                type='radio'
                name='status'
                value='Invisible'
                onChange={ event => this.setStatus(event) }
              />
              Invisible
            </label>
          </div>

          <div className='input'>
            <label>What sould be game type?</label>
            <label>
              <input
                type='radio'
                name='game:type'
                value='Playing'
                onChange={ event => this.setGame('type', event) }

              />
              Playing
            </label>
            <label>
              <input
                type='radio'
                name='game:type'
                value='Watching'
                onChange={ event => this.setGame('type', event) }
              />
              Watching
            </label>
            <label>
              <input
                type='radio'
                name='game:type'
                value='Listening'
                onChange={ event => this.setGame('type', event) }
              />
              Listening
            </label>
            <label>
              <input
                type='radio'
                name='game:type'
                value='Streaming'
                onChange={ event => this.setGame('type', event) }
              />
              Streaming
            </label>
          </div>
        </div>
        <div className='container'>
          <textarea
            id='output'
            value={ JSON.stringify(this.state, null, 2) }
            readOnly
          />
        </div>
      </main>
    );
  }
}

export default Main;
