import { FC } from "react";
import Year from "./Year";
import SearchBar from './SearchBar';


const Filter: FC = () => {
    return (
        <div id="filter" className="mt-12 padding-x padding-y max-width">
            <div className="home-text-container">
                <h1 className="text-4xl font-extrabold">Car Catalog</h1>
                <p>Discover cars you might like.</p>
            </div>
            <div className="home-filters">
                <SearchBar />
                <div className="home-filter-container">
                    <Year />
                </div>
            </div>
        </div>
    );
};

export default Filter;