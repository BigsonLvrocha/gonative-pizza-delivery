import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setNavigator } from '~/services/navigation';
import PropTypes from 'prop-types';
import Loading from './pages/Loading';
import createNavigator from './routes';
import { bindActionCreators } from 'redux';
import { Creators as SessionActions } from '~/store/ducks/session';

class App extends Component {
  static propTypes = {
    userChecked: PropTypes.bool.isRequired,
    userLogged: PropTypes.bool.isRequired,
    initialLoggedUserRequest: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { initialLoggedUserRequest } = this.props;
    initialLoggedUserRequest();
  }

  render() {
    const { userChecked, userLogged } = this.props;
    if (!userChecked) {
      return <Loading />;
    }
    const Routes = createNavigator(userLogged);
    return <Routes ref={setNavigator} />;
  }
}

const mapStateToProps = state => ({
  userChecked: state.session.userChecked,
  userLogged: !!state.session.loggedUserData,
});

const mapDispatchToProps = dispatch => bindActionCreators(SessionActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
