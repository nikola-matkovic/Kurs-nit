const getQuotes = async () => {
  let address = createAddress();
  try {
    const response = await fetch(address);
    const result = await response.json();
    return result.results;
  } 
  catch (error) {
    console.log(error);
  }
};

function createAddress(){
  let page  = parseInt(document.getElementById("page-number").value);
  let sortBy = document.getElementById("sort-by").value;
  let order = document.getElementById("order").value;
  let address = "https://api.quotable.io/quotes?";
  address += `${page ? `page=${page}` : "page=1"}`;
  address += `${sortBy ? `&sortBy=${sortBy}` : "&sortBy=dateAdded"}`;
  address += `${order ? `&order=${order}` : "&order=desc"}`;
  console.log(address);
  return address;
}

const contentDiv = document.getElementById("content");

const createCardNode = (author, quote) => {
  return `
    <div class="card">
      <div class="card-body">
        <p class="card-text"> ${quote} </p>
      </div>
  <footer class="blockquote-footer">
    <small class="text-muted"> ${author} </small>
  </footer>
</div>`;
};
  

button.addEventListener("click", load)
function load(){
  contentDiv.innerHTML = ""
  getQuotes().then((result) => {
    result.forEach((quote) => {
      const newCard = createCardNode(quote.author, quote.content);
      contentDiv.innerHTML += newCard;
    });
  });
}