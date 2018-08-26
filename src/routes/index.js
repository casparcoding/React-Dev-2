import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'underscore';
import qs from 'qs';
import { Redirect, Switch, Route, withRouter } from 'react-router';
import actions from 'store/rootActions';

// Import Routes
import Search from 'components/search';

class Routes extends Component {
  componentDidMount(prevProps) {
    this.checkSearch(prevProps);
  }

  componentDidUpdate(prevProps) {
    this.checkSearch(prevProps);
  }

  checkSearch(prevProps) {
    const { search: { searchForm }, searchFriend } = this.props;
    const q = qs.parse(this.props.location.search, {
      ignoreQueryPrefix: true,
    });
    if (q.q && searchForm.search !== q.q) {
      _.debounce(searchFriend({ search: q.q }), 100);
    }
    console.log('New app state loader.', 'The old state:', prevProps, 'The new state', this.props);
  }

  render() {
    return (
      <Route
        render={({ location, history }) => (
          <React.Fragment>
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Redirect to="/search" />}
              />
              <Route path="/search" component={Search} />
              <Route path="/*" render={() => <Redirect to="/" />} />
            </Switch>
          </React.Fragment>
        )}
      />
    );
  }
}

Routes.propTypes = {
  searchFriend: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return { search: state.search };
}

export default withRouter(
  connect(
    mapStateToProps,
    actions,
  )(Routes),
);
