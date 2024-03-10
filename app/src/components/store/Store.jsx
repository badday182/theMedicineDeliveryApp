import { useState } from "react";

const Store = () => {
    const pharmacies = ['Drugs 24', 'Pharmacy', 'Pharmacy 911', 'Low Price Pharmacy'];
    const [activeButton, setActiveButton] = useState(pharmacies[0]);
    
    const handleClick = (pharmacy) => {
        setActiveButton(pharmacy);
    };

    return (
        <div className="d-flex align-items-start my-2 p-2 border border-primary-subtle rounded-2">
           {/* pharmacies Nav  */}
            <div
                className="nav flex-column nav-pills me-3"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
            >
                {pharmacies.map((pharmacy, index) => (
                    <button
                        key={index}
                        className={`nav-link ${activeButton === pharmacy ? 'active' : ''}`}
                        id={`v-pills-${pharmacy.replace(/\s+/g, '-').toLowerCase()}-tab`}
                        onClick={() => handleClick(pharmacy)}
                        type="button"
                        role="tab"
                        aria-controls={`v-pills-${pharmacy.replace(/\s+/g, '-').toLowerCase()}`}
                        aria-selected={activeButton === pharmacy ? 'true' : 'false'}
                    >
                        {pharmacy}
                    </button>
                ))}
            </div>
            {/* Content for active pharmacy */}
            <div className="tab-content" id="v-pills-tabContent">
                {pharmacies.map((pharmacy, index) => (
                    <div
                        key={index}
                        className={`tab-pane fade ${activeButton === pharmacy ? 'show active' : ''}`}
                        id={`v-pills-${pharmacy.replace(/\s+/g, '-').toLowerCase()}`}
                        role="tabpanel"
                        aria-labelledby={`v-pills-${pharmacy.replace(/\s+/g, '-').toLowerCase()}-tab`}
                        tabIndex="0"
                    >
                        Content for {pharmacy}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Store;
