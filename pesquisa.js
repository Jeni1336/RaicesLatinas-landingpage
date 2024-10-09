const searchTerm = "tecnologia";
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const results = data.filter(item => item.titulo.toLowerCase().includes(searchTerm.toLowerCase()));
    console.log(results);
  });
