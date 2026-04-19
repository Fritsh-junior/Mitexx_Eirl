import { useState, useMemo } from "react";
import { Link } from "react-router";
import { materiales } from "../DB/dbproduct";
import {
  FiSearch,
  FiSliders,
  FiTrash2,
  FiChevronRight,
  FiChevronLeft,
  FiX,
  FiChevronDown,
} from "react-icons/fi";

export default function ProductoList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [sortBy, setSortBy] = useState("recomendados");
  const [pageInput, setPageInput] = useState(1);
  const [isFilterOpen, setIsFilterOpen] = useState(false); // Nuevo estado para móvil

  const itemsPerPage = 16;
  const GLOBAL_DISCOUNT = 0.1;

  const formatPrice = (val) =>
    new Intl.NumberFormat("es-PE", {
      style: "currency",
      currency: "PEN",
    }).format(val);

  const getMainCategory = (category) => {
    if (!category) return "Otros";
    const cleaned = category.replace(/[/\\]/g, " > ").trim();
    return cleaned.split(">")[0].trim() || "Otros";
  };

  const filtered = useMemo(() => {
    let result = [...materiales];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.product_name?.toLowerCase().includes(q) ||
          p.marca?.toLowerCase().includes(q),
      );
    }

    if (selectedCategory !== "Todos") {
      result = result.filter(
        (p) => getMainCategory(p.category) === selectedCategory,
      );
    }

    if (priceRange.min || priceRange.max) {
      result = result.filter((p) => {
        const pVal = Number(p.price);
        return (
          (!priceRange.min || pVal >= Number(priceRange.min)) &&
          (!priceRange.max || pVal <= Number(priceRange.max))
        );
      });
    }

    if (sortBy === "precio-asc")
      result.sort((a, b) => Number(a.price) - Number(b.price));
    if (sortBy === "precio-desc")
      result.sort((a, b) => Number(b.price) - Number(a.price));

    return result;
  }, [searchQuery, selectedCategory, priceRange, sortBy]);

  const totalPages = Math.ceil(filtered.length / itemsPerPage) || 1;

  const currentPage = useMemo(() => {
    return Math.min(Math.max(1, pageInput), totalPages);
  }, [pageInput, totalPages]);

  const currentProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filtered.slice(start, start + itemsPerPage);
  }, [filtered, currentPage]);

  const categories = useMemo(() => {
    const cats = materiales
      .map((p) => getMainCategory(p.category))
      .filter(Boolean);

    const uniqueCategories = [...new Set(cats)].sort();
    return ["Todos", ...uniqueCategories];
  }, []);

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("Todos");
    setPriceRange({ min: "", max: "" });
    setSortBy("recomendados");
    setPageInput(1);
    setIsFilterOpen(false);
  };

  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat);
    setPageInput(1);
    // Cerrar filtros automáticamente en móvil
    if (window.innerWidth < 1024) {
      setIsFilterOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mx-auto px-4 sm:px-6 lg:px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Todos los Productos
            </h1>
            <p className="text-gray-600 mt-1">
              {filtered.length} de {materiales.length} productos
            </p>
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 mt-4 md:mt-0"
          >
            <option value="recomendados">Recomendados</option>
            <option value="precio-asc">Precio: menor a mayor</option>
            <option value="precio-desc">Precio: mayor a menor</option>
          </select>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ====================== FILTROS RESPONSIVE ====================== */}
          {/* Botón para abrir filtros en móvil */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="w-full flex items-center justify-between bg-white border border-gray-200 rounded-2xl px-6 py-4 shadow-sm hover:shadow transition-all"
            >
              <div className="flex items-center gap-3">
                <FiSliders className="text-2xl text-amber-600" />
                <span className="font-semibold text-gray-900">Filtros</span>
              </div>
              {isFilterOpen ? (
                <FiChevronDown size={24} />
              ) : (
                <FiChevronRight size={24} />
              )}
            </button>
          </div>

          {/* Sidebar de filtros */}
          <aside
            className={`lg:w-80 bg-white border border-gray-200 rounded-2xl shadow-sm p-6  lg:top-8 h-fit
              ${isFilterOpen ? "block" : "hidden"} lg:block`}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">Filtros</h2>
              <div className="flex items-center gap-4">
                <button
                  onClick={resetFilters}
                  className="text-sm text-amber-600 hover:text-amber-700 font-medium flex items-center gap-1"
                >
                  <FiTrash2 size={16} />
                  Limpiar
                </button>

                {/* Botón cerrar en móvil */}
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="lg:hidden text-gray-400 hover:text-gray-600"
                >
                  <FiX size={24} />
                </button>
              </div>
            </div>

            {/* Buscador */}
            <div className="relative mb-8">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                🔍
              </div>
              <input
                type="text"
                placeholder="Buscar producto..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none"
              />
            </div>

            {/* Categorías */}
            <div className="mb-8">
              <h3 className="font-semibold text-gray-800 mb-4">Categoría</h3>
              <div className="hidden lg:block  max-h-96 overflow-y-auto pr-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleCategoryClick(cat)}
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex justify-between items-center group ${
                      selectedCategory === cat
                        ? "bg-amber-600 text-white font-bold shadow-md shadow-amber-200"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {cat}
                    {selectedCategory !== cat && (
                      <FiChevronRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Rango de Precio (versión compacta) */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Precio (S/)</h3>
              <div className="flex gap-4">
                <div className="flex-1">
                  <input
                    type="number"
                    placeholder="Mínimo"
                    value={priceRange.min}
                    onChange={(e) =>
                      setPriceRange({ ...priceRange, min: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-amber-500 outline-none text-sm"
                  />
                </div>
                <div className="flex-1">
                  <input
                    type="number"
                    placeholder="Máximo"
                    value={priceRange.max}
                    onChange={(e) =>
                      setPriceRange({ ...priceRange, max: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-amber-500 outline-none text-sm"
                  />
                </div>
              </div>
            </div>
          </aside>

          <main className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-xl font-semibold text-gray-700">
                  No se encontraron productos
                </p>
                <p className="mt-2 text-gray-500">
                  Intenta cambiar los filtros
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {currentProducts.map((product) => {
                  const currentPrice = Number(product.price);
                  const originalPrice = currentPrice / (1 - GLOBAL_DISCOUNT);

                  return (
                    <Link
                      key={product.id}
                      to={`/materiales/${product.id}`}
                      className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all group"
                    >
                      <div className="relative h-56 bg-gray-50 flex items-center justify-center p-4">
                        <img
                          src={product.image_url}
                          alt={product.product_name}
                          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                        <span className="absolute top-4 left-4 bg-green-400 text-white text-[10px] font-black px-3 py-1.5 rounded-lg uppercase shadow-lg shadow-red-200">
                          -10% EXCLUSIVO
                        </span>
                      </div>

                      <div className="p-5">
                        <span className="text-xs font-medium bg-gray-100 px-3 py-1 rounded-lg text-gray-600">
                          {product.brand || product.marca}
                        </span>
                        <h3 className="font-semibold text-base leading-tight line-clamp-3 min-h-15 mt-2 group-hover:text-amber-700">
                          {product.product_name}
                        </h3>

                        <div className="mt-auto pt-4 border-t border-gray-50">
                          <p className="text-xs text-gray-400 line-through mb-1">
                            {formatPrice(originalPrice)}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-2xl font-black text-gray-900">
                              {formatPrice(currentPrice)}
                            </span>
                            <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-amber-600 group-hover:text-white transition-all shadow-sm">
                              <FiChevronRight size={20} />
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 text-sm flex justify-between items-center">
                          <span className="text-green-400">Disponibles</span>
                          <span className="text-amber-500 font-medium">
                            Ver detalle →
                          </span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}

            {/* Paginación */}
            {totalPages > 1 && (
              <div className="mt-12 flex justify-center items-center gap-1 flex-wrap">
                <button
                  onClick={() => setPageInput(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="flex items-center gap-2 px-5 py-3 border border-gray-300 rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors text-sm font-medium"
                >
                  ← Anterior
                </button>

                <div className="flex items-center gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => {
                      const showPage =
                        page === 1 ||
                        page === totalPages ||
                        (page >= currentPage - 2 && page <= currentPage + 2);

                      if (!showPage) {
                        if (
                          (page === currentPage - 3 && currentPage > 5) ||
                          (page === currentPage + 3 &&
                            currentPage < totalPages - 4)
                        ) {
                          return (
                            <span
                              key={page}
                              className="px-4 py-3 text-gray-400"
                            >
                              ...
                            </span>
                          );
                        }
                        return null;
                      }

                      return (
                        <button
                          key={page}
                          onClick={() => setPageInput(page)}
                          className={`min-w-11 h-11 flex items-center justify-center rounded-2xl border transition-all text-sm font-medium ${
                            currentPage === page
                              ? "bg-amber-600 text-white border-amber-600 shadow-sm"
                              : "border-gray-300 hover:bg-gray-50 hover:border-gray-400"
                          }`}
                        >
                          {page}
                        </button>
                      );
                    },
                  )}
                </div>

                <button
                  onClick={() => setPageInput(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="flex items-center gap-2 px-5 py-3 border border-gray-300 rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors text-sm font-medium"
                >
                  Siguiente →
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
