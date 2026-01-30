import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import styles from './App.module.css';

const Header = lazy(() => import("./components/Header/Header"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"));
const CamperPage = lazy(() => import("./pages/CamperPage/CamperPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

function App() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<div className={styles.app}>
				<Header />
				<main className={styles.main}>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/catalog" element={<CatalogPage />} />
						<Route path="/catalog/:id" element={<CamperPage />} />
						<Route path="*" element={<NotFoundPage />} />
					</Routes>
				</main>
			</div>
		</Suspense>
	);
}

export default App;
