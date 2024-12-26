import React, { useState, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { api } from "../utils/api";
import UserAvatar from "../components/UserAvatar";
import { Manga } from "../types"; // Import Manga type

const Profile: React.FC = () => {
  const { user, setUser } = useAuth();
  const [formData, setFormData] = useState({
    username: user?.username || "",
    email: user?.email || "",
    avatar: user?.avatar || "",
  });
  const [mangaList, setMangaList] = useState<Manga[]>([]); // Use Manga[] instead of any[]
  const [activeTab, setActiveTab] = useState("profile"); // Active tab state
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (activeTab === "manga") {
      const fetchUserManga = async () => {
        try {
          const response = await api.get(`/manga?author=${user?.id}`); // Fetch user's manga
          setMangaList(response.data.docs || []);
        } catch (error) {
          console.error("Failed to fetch manga:", error);
        }
      };
      fetchUserManga();
    }
  }, [activeTab, user?.id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await api.patch("/users/me", formData);
      setUser(response.data);
      setSuccessMessage("Profile updated successfully!");
    } catch (error) {
      console.error("Failed to update profile:", error);
      setErrorMessage("Failed to update profile. Please try again.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-5xl font-bold text-center mb-8">Profile</h1>

      <div className="flex justify-center mb-6">
        <button
          onClick={() => setActiveTab("profile")}
          className={`px-4 py-2 rounded-l ${
            activeTab === "profile" ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
        >
          Profile Info
        </button>
        <button
          onClick={() => setActiveTab("manga")}
          className={`px-4 py-2 rounded-r ${
            activeTab === "manga" ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
        >
          My Manga
        </button>
      </div>

      {activeTab === "profile" && (
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white p-6 shadow-md rounded"
        >
          {successMessage && (
            <div className="text-green-500 text-center mb-4">
              {successMessage}
            </div>
          )}
          {errorMessage && (
            <div className="text-red-500 text-center mb-4">{errorMessage}</div>
          )}
          <div className="flex justify-center mb-6">
            <UserAvatar
              imageUrl={formData.avatar}
              username={formData.username}
            />
          </div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
            className="w-full p-3 mb-4 border rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 mb-4 border rounded"
          />
          <input
            type="text"
            name="avatar"
            placeholder="Avatar URL"
            value={formData.avatar}
            onChange={handleChange}
            className="w-full p-3 mb-4 border rounded"
          />
          <button
            type="submit"
            className="w-full bg-[#148da1] text-white font-bold p-3 rounded hover:bg-[#0d7ea8] transition"
          >
            Update Profile
          </button>
        </form>
      )}

      {activeTab === "manga" && (
        <div>
          <h2 className="text-3xl font-bold text-center mb-6">My Manga</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mangaList.map((manga) => (
              <div key={manga.id} className="bg-white p-4 shadow rounded">
                <img
                  src={manga.image}
                  alt={manga.title}
                  className="rounded mb-4"
                />
                <h3 className="text-lg font-bold">{manga.title}</h3>
                <p>{manga.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
