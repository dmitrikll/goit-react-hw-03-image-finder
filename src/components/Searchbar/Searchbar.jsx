import PropTypes from 'prop-types';
import { Header, Form, Button, Input } from './Searchbar.styled';
import { GoSearch } from 'react-icons/go';

export const Searchbar = ({ onSubmit }) => {
  return (
    <Header>
      <Form onSubmit={onSubmit}>
        <Button type="submit">
          <GoSearch size="26px" />
        </Button>

        <Input
          type="text"
          autoFocus
          autoComplete="off"
          placeholder="Search images and photos"
          name="search"
        />
      </Form>
    </Header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
