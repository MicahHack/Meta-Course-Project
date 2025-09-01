import './App.css';
import Filters from './components/Filters/Filters.jsx';
import JesusCross from './components/JesusCross/JesusCross.jsx';
import GithubReferrer from './components/GithubReferrer/GithubReferrer.jsx';
import DonateButton from './components/DonateButton/DonateButton';

export default function App() {
  return (
    <>
          <div className="d-flex flex-column jesusiskingcontainer justify-content-center align-items-center text-center p-1 p-sm-0">
            <GithubReferrer />
            <JesusCross />
            <h1 className="fw-bold text-white">JESUS IS KING!</h1>
          </div>
          <Filters />
          <DonateButton />
    </>
  )
}
