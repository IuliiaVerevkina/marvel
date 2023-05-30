import ErrorMessage from "../components/errorMessage/ErrorMessage";

export default function ErrorPage() {
	return (
		<div className="error-page">
			<h1 className="error-page-title">Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<ErrorMessage />
		</div>
	);
};
