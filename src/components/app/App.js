
import { Route, Routes } from "react-router-dom";
import { Layout } from "../../pages/Layout";
import { HomePage } from "../../pages/HomePage";
import { ComicsPage } from "../../pages/ComicsPage";
import ErrorPage from "../../pages/ErrorPage";
import SingleComicPage from "../../pages/SingleComicPage";


function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path="comics" element={<ComicsPage />} />
				<Route path="/comics/:id" element={<SingleComicPage />} />
				<Route path="*" element={<ErrorPage />} />
			</Route>
		</Routes>
	)
};

export default App;