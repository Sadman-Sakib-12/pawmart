import React, { useMemo, useState } from "react";
import PetsSuppliesCard from "../componet/PetsSuppliesCard";
import { useLoaderData } from "react-router";
import Loading from "./Loading";

const PetsSupplies = () => {
  const initialData = useLoaderData() || []; 

  const [models, setModels] = useState(initialData);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const itemsPerPage = 6;

  const handleCategoryChange = async (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setSearch(""); 

    if (!category) {
      setModels(initialData);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(
        `https://pawmart-server-gray.vercel.app/category-filter/${category}`
      );

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      const data = await res.json();
      let filteredData = [];
      if (Array.isArray(data)) {
        filteredData = data;
      } else if (data.result && Array.isArray(data.result)) {
        filteredData = data.result;
      } else if (data.data && Array.isArray(data.data)) {
        filteredData = data.data;
      }

      console.log("Loaded category data:", filteredData); 
      setModels(filteredData);
    } catch (err) {
      console.error("Failed to load category:", err);
      setModels([]);
    } finally {
      setLoading(false);
    }
  };

  const searchedModels = useMemo(() => {
    if (!search.trim()) return models;
    return models.filter(
      (item) =>
        item.name?.toLowerCase().includes(search.toLowerCase()) ||
        item.location?.toLowerCase().includes(search.toLowerCase())
    );
  }, [models, search]);

  const sortedModels = useMemo(() => {
    const sorted = [...searchedModels];
    if (sort === "price-asc") sorted.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") sorted.sort((a, b) => b.price - a.price);
    if (sort === "rating")
      sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted;
  }, [searchedModels, sort]);


  const totalPages = Math.ceil(sortedModels.length / itemsPerPage);
  const paginatedModels = sortedModels.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const hasNoResults = paginatedModels.length === 0 && (search || selectedCategory);
  if (loading) return <Loading />;

  return (
    <div className="max-w-7xl mt-6 mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-primary mb-8">
        Pet Supplies Marketplace 
      </h1>
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-10 bg-base-100 p-6 rounded-3xl shadow-lg">
        <select
          value={selectedCategory}
          onChange={(e) => handleCategoryChange(e.target.value)}
          className="select select-primary w-full max-w-xs rounded-full"
        >
          <option value="">All Categories</option>
          <option value="Pets">Pets</option>
          <option value="Pet Food">Pet Food</option>
          <option value="Accessories">Accessories</option>
          <option value="Pet Care Products">Pet Care Products</option>
        </select>

        <input
          type="text"
          placeholder="Search by name or location..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="input input-bordered input-primary w-full max-w-md rounded-full"
        />

        <select
          value={sort}
          onChange={(e) => {
            setSort(e.target.value);
            setCurrentPage(1);
          }}
          className="select select-primary w-full max-w-xs rounded-full"
        >
          <option value="">Sort By</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating">Top Rated First</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15">
        {paginatedModels.map((model) => (
          <PetsSuppliesCard key={model._id} model={model} loading={loading} />
        ))}
      </div>


      {totalPages > 1 && !hasNoResults && (
        <div className="flex justify-center items-center gap-6 mt-12">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="btn btn-outline btn-primary rounded-full"
          >
            Previous
          </button>

          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`btn btn-circle ${
                  currentPage === i + 1 ? "btn-primary" : "btn-outline"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="btn btn-outline btn-primary rounded-full"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default PetsSupplies;