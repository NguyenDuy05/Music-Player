export default function SearchBar({ search, setSearch }) {

    return (

        <div className="search">

            <input
                type="text"
                placeholder="Search music..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

        </div>

    )

}