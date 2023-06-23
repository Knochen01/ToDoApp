type PageProps = {
  params: {
    searchTerm: string;
  };
};

type SearchResult = {
  organic_results: [
    {
      positon: number;
      title: string;
      thumbnail: string;
      snippet: string;
    }
  ];
};

const Search = async (searchTerm: string) => {
  const API_KEY =
    "48f0d35d9ce75eb20fae1ee624a146aa667a6b6211516aedd9a02431f95506c0";
  const response = await fetch(
    `https://serpapi.com/search.json?q=${searchTerm}&api_key=${API_KEY}`
  );

  const data: SearchResult = await response.json();
  return data;
};

async function SearchResults({ params: { searchTerm } }: PageProps) {
  const searchResults = await Search(searchTerm);
  return (
    <div>
      <p className="text-gray-500 text-sm">You searched for: {searchTerm}</p>
      <ol className="space-y-t p-5 ">
        {searchResults.organic_results.map((result) => (
          <li key={result.positon} className="list-decimal mb-3">
            <p className="font-bold">{result.title}</p>
            <p>{result.snippet}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default SearchResults;
