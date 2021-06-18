import React, {useState} from 'react';
import {Link, useParams} from 'react-router-dom';

import FilmOverview from '../film-overview/film-overview';
import FilmDetails from '../film-details/film-details';
import FilmReviews from '../film-reviews/film-reviews';

const TabTitles = {
  OVERVIEW: 'Overview',
  DETAILS: 'Details',
  REVIEWS: 'Reviews',
};

const ACTIVE_TAB = TabTitles.DETAILS;

function FilmTabs(props) {
  const [activeTab, setActiveTab] = useState(ACTIVE_TAB);

  const filmId = useParams().id;

  const tabClickHandler = (evt) => {
    if (evt.target.tagName !== 'A') {
      return;
    }
    evt.preventDefault();
    setActiveTab(evt.target.innerText);
  };

  const showActiveTab = (tab) => {
    switch (tab) {
      case TabTitles.OVERVIEW:
        return <FilmOverview {...props} />;
      case TabTitles.DETAILS:
        return <FilmDetails {...props} />;
      case TabTitles.REVIEWS:
        return <FilmReviews {...props} />;
      default:
    }
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list" onClick={tabClickHandler}>
          {Object.values(TabTitles).map((title) => (
            <li className={`film-nav__item ${(activeTab === title) && 'film-nav__item--active'}`} key={title}>
              <Link className="film-nav__link" to={`/films/${filmId}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      {showActiveTab(activeTab)}
    </div>
  );
}

export default FilmTabs;
