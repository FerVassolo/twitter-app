import './App.css';
import SideBar from "./components/sidebar/sideBar";
import HomePage from "./pages/homePage/homePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TweetPage from "./pages/tweetPage/tweetPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/tweet/:id" element={<TweetPage />} />
            </Routes>
        </Router>
    );
}

export default App;
