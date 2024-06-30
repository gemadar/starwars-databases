async function GET (url) {
      let allCharacters = [];
      let nextPage = url;

      // Loop through all pages until nextPage is null (no more pages)
      while (nextPage) {
        const response = await fetch(nextPage);
        const data = await response.json();

        allCharacters = [...allCharacters, ...data.results];
        nextPage = data.next; // Update nextPage with the URL of the next page
      }
    }

  export { GET };