import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer.js';
import withActiveItem from '../../hocs/with-active-item/with-active-item.jsx';

const sortTypeMap = {
  popular: `Popular`,
  toHigh: `Price: low to high`,
  toLow: `Price: high to low`,
  rating: `Top rated first`
};

const SortSetter = ({sortType, isActive, onClick, onTypeClick}) => {
  const sortTypeClickHandler = (e) => {
    onTypeClick(e);
    onClick();
  };
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0" onClick={onClick}>
        {sortTypeMap[sortType]}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom places__options--${isActive ? `opened` : `closed`}`}>
        {Object.keys(sortTypeMap).map((key) => (
          <li key={key}
            className={`places__option ${sortType === sortTypeMap[key] ? `places__option--active` : ``}`}
            tabIndex="0"
            data-name={key}
            onClick={sortTypeClickHandler}>
            {sortTypeMap[key]}</li>
        ))}
      </ul>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    sortType: state.sortType
  };
};

const mapDispatchToProps = (dispatch) => ({
  onTypeClick(e) {
    dispatch(ActionCreator.setSortType(e.currentTarget.dataset.name));
  }
});

SortSetter.propTypes = {
  sortType: PropTypes.string,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  onTypeClick: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(withActiveItem(SortSetter));
