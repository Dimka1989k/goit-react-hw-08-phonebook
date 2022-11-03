import PropTypes from 'prop-types';
import './Filter.module.css';

export const Filter = ({ filter, changeFilterInput }) => (
 
  <label>
    <p>Find contacts by name</p>
    <input
      type="text"
      name={filter}
      onChange={changeFilterInput}
      placeholder=""
      
    />
  </label>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilterInput: PropTypes.func.isRequired,
};