import React from 'react';
import './index.css';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div id='back-to-home'>
          <a href='https://bastionbot.org'>
            <img
              src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAkFBMVEX///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9oY44IAAAAL3RSTlMAAQMECA4PFBsgISQoQEhSVF5gZHFygI6QlpmfoqWqsbKztLa3vcPExcnX4fHz+wav99QAAABlSURBVHgBZcHnEsFAGIbRh9V7IUSxBNHz3v/d+bEzdr9xDsHoPiA11bNHYqlrm0SmfYPI5VrXiFpeGalzNcN4fw7H00+xY1KU5S3y/HObHMOttK1jLOSbGHM9Ohjj6tXHGF66BF8TQglKihIdKwAAAABJRU5ErkJggg=='
              title='Back to Home'
              alt=''
            />
          </a>
        </div>
        <div>Configuration Builder</div>
      </header>
    );
  }
}

export default Header;
