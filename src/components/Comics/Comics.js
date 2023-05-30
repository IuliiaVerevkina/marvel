import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spiner/Spiner';

import "./comics.scss";
import avengers_logo from "../../resources/img/Avengers_logo.png";
import avengers from "../../resources/img/Avengers.png";

import useMarvelService from '../../services/MarvelService';

const Comics = () => {
	const [comicsList, setComicsrList] = useState([]);
	const [offset, setOffset] = useState(210);
	const [comicsEnd, setComicsrEnd] = useState(false);
	const [newItemLoading, setNewItemLoading] = useState(false);

	const { loading, error, getAllComics } = useMarvelService();

	useEffect(() => {
		onRequest(offset);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	const onRequest = (offset, initial) => {
		initial ? setNewItemLoading(false) : setNewItemLoading(true);
		getAllComics(offset)
			.then(onComicsListLoaded)
	};
	const onComicsListLoaded = (newComicsList) => {
		let ended = false;
		if (newComicsList.length < 8) {
			ended = true;
		};
		setComicsrList(comicsList => [...comicsList, ...newComicsList]);
		setNewItemLoading(false)
		setOffset(offset => offset + 8);
		setComicsrEnd(ended)
	};

	const renderItems = (arr) => {
		const comics = arr.map((item, i) => {
			return (
				<Link to={`/comics/${item.id}`}
					className="comics__item"
					key={i}>
					<img src={item.thumbnail} alt={item.name} />
					<div className="comics__name">{item.name}</div>
				</Link>
			)
		});
		return (
			<ul className="comics__grid">
				{comics}
			</ul>
		)
	}
	const comics = renderItems(comicsList);
	const errorMessage = error ? <ErrorMessage /> : null;
	const spinner = loading  ? <Spinner /> : null;

	return (
		<>
			<div className="comics__baner">
				<div className="comics__baner-wrapper">
					<img src={avengers} alt="avengers" />
					<p className="comics__baner-wrapper-title">
						New comics every week!<br />
						Stay tuned!
					</p>
				</div>
				<div className="comics__baner-logo">
					<img src={avengers_logo} alt="avengers logo" />
				</div>
			</div>
			<div className="comics">
				{errorMessage}
				{spinner}
				{comics}
				<button
					className="button button__main button__long"
					disabled={newItemLoading}
					style={{ 'display': comicsEnd ? 'none' : 'block' }}
					onClick={() => onRequest(offset)}>
					<div className="inner">load more</div>
				</button>
			</div>
		</>

	)
};

export default Comics;