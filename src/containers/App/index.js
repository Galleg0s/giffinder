import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchGifs, setResults, setError, setActiveItemId, setOffset, setQuery} from '../../redux/actions';
import {getResults, getError, getIsLoading, getActiveItemId, getOffset, getDisplayedItemsCount} from '../../redux/selectors';
import styles from './styles.module.scss';
import { Search, SearchResults, Loader, NotFound, Lightbox, Navigation} from '../../components';

export class App extends Component {
  handleSubmitClick = (query) => {
    if (this.props.results.length > 0) {
      this.props.setResults([]);
    }
    this.props.setQuery(query);
    this.props.fetchGifs();
  }

  handleClearResults = () => {
    this.props.setResults([]);
    
    if (this.props.error) {
      this.props.setError('');
    }
  }

  handleItemClick = id => {
    this.props.setActiveItemId(id);
  }

  handleCloseBtnClick = () => {
    this.props.setActiveItemId(null)
  }

  handleNavButtonClick = (direction) => {
    if (direction === 'next') {
      this.props.setOffset(this.props.offset + this.props.displayedItemsCount);
      this.props.fetchGifs();
    } else if (direction === 'prev') {
      this.props.setOffset(this.props.offset - this.props.displayedItemsCount);
      this.props.fetchGifs();
    }
  }

  render() {
    const {isLoading, results, activeItemId, error} = this.props;
    const activeItem = results.find(item => item.id === activeItemId);

    return (
      <div className={styles.container}>
        <h1 className={styles.header}>Welcome to GifFinder!</h1>
        <Search onSubmitClick={this.handleSubmitClick} clearResults={this.handleClearResults}/>
        { isLoading && !error && <Loader /> }
        { results.length > 0 && <SearchResults results={results} onItemClick={this.handleItemClick}/> }
        { activeItemId && <Lightbox item={activeItem} onCloseBtnClick={this.handleCloseBtnClick}/>}
        { error && <NotFound error={error}/> }
        { results.length > 0 && <Navigation onButtonClick={this.handleNavButtonClick} />}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  results: getResults(state),
  error: getError(state),
  isLoading: getIsLoading(state),
  activeItemId: getActiveItemId(state),
  displayedItemsCount: getDisplayedItemsCount(state),
  offset: getOffset(state),
})

const mapDispatchToProps = dispatch => ({
  setQuery: query => dispatch(setQuery(query)),
  fetchGifs: () => dispatch(fetchGifs()),
  setResults: results => dispatch(setResults(results)),
  setError: error => dispatch(setError(error)),
  setActiveItemId: id => dispatch(setActiveItemId(id)),
  setOffset: offset => dispatch(setOffset(offset)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
