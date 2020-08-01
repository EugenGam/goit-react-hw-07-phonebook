import React from 'react';
import { connect } from 'react-redux';
import themeActions from '../../Redux/themeActions';
import selectors from '../../Redux/selectors';
import './styles.scss';

const ThemeButton = ({ changeTheme, theme }) => {
  const change = () => {
    if (theme === 'lightTheme') {
      changeTheme('darkTheme');
    } else {
      changeTheme('lightTheme');
    }
  };
  return (
    <button className="themeButton" onClick={change}>
      Change theme!
    </button>
  );
};

const mapStateToProps = state => {
  return {
    theme: selectors.getTheme(state),
  };
};

const mapDispatchToProps = {
  changeTheme: themeActions.themeChange,
};

export default connect(mapStateToProps, mapDispatchToProps)(ThemeButton);
