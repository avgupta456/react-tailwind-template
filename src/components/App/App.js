import React from 'react';

import '@fontsource/roboto';

import LandingContainer from '../LandingContainer';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const content =
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.';

    return (
      <div className="py-12 min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl sm:text-6xl text-indigo-600">MAIN TITLE</h2>
            <p className="mt-2 text-2xl sm:text-4xl text-gray-900">
              Subtitle
            </p>
            <p className="max-w-2xl mt-4 mx-auto text-xl text-gray-500">
              {content}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
