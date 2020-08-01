import React from 'react';
import { connect } from 'react-redux';
import filterActions from '../../Redux/filterActions';
import Theme from '../Theme';
import selectors from '../../Redux/selectors';
import './styles.scss';

const Filter = ({ filter, filterAdd, theme }) => {
  return (
    <div
      className="contactFormSearch"
      style={{ color: Theme[theme].fontColor, background: Theme[theme].bodybg }}
    >
      <h2>Contacts</h2>
      <form>
        <label>Find a contact: </label>
        <input
          type="text"
          value={filter}
          onChange={e => filterAdd(e.target.value)}
        />
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    filter: selectors.getFilter(state),
    theme: selectors.getTheme(state),
  };
};

const mapDispatchToProps = {
  filterAdd: filterActions.filterAdd,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
