const content = {
    "javascript": "JavaScript is a versatile programming language commonly used in web development. It allows you to create interactive websites and applications.",
    "html": "HTML stands for HyperText Markup Language and is used to create the structure of web pages. It provides the basic building blocks for web development.",
    "css": "CSS stands for Cascading Style Sheets and is used to style web pages. It allows you to add colors, fonts, and layouts to your website.",
    "python": "Python is a popular high-level programming language known for its readability and versatility. It's widely used in web development, data analysis, artificial intelligence, and scientific computing.",
    "react": "React is a JavaScript library for building user interfaces. It allows you to create reusable UI components and manage the state of your application efficiently.",
    "nodejs": "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript on the server-side, making it possible to build scalable network applications.",
    "sql": "SQL stands for Structured Query Language and is used to manage and manipulate relational databases. It's essential for backend development and data analysis.",
    "java": "Java is a high-level programming language used for building server-side applications, mobile applications, and large systems. It's known for its portability and performance.",
    "c++": "C++ is a powerful programming language used for system/software development, game development, and performance-critical applications. It offers low-level memory manipulation and high performance.",
    "php": "PHP is a server-side scripting language used for web development. It's widely used to build dynamic web pages and applications."
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
