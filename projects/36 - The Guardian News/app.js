//
//

// https://content.guardianapis.com/search?api-key=1c2feaeb-9ecf-4f06-bf23-eda7dfa6e59d
// api-key=1c2feaeb-9ecf-4f06-bf23-eda7dfa6e59d

const newsInput = document.querySelector('.news-input');
const form = document.querySelector('form');

const newsContainer = document.querySelector('.news-container');

newsInput.focus();

form.addEventListener('submit', function (e) {
  e.preventDefault();

  let searchQuery = newsInput.value;

  fetchNews(searchQuery);
});

async function fetchNews(searchQuery) {
  const API_KEY = '1c2feaeb-9ecf-4f06-bf23-eda7dfa6e59d';
  const response = await fetch(
    `https://content.guardianapis.com/search?q=${searchQuery}&api-key=${API_KEY}`
  );
  const responseData = await response.json();

  newsResults(responseData.response.results);

  // console.log(responseData.response.results);
  // newsContainer.innerHTML = `<a href="${responseData.response.results[0].webUrl}">${responseData.response.results[0].webUrl}</a>`;
}

function newsResults(results) {
  let fetchedNews = '';

  // console.log(results);

  results.forEach((result) => {
    let newsSection = result.sectionName;
    let newsDate = result.webPublicationDate;

    let newsURL = result.webUrl;
    let newsTitle = result.webTitle;

    fetchedNews += `
      <div class="news">
        <p>${newsSection}</p>
        <p>${newsDate}</p>
        <a href="${newsURL}" target="_blank">${newsTitle}</a>
      </div>    
    `;

    newsContainer.innerHTML = fetchedNews;
  });
}
