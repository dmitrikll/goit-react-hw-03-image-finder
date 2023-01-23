import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Image, Overlay } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = event => {
    if (event.code !== 'Escape') {
      return;
    }
    this.props.toggle();
  };

  clickOnBackDrop = event => {
    if (event.target === event.currentTarget) {
      this.props.toggle();
    }
  };

  render() {
    const { image, tags } = this.props;

    return createPortal(
      <Overlay onClick={this.clickOnBackDrop}>
        <div>
          <Image src={image} alt={tags} />
        </div>
      </Overlay>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  image: PropTypes.string,
  tags: PropTypes.string,
};
