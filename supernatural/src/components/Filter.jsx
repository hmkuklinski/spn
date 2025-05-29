export default function Filter({speciesList, filters, updateFilter}){
    return (
        <div style={{ marginBottom: "1rem" }}>
            {speciesList.map((species, index) => (
                <button key={species} onClick={() => updateFilter(species)} className={filters[species] ? 'btn-filter active' : 'btn-filter'}>
                {species}
                </button>
            ))}
        </div>
    );
}