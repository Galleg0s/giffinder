import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchGifs, setResults, setError} from '../../redux/actions';
import {getResults, getError, getIsLoading} from '../../redux/selectors';
import styles from './styles.module.scss';
import { Search, SearchResults, Loader, NotFound} from '../../components';


export class App extends Component {
  handleSubmit = (query) => {
    this.props.fetchGifs(query)
  }

  handleClearResults = () => {
    this.props.setResults([]);
    
    if (this.props.error) {
      this.props.setError('');
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.header}>Welcome to GifFinder!</h1>
        <Search onSubmitClick={this.handleSubmit} clearResults={this.handleClearResults}/>
        { this.props.isLoading && !this.props.error && <Loader /> }
        { this.props.results.length > 0 && <SearchResults data={this.props.results} /> }
        { this.props.error && <NotFound error={this.props.error}/> }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  results: getResults(state),
  error: getError(state),
  isLoading: getIsLoading(state),
})

const mapDispatchToProps = dispatch => ({
  fetchGifs: (query) => dispatch(fetchGifs(query)),
  setResults: (results) => dispatch(setResults(results)),
  setError: (error) => dispatch(setError(error))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
