import React, { useState, useEffect } from "react";

import "./styles.css";
import api from "./services/api";

function App() {
  const [repositories, setRepositories] = useState([]);

  const [title, setTitle] = useState('');

  useEffect(() => {
    api.get('repositories')
      .then(response => setRepositories(response.data))
      .catch(error => console.log(error));
  }, []);

  useEffect(() => console.log(repositories), []);

  function handleInputChange(event) {
    const title = event.target.value;
    setTitle(title);
  }

  async function handleAddRepository(event) {
    event.preventDefault();

    const inputField = document.getElementById('title');

    const title = inputField.value;

    const repositoryData = {
      title: title,
      url: "http://github.com/desafio1",
      techs: ["Nodejs", "express"]
    }

    const response = await api.post('repositories', repositoryData);

    const createdRepository = response.data;

    if (createdRepository) {
      setRepositories([...repositories, createdRepository]);
    }
  }

  async function handleRemoveRepository(id) {
    const repositoryIndex = repositories.findIndex(repo => repo.id === id);

    if (repositoryIndex < 0) {
      return;
    }

    const updatedRepositoryList = [...repositories];
    updatedRepositoryList.splice(repositoryIndex, 1);

    setRepositories(updatedRepositoryList);

    await api.delete(`repositories/${id}`);
  }

  return (
    <div>
      <form>
        <input
          id="title"
          type="text"
          value={title}
          onChange={handleInputChange}
          placeholder="Repository Title"
        />
        <button onClick={handleAddRepository}>Adicionar</button>
      </form>
      <ul data-testid="repository-list">
        {repositories.map(repository => (
          <li key={repository.id}>
            {repository.title}

            <button onClick={() => handleRemoveRepository(repository.id)}>
              Remover
          </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
