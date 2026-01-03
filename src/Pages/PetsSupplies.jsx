import React, { useMemo, useState } from "react";
import PetsSuppliesCard from "../componet/PetsSuppliesCard";
import { useLoaderData } from "react-router";
import Loading from "./Loading";

const PetsSupplies = () => {
  const data = useLoaderData();

  const [models, setModels] = useState(data);
  const [select, setSelect] = useState("");
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const itemsPerPage = 6;


  const handleSearchCategory = (e) => {
    const category = e.target.value;
    setSelect(category);
    setCurrentPage(1);

    if (!category) {
      setModels(data);
      return;
    }

    setLoading(true);
    fetch(`https://pawmart-server-gray.vercel.app/category-filter/${category}`)
      .then((res) => res.json())
      .then((resData) => {
        setModels(resData.result);
        setLoading(false);
      });
  };


  const searchedModels = useMemo(() => {
    return models.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.location.toLowerCase().includes(search.toLowerCase())
    );
  }, [models, search]);

  const sortedModels = useMemo(() => {
    let sorted = [...searchedModels];

    if (sort === "price-asc") sorted.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") sorted.sort((a, b) => b.price - a.price);
    if (sort === "rating")
      sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));

    return sorted;
  }, [searchedModels, sort]);

  /* 📄 Pagination */
  const totalPages = Math.ceil(sortedModels.length / itemsPerPage);

  const paginatedModels = sortedModels.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (loading) return <Loading />;

  return (
    <div className="max-w-7xl mx-auto px-4">

      {/* 🔍 Filter / Search / Sort */}
      <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">

        {/* Category */}
        <select
          value={select}
          onChange={handleSearchCategory}
          className="select rounded-full"
        >
          <option value="">All Category</option>
          <option value="Pets">Pets</option>
          <option value="Pet Food">Pet Food</option>
          <option value="Accessories">Accessories</option>
          <option value="Pet Care Products">Pet Care Products</option>
        </select>

        <div className="flex flex-col md:mt-16 mx-auto md:flex-row justify-between items-center gap-4 ">

          {/* Category */}
          <select
            value={select}
            onChange={handleSearchCategory}
            className="select rounded-full w-full md:w-56"
          >
            <option value="">All Category</option>
            <option value="Pets">Pets</option>
            <option value="Pet Food">Pet Food</option>
            <option value="Accessories">Accessories</option>
            <option value="Pet Care Products">Pet Care Products</option>
          </select>

          {/* Search (LEFT) */}
          <input
            type="text"
            placeholder="Search by name or location..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="input input-bordered rounded-full w-full md:w-72"
          />

          {/* Sort (RIGHT) */}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="select rounded-full w-full md:w-56"
          >
            <option value="">Sort By</option>
            <option value="price-asc">Price: Low → High</option>
            <option value="price-desc">Price: High → Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

      </div>

      {/* 🐾 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {paginatedModels.map((model) => (
          <PetsSuppliesCard key={model._id} model={model} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-10">
          <button
            className="btn btn-outline"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            Prev
          </button>

          <span className="font-bold">
            {currentPage} / {totalPages}
          </span>

          <button
            className="btn btn-outline"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default PetsSupplies;
