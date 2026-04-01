import { useState, useMemo } from "react";
import { Link } from "react-router"; // ← CORREGIDO
import { materiales } from "../DB/database";

export default function ProductoList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedBrand, setSelectedBrand] = useState("Todos");
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [sortBy, setSortBy] = useState("recomendados");
  const [pageInput, setPageInput] = useState(1);

  const itemsPerPage = 20;

  const getMainCategory = (categoryPath) => {
    if (!categoryPath || typeof categoryPath !== "string") return "Otros";

    let cleaned = categoryPath
      .replace(/^\s*[/\\]/, "") // Corregido escape
      .replace(/[/\\]/g, " > ")
      .trim();

    const parts = cleaned
      .split(">")
      .map((p) => p.trim())
      .filter(Boolean);
    return parts[0] || "Otros";
  };

  const filtered = useMemo(() => {
    let result = [...materiales];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.product_name?.toLowerCase().includes(q) ||
          p.brand?.toLowerCase().includes(q),
      );
    }

    if (selectedBrand !== "Todos") {
      result = result.filter((p) => p.brand === selectedBrand);
    }

    if (selectedCategory !== "Todos") {
      result = result.filter(
        (p) => getMainCategory(p.category_path) === selectedCategory,
      );
    }

    if (priceRange.min || priceRange.max) {
      result = result.filter((p) => {
        const price = Number(p.price) || 0;
        return (
          (!priceRange.min || price >= Number(priceRange.min)) &&
          (!priceRange.max || price <= Number(priceRange.max))
        );
      });
    }

    if (sortBy === "precio-asc") {
      result.sort((a, b) => Number(a.price) - Number(b.price));
    } else if (sortBy === "precio-desc") {
      result.sort((a, b) => Number(b.price) - Number(a.price));
    }

    return result;
  }, [searchQuery, selectedCategory, selectedBrand, priceRange, sortBy]);

  const totalPages = Math.ceil(filtered.length / itemsPerPage) || 1;

  const currentPage = useMemo(() => {
    return Math.min(Math.max(1, pageInput), totalPages);
  }, [pageInput, totalPages]);

  const currentProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filtered.slice(start, start + itemsPerPage);
  }, [filtered, currentPage]);

  const goToPage = (page) => {
    setPageInput(page);
  };

  // Categorías y Marcas (CORREGIDO)
  const categories = useMemo(() => {
    const cats = materiales.map((p) => getMainCategory(p.category_path));
    return ["Todos", ...new Set(cats)].sort();
  }, []);

  const brands = useMemo(() => {
    return [
      "Todos",
      ...new Set(materiales.map((p) => p.brand).filter(Boolean)),
    ].sort();
  }, []);

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("Todos");
    setSelectedBrand("Todos");
    setPriceRange({ min: "", max: "" });
    setSortBy("recomendados");
    setPageInput(1);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
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
            className="border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            <option value="recomendados">Recomendados</option>
            <option value="precio-asc">Precio: menor a mayor</option>
            <option value="precio-desc">Precio: mayor a menor</option>
          </select>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar de Filtros */}
          <aside className="lg:w-80 bg-white border border-gray-200 rounded-2xl shadow-sm p-6 lg:sticky lg:top-8 h-fit">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">Filtros</h2>
              <button
                onClick={resetFilters}
                className="text-sm text-amber-600 hover:text-amber-700 font-medium"
              >
                Limpiar todo
              </button>
            </div>

            {/* Buscador */}
            <div className="relative mb-8">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                🔍
              </div>
              <input
                type="text"
                placeholder="Buscar cerradura..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none"
              />
            </div>

            {/* Categorías */}
            <div className="mb-8">
              <h3 className="font-semibold text-gray-800 mb-4">Categoría</h3>
              <div className="space-y-1 max-h-64 overflow-y-auto pr-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setSelectedBrand("Todos");
                    }}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all ${
                      selectedCategory === cat
                        ? "bg-amber-600 text-white"
                        : "hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Marcas */}
            <div className="mb-8">
              <h3 className="font-semibold text-gray-800 mb-4">Marca</h3>
              <div className="space-y-1 max-h-64 overflow-y-auto pr-2">
                {brands.map((brand) => (
                  <button
                    key={brand}
                    onClick={() => setSelectedBrand(brand)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all ${
                      selectedBrand === brand
                        ? "bg-amber-600 text-white"
                        : "hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    {brand}
                  </button>
                ))}
              </div>
            </div>

            {/* Precio */}
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
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-amber-500 outline-none"
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
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-amber-500 outline-none"
                  />
                </div>
              </div>
            </div>
          </aside>

          {/* Productos */}
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
                  const discountPercent = product.discount
                    ? parseInt(product.discount)
                    : product.list_price
                      ? Math.round(
                          ((parseFloat(
                            product.list_price.replace(/[^0-9.]/g, ""),
                          ) -
                            product.price) /
                            parseFloat(
                              product.list_price.replace(/[^0-9.]/g, ""),
                            )) *
                            100,
                        )
                      : 0;

                  return (
                    <Link
                      key={product.sku}
                      to={`/materiales/${product.sku}`}
                      className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all group"
                    >
                      <div className="relative h-56 bg-gray-50 flex items-center justify-center p-4">
                        <img
                          src={product.image_url}
                          alt={product.product_name}
                          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                        {discountPercent > 0 && (
                          <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                            -{discountPercent}%
                          </div>
                        )}
                      </div>

                      <div className="p-5">
                        <span className="text-xs font-medium bg-gray-100 px-3 py-1 rounded-lg text-gray-600">
                          {product.brand}
                        </span>
                        <h3 className="font-semibold text-base leading-tight line-clamp-3 min-h-15 mt-2 group-hover:text-amber-700">
                          {product.product_name}
                        </h3>

                        <div className="mt-4">
                          {product.list_price && (
                            <p className="text-sm text-gray-400 line-through">
                              S/{" "}
                              {parseFloat(
                                product.list_price.replace(/[^0-9.]/g, ""),
                              ).toFixed(2)}
                            </p>
                          )}
                          <p className="text-2xl font-bold text-gray-900">
                            S/ {Number(product.price).toFixed(2)}
                          </p>
                        </div>

                        <div className="mt-4 text-sm flex justify-between items-center">
                          <span
                            className={
                              product.available_quantity > 0
                                ? "text-green-600"
                                : "text-red-500"
                            }
                          >
                            {product.available_quantity > 0
                              ? `${product.available_quantity} disponibles`
                              : "Agotado"}
                          </span>
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
              <div className="mt-12 flex justify-center items-center gap-2 flex-wrap">
                <button
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-5 py-2.5 border border-gray-300 rounded-xl disabled:opacity-50 hover:bg-gray-50"
                >
                  Anterior
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => goToPage(page)}
                      className={`px-4 py-2.5 border rounded-xl transition ${
                        currentPage === page
                          ? "bg-amber-600 text-white"
                          : "border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      {page}
                    </button>
                  ),
                )}

                <button
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-5 py-2.5 border border-gray-300 rounded-xl disabled:opacity-50 hover:bg-gray-50"
                >
                  Siguiente
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
