import React, { useState, useEffect } from "react";
import { fakeCreate } from "../utils/create";
import TextField from "../components/TextField";
import { Button } from "@mui/material";
import Checkbox from "../components/Checkbox";
import Fab from "../components/Fab";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    categories: {
      games: false,
      movies: false,
      books: false,
    },
    termsAccepted: false,
  });
  const [message, setMessage] = useState("");
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  useEffect(() => {
    validateForm();
  }, [formData]);

  const validateForm = () => {
    const { categories } = formData;
    const isValid = categories.games || categories.movies || categories.books;
    setIsSubmitDisabled(!isValid);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isSubmitDisabled) {
      setMessage("Por favor, selecione pelo menos uma categoria.");
      return;
    }
    fakeCreate(formData)
      .then((response) => {
        if (response.success) {
          setMessage("Item criado com sucesso!");
        } else {
          setMessage("Falha ao criar o item.");
        }
      })
      .catch((error) => {
        setMessage("Erro ao processar a criação do item.");
        console.error("Erro ao criar o item:", error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCategoryChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      categories: { ...formData.categories, [name]: checked },
    });
  };

  const handleTermsChange = (e) => {
    setFormData({ ...formData, termsAccepted: e.target.checked });
  };

  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">
          Formulário de Criação de Item
        </h1>
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <TextField
            required
            fullWidth
            label="Nome"
            variant="outlined"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <TextField
            required
            fullWidth
            label="Descrição"
            variant="outlined"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            multiline
            rows={4}
          />
          <div className="flex flex-col gap-4">
            <h3>Qual a categoria do item?</h3>
            <Checkbox
              checked={formData.categories.games}
              onChange={handleCategoryChange}
              name="games"
              label="Jogos"
            />
            <Checkbox
              checked={formData.categories.movies}
              onChange={handleCategoryChange}
              name="movies"
              label="Filmes"
            />
            <Checkbox
              checked={formData.categories.books}
              onChange={handleCategoryChange}
              name="books"
              label="Livros"
            />
            <Checkbox
              checked={formData.termsAccepted}
              onChange={handleTermsChange}
              name="termsAccepted"
              label="Outros"
            />
          </div>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isSubmitDisabled}
          >
            Criar Item
          </Button>
          {message && <p className="text-emerald-300">{message}</p>}
        </form>
      </div>
      <Fab />
    </div>
  );
}
