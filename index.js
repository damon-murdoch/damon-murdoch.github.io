// Populate the page content

// Get the window location query
const query = window.location.search;

// Get the url search params from the query
const params = new URLSearchParams(query);

// Page title
let pagetitle = null;

// Loop over the pages
for (const page of Object.keys(PAGES))
{
  // If the page is in the params
  if (params.has(page))
  {
    // Set this page to the active page
    pagetitle = page;

    // Break the loop
    break;
  }
}

// If the title is NOT set
if (pagetitle === null)
{
  // Set the page to the home page
  pagetitle = 'home';
}

// getNavbar(): Void
function getNavbar()
{
  // Get the navbar element from the element list
  const navbar = document.getElementById('navbar');

  // Loop over the pages
  for(const page of Object.keys(PAGES))
  {
    // Get the content for the page
    content = PAGES[page];

    // Create a new 'a' element
    let a = document.createElement('a');

    // Set the classes for the a element
    a.classList = 'link-secondary mx-2';

    // Set the link to the href
    a.href = content.link;

    // Set the inner html to the title
    a.innerHTML = content.name;

    // Add the link to the navbar
    navbar.appendChild(a);
  }
}

// getContent(): Void
function getContent(pagetitle)
{
  // Get the page content
  content = PAGES[pagetitle];

  // Set the title to the page title
  document.getElementById("page-title").innerHTML = content.title;
  
  // Set the content to the page content
  document.getElementById("page-content").innerHTML = content.content;
}

// Build the navigation bar
getNavbar();

// Set the page content
getContent(pagetitle);