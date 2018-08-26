import React, { Component } from 'react';
import qs from 'qs';
import { connect } from 'react-redux';
import { Navbar, FormGroup, FormControl, HelpBlock } from 'react-bootstrap';
import actions from 'store/rootActions';
import Footer from 'components/footer';
import Loader from 'components/loader';

class Search extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  handleChange(e) {
    const q = e.target.value;
    console.log('New search input entered', q);
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: q.length ? qs.stringify({ q }) : null,
    });
    this.props.searchFriend({ search: q });
  }

  render() {

    const { search: { loader, searchForm, results} } = this.props;

    const style = {
      searchContainer: {
        minHeight: '100vh',
        background: '#ffffff',
      },
      brand: {
        width: 200,
      },
      footer: {
        position: 'absolute',
        bottom: (results.length > 6 ? -60 : 20),
      },
      itemsContainer: {
        maxWidth: 460,
        minHeight: 'calc(100vh - 90px)',
        position: 'relative',
      },
    };

    return (
      <div className="container-fluid" style={style.searchContainer}>
        <div className="row">
          <div className="col-12">
            <Navbar>
              <Navbar.Header>
                <Navbar.Brand>
                  <a href="#home" className="py-3">
                    <img src="/img/logo.png" alt="DeedMob" style={style.brand}/>
                  </a>
                </Navbar.Brand>
              </Navbar.Header>
            </Navbar>
            <div className="container-fluid" style={style.itemsContainer}>
              <div className="row">
                <div className="col-12 text-center py-5">
                  <h2 className="title4 text-800 text-capitalize mb-0">
                    Welcome 
                  </h2>
                  <p className="text text-grey-lighten-1">
                    Let's search your friends-:)
                  </p>
                </div>
                <div className="col-12 text-left">
                  <form>
                    <FormGroup
                      bsSize="lg"
                      controlId="search"
                    >
                      <FormControl
                        type="text"
                        value={searchForm.search}
                        placeholder="Search friends..."
                        onChange={this.handleChange.bind(this)}
                      />
                      <FormControl.Feedback />
                      <HelpBlock></HelpBlock>
                    </FormGroup>
                  </form>
                </div>
              </div>

              <Loader loading={loader.search} />
              
              { results.map((r,i) => {
                return <div key={i} className="bg-grey-lighten-3 rounded px-2 py-2 mb-2">
                  <span className="pr-1 text-grey text-800"> {r.name} </span>
                  <small className="text-grey-lighten-1 text-700"> {r.username } </small>
                </div>;
              })}

              <Footer style={style.footer} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
	return {
		search: state.search,
	};
}

export default connect(mapStateToProps, actions)(Search);
