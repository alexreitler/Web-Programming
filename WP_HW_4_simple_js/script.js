function removeAAttr() {
  // Get all the <a> tags in the document
  const links = document.getElementsByTagName("a");
  // Loop through each <a> tag
  for (let i = links.length - 1; i >= 0; i--) {
    // Get the href attribute of the <a> tag
    const href = links[i].getAttribute("href");
    // Check if the href attribute starts with "http://www.scs.ubbcluj.ro"
    if (href && href.startsWith("https://www.scs.ubbcluj.ro")) {
      // Remove the <a> tag from the document
      links[i].parentNode.removeChild(links[i]);
    }
  }
}
