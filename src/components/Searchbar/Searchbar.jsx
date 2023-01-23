import PropTypes from 'prop-types';
import { Header, Form, Button, Input } from './Searchbar.styled';
import { AiOutlineSearch } from 'react-icons/ai';

export const Searchbar = ({ onSubmit }) => {
  return (
    <Header>
      <Form onSubmit={onSubmit}>
        <Button type="submit">
          <AiOutlineSearch size="26px" />
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

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
