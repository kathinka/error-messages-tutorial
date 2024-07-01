const searchParams = new URLSearchParams(window.location.search);


const id = String(searchParams.get("id"));


console.log(id.toUpperCase());
