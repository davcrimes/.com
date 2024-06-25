const content = {
    "javascript": "JavaScript is a versatile programming language commonly used in web development.",
    "html": "HTML stands for HyperText Markup Language and is used to create the structure of web pages.",
    "css": "CSS stands for Cascading Style Sheets and is used to style web pages.",
    "python": "Python is a popular high-level programming language known for its readability and versatility."
};

function searchContent() {
    const query = document.getElementById('searchBar').value.toLowerCase();
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    if (content[query]) {
        resultsDiv.innerHTML = `<p>${content[query]}</p>`;
    } else {
        resultsDiv.innerHTML = '<p>No content found for this keyword.</p>';
    }
}
