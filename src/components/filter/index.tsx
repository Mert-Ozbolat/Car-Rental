import { FC } from "react";
import Year from "./Year";
import SearchBar from './SearchBar';
import Fuel from "./Fuel";

const Filter: FC = () => {
    return (
        <div className="mt-12 padding-x padding-y max-width">
            <div className="home-text-container">
                <h1 className="text-4xl font-extrabold">Car Catalog</h1>
                <p>Discover cars you might like.</p>
            </div>
            <div className="home-filters">
                <SearchBar />
                <div className="home-filter-container">
                    <Fuel />
                    <Year />
                </div>
            </div>
        </div>
    );
};

export default Filter;