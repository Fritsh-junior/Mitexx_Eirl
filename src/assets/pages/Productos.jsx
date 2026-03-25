import { useState, useMemo } from "react";
import { Link } from "react-router"; // ← Corregido: react-router-dom
import {
  aceros,
  cemento,
  agregado,
  herramientas,
  bloques,
  cubos,
  seguridad,
} from "../DB/database";

const materiales = [
  ...aceros,
  ...cemento,
  ...agregado,
  ...herramientas,
  ...bloques,
  ...cubos,
  ...seguridad,
];

export default function ProductoList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedSubcategory, setSelectedSubcategory] = useState("Todos");
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [sortBy, setSortBy] = useState("recomendados");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 20;

  const filtered = useMemo(() => {
    let result = materiales.filter((p) => {
      const matchCategory =
        selectedCategory === "Todos" || p.category === selectedCategory;

      const matchSub =
        selectedSubcategory === "Todos" ||
        p.subcategory === selectedSubcategory;

      const matchSearch =
        !searchQuery.trim() ||
        p.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.subcategory?.toLowerCase().includes(searchQuery.toLowerCase());

      const matchPrice =
        (!priceRange.min || Number(p.price) >= Number(priceRange.min)) &&
        (!priceRange.max || Number(p.price) <= Number(priceRange.max));

      return matchCategory && matchSub && matchSearch && matchPrice;
    });

    if (sortBy === "precio-asc") {
      result = [...result].sort((a, b) => Number(a.price) - Number(b.price));
    } else if (sortBy === "precio-desc") {
      result = [...result].sort((a, b) => Number(b.price) - Number(a.price));
    }

    return result;
  }, [searchQuery, selectedCategory, selectedSubcategory, priceRange, sortBy]);

  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  const currentProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return filtered.slice(start, end);
  }, [filtered, currentPage]);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const nextPage = () => goToPage(currentPage + 1);
  const prevPage = () => goToPage(currentPage - 1);

  const categories = ["Todos", ...new Set(materiales.map((p) => p.category))];

  const subcategories = useMemo(() => {
    if (selectedCategory === "Todos") {
      return ["Todos", ...new Set(materiales.map((p) => p.subcategory))];
    }
    return [
      "Todos",
      ...new Set(
        materiales
          .filter((p) => p.category === selectedCategory)
          .map((p) => p.subcategory),
      ),
    ];
  }, [selectedCategory]);

  const resetPage = () => setCurrentPage(1);

  useMemo(() => {
    resetPage();
  }, [searchQuery, selectedCategory, selectedSubcategory, priceRange, sortBy]);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              {selectedCategory === "Todos"
                ? "Todos los Materiales"
                : selectedCategory}
            </h1>
            <p className="text-gray-600 mt-1">{filtered.length} Resultados</p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-4">
            <label className="text-sm text-gray-700">Ordenar por:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="recomendados">Recomendados</option>
              <option value="precio-asc">Precio: menor a mayor</option>
              <option value="precio-desc">Precio: mayor a menor</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:gap-8">
          <aside className="lg:w-80 xl:w-96 bg-white border border-gray-100 rounded-2xl shadow-sm p-6 lg:sticky lg:top-8 lg:self-start">
            {/* Título + Limpiar */}
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Filtros</h2>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("Todos");
                  setSelectedSubcategory("Todos");
                  setPriceRange({ min: "", max: "" });
                }}
                className="text-sm text-amber-600 hover:text-amber-700 font-medium"
              >
                Limpiar todo
              </button>
            </div>

            {/* Buscador */}
            <div className="relative mb-8">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Buscar varilla, cemento, acero..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setSelectedSubcategory("Todos");
                }}
                className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:border-amber-500 focus:ring-amber-500/20 outline-none"
              />
            </div>

            {/* Categorías */}
            <div className="mb-8">
              <h3 className="font-semibold text-gray-800 mb-4">Categorías</h3>

              {/* Desktop: Botones */}
              <div className="hidden lg:block space-y-1 max-h-72 overflow-y-auto pr-2 custom-scrollbar">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setSelectedSubcategory("Todos");
                    }}
                    className={`w-full text-left px-5 py-3.5 rounded-xl transition-all font-medium ${
                      selectedCategory === cat
                        ? "bg-amber-600 text-white"
                        : "hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Móvil: Select */}
              <div className="lg:hidden">
                <select
                  value={selectedCategory}
                  onChange={(e) => {
                    setSelectedCategory(e.target.value);
                    setSelectedSubcategory("Todos");
                  }}
                  className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:border-amber-500 outline-none text-gray-700"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Subcategorías */}
            {subcategories.length > 1 && (
              <div className="mb-8">
                <h3 className="font-semibold text-gray-800 mb-4">
                  Subcategorías
                </h3>

                {/* Desktop: Botones */}
                <div className="hidden lg:block space-y-1 max-h-72 overflow-y-auto pr-2 custom-scrollbar">
                  {subcategories.map((sub) => (
                    <button
                      key={sub}
                      onClick={() => setSelectedSubcategory(sub)}
                      className={`w-full text-left px-5 py-3.5 rounded-xl transition-all font-medium ${
                        selectedSubcategory === sub
                          ? "bg-amber-600 text-white"
                          : "hover:bg-gray-100 text-gray-700"
                      }`}
                    >
                      {sub}
                    </button>
                  ))}
                </div>

                {/* Móvil: Select */}
                <div className="lg:hidden">
                  <select
                    value={selectedSubcategory}
                    onChange={(e) => setSelectedSubcategory(e.target.value)}
                    className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:border-amber-500 outline-none text-gray-700"
                  >
                    {subcategories.map((sub) => (
                      <option key={sub} value={sub}>
                        {sub}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            {/* Precio */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">
                Rango de Precio (S/)
              </h3>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-xs text-gray-500 mb-1">
                    Mínimo
                  </label>
                  <input
                    type="number"
                    placeholder="0"
                    value={priceRange.min}
                    onChange={(e) =>
                      setPriceRange({ ...priceRange, min: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-amber-500 outline-none"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-xs text-gray-500 mb-1">
                    Máximo
                  </label>
                  <input
                    type="number"
                    placeholder="9999"
                    value={priceRange.max}
                    onChange={(e) =>
                      setPriceRange({ ...priceRange, max: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-amber-500 outline-none"
                  />
                </div>
              </div>
            </div>
          </aside>
          <main className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-xl font-semibold text-gray-700">
                  No encontramos materiales que coincidan
                </p>
                <p className="mt-3 text-gray-600">
                  Prueba otros filtros o términos de búsqueda
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {currentProducts.map((item) => {
                  const originalPrice = item.originalPrice || item.price * 1.3;
                  const hasDiscount =
                    item.discount || originalPrice > item.price;

                  return (
                    <Link
                      key={item.id}
                      to={`/materiales/${item.id}`}
                      className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow group"
                    >
                      <div className="relative">
                        <img
                          src={
                            item.image ||
                            "https://via.placeholder.com/400x300?text=Sin+Imagen"
                          }
                          alt={item.name}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {hasDiscount && (
                          <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                            -
                            {item.discount ||
                              Math.round(
                                (1 - item.price / originalPrice) * 100,
                              )}
                            %
                          </div>
                        )}
                      </div>

                      <div className="p-4">
                        <p className="text-xs text-gray-500 uppercase">
                          {item.subcategory || item.category}
                        </p>
                        <h3 className="font-medium text-base mt-1 line-clamp-2 min-h-[2.5rem] group-hover:text-amber-700">
                          {item.name}
                        </h3>

                        <div className="mt-2 flex flex-wrap gap-2 text-xs">
                          {Math.random() > 0.5 && (
                            <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">
                              Llega mañana
                            </span>
                          )}
                          {Math.random() > 0.6 && (
                            <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                              Retira hoy
                            </span>
                          )}
                        </div>

                        <div className="mt-3">
                          {hasDiscount && (
                            <p className="text-sm text-gray-500 line-through">
                              S/{" "}
                              {Number(originalPrice).toLocaleString("es-PE", {
                                minimumFractionDigits: 2,
                              })}
                            </p>
                          )}
                          <p className="text-2xl font-bold text-red-600">
                            S/{" "}
                            {Number(item.price).toLocaleString("es-PE", {
                              minimumFractionDigits: 2,
                            })}
                          </p>
                        </div>

                        <div className="mt-2 flex items-center text-amber-500 text-sm">
                          ★★★★☆ <span className="text-gray-500 ml-1">(12)</span>
                        </div>

                        <button className="mt-4 w-full bg-amber-500 hover:bg-amber-600 text-white py-2 rounded font-medium transition">
                          Ver detalle →
                        </button>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}

            {filtered.length > 0 && totalPages > 1 && (
              <div className="mt-10 flex justify-center items-center gap-3">
                <button
                  onClick={prevPage}
                  disabled={currentPage === 1}
                  className="px-4 py-2 border rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  &lt;
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => goToPage(page)}
                      className={`px-4 py-2 border rounded font-medium transition-colors ${
                        currentPage === page
                          ? "bg-amber-600 text-white"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      {page}
                    </button>
                  ),
                )}

                <button
                  onClick={nextPage}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 border rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  &gt;
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
