import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createManga, updateManga } from '../utils/api';

interface CreateMangaProps {
  isEditing?: boolean;
  existingManga?: {
    id: string;
    title: string;
    author: string;
    description: string;
    image: string;
  };
}

const CreateManga: React.FC<CreateMangaProps> = ({ isEditing = false, existingManga }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: existingManga?.title || '',
    author: existingManga?.author || '',
    description: existingManga?.description || '',
    image: existingManga?.image || '',
  });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isEditing && existingManga?.id) {
        await updateManga(existingManga.id, formData); // Update existing manga
      } else {
        await createManga(formData); // Create new manga
      }
      navigate('/'); // Redirect to homepage
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError('Failed to save manga. Please try again.');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-5xl font-bold text-center mb-8">{isEditing ? 'Edit Manga' : 'Create Manga'}</h1>
      {error && <div className="text-red-500 text-center mb-4">{error}</div>}
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 shadow-md rounded">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full p-3 mb-4 border rounded"
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={formData.author}
          onChange={handleChange}
          required
          className="w-full p-3 mb-4 border rounded"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
          className="w-full p-3 mb-4 border rounded"
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          required
          className="w-full p-3 mb-4 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-[#148da1] text-white font-bold p-3 rounded hover:bg-[#0d7ea8] transition"
        >
          {isEditing ? 'Update Manga' : 'Create Manga'}
        </button>
      </form>
    </div>
  );
};

export default CreateManga;
