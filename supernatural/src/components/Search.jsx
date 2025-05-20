export default function Search({ searchType, placeholder, searchEntry, setSearchEntry, clickAction}) {
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            clickAction(); // This actually runs the function
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
        </div>
    );
}