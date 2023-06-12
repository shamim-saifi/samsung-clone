import React, { Fragment } from "react";
import "./SearchBox.css"
import { FiSearch } from "react-icons/fi"

const SearchBox = () => {
    return (
        <Fragment>
            <div id="search">
                <button><FiSearch /></button>
                {/* <a href="#"><FiSearch /></a> */}
                <input type="text" placeholder="Search KeyWords" />
            </div>
            <div id="starText">
                <p>* 5G Devices are 5G ready, connectivity dependent on network availability.</p>
                <p>* Images shown here are for representational purpose only, actual may vary. All features, specifications and prices are subject to change without prior notice. Model availability may vary from location to location.</p>
                <p>* Image simulated. S Pen Fold Edition sold separately and is only compatible with Galaxy Z Fold4 and Galaxy Z Fold3.</p>
                <p>* Watch screen image simulated for illustrative purpose. Availability of colours, sizes, models, and watch bands may vary by country or carrier.</p>
                <p>* Image simulated. Available colours of Galaxy Buds2 Pro may vary by country or carrier.</p>
                <p># T&C Apply. Cashback at the sole discretion of the issuer / NBFC.</p>
                <p>** Product launch dates vary from country to country. Some products may be launched earlier in few countries.</p>
                <p>* Offer valid on select models only.</p>
            </div>

        </Fragment>
    )
}

export default SearchBox;