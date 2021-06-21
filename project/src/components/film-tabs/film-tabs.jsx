import React, {useState} from 'react';
import {Link, useParams} from 'react-router-dom';

import FilmOverview from '../film-overview/film-overview';
import FilmDetails from '../film-details/film-details';
import FilmReviews from '../film-reviews/film-reviews';

function showTab (Component, props) {
  return <Component {...props} />;
}

const Tabs = {
  'Overview': showTab.bind(null, FilmOverview),
  'Details': showTab.bind(null, FilmDetails),
  'Reviews': showTab.bind(null, FilmReviews),
};

const TAG_NAME = 'A';

const DEFAULT_TAB = 'Details';

function FilmTabs(props) {
  const [activeTab, setActiveTab] = useState(DEFAULT_TAB);

  const filmId = useParams().id;

  const tabClickHandler = (evt) => {
    if (evt.target.tagName !== TAG_NAME) {
      return;
    }

    evt.preventDefault();

    setActiveTab(evt.target.innerText);
  };

  const showNavTabs = (title) => (
    <li className={`film-nav__item ${(activeTab === title) && 'film-nav__item--active'}`} key={title}>
      <Link className="film-nav__link" to={`/films/${filmId}`}>{title}</Link>
    </li>
  );

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list" onClick={tabClickHandler}>
          {Object.keys(Tabs).map(showNavTabs)}
        </ul>
      </nav>
      {Tabs[activeTab](props)}
    </div>
  );
}

export default FilmTabs;
