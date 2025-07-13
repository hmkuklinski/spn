import { Link } from "react-router-dom";
export default function Search({ searchType, placeholder, searchEntry, setSearchEntry, clickAction, buttonLink, hasFilter=null, toggleFilters=null, hasHelper=null, toggleHelp=null, hasHome=null}) {
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            clickAction();
        }
    };
    
    return (
        <div className="search-container">
            <div className="search-input">
                <input name={`${searchType}-search`} id={`${searchType}-search`} type="text" placeholder={placeholder}  value={searchEntry} onChange={(e)=>setSearchEntry(e.target.value)} onKeyDown={handleKeyDown} />
            </div>
            <div className="search-button">
                <button className="search-btn" onClick={clickAction}><ion-icon name="search-outline"></ion-icon></button>
            </div>
            {hasHome && <div className="search-home">
                <Link to={buttonLink}><button className="search-btn"><ion-icon name="home-outline"></ion-icon></button></Link>
            </div>
            }
            
            {hasFilter && <div className="search-filter">
                <button className="search-btn" onClick={toggleFilters}><ion-icon name="funnel-outline"></ion-icon></button>
            </div>}
            {hasHelper && 
                <div className="helper">
                    <button className="search-btn" onClick={toggleHelp}><ion-icon name="help-outline"></ion-icon></button>
                </div>
            }
        </div>
    );
}