import { Route, Routes } from "react-router-dom";
import { CatalogPage } from "./pages/CatalogPage/CatalogPage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { CamperPage } from "./pages/CamperPage/CamperPage";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<h1>Home</h1>} />
				<Route path="/catalog" element={<CatalogPage />} />
				<Route path="/catalog/:id" element={<CamperPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</>
	);
}

export default App;
