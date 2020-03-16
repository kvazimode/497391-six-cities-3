import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer.js';

const sortTypeMap = {
  popular: `Popular`,
  toHigh: `Price: low to high`,
  toLow: `Price: high to low`,
  rating: `Top rated first`
};

const SortSetter = ({sortType, expanded, onClick, onTypeClick}) => {
  const sortTypeClickHandler = (e) => {
    onTypeClick(e);
    onClick();
  }
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0" onClick={onClick}>
        {sortTypeMap[sortType]}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom places__options--${expanded ? `opened` : `closed`}`}>
        {=> (
          <li key={key} className={`places__option ${sortType === i}`}>{}</li>
        )}
        <li className="places__option places__option--active" tabIndex="0">Popular</li>
        <li className="places__option" tabIndex="0">Price: low to high</li>
        <li className="places__option" tabIndex="0">Price: high to low</li>
        <li className="places__option" tabIndex="0">Top rated first</li>
      </ul>
    </form>
  )
}