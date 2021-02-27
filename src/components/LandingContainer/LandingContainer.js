import React from 'react';
import PropTypes from 'prop-types';

// TODO: Make shape prop of LandingContainer
function SVG() {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  );
}

class LandingContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="flex">
        <div className="flex flex-shrink-0 items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
          <SVG />
        </div>
        <div className="ml-4">
          <div className="text-lg leading-6 font-medium text-gray-900">
            {this.props.title}
          </div>
          <div className="mt-2 text-gray-500">{this.props.content}</div>
        </div>
      </div>
    );
  }
}

LandingContainer.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default LandingContainer;
