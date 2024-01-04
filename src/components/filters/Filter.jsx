import React, { useState } from "react";
function Filter({ products, setFilteredProducts, currentItems, brands, chooseBrand }) {
  const [narx, setNarx] = useState(false);
  const [korxona, setKorxona] = useState(false);
  const [pamyat, setPamyat] = useState(false);
  const [ekran, setEkran] = useState(false);
  const [processor, setProcessor] =useState(false)
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const prices = products.map((el) => el.price);
  const max = Math.max(...prices);
  const min = Math.min(...prices);
  const handlePriceChange = () => {
    const filtered = products.filter((product) => {
      const price = product.price;
      if (minPrice && maxPrice) {
        return price >= minPrice && price <= maxPrice;
      } else if (minPrice) {
        return price >= minPrice;
      } else if (maxPrice) {
        return price <= maxPrice;
      }
      return true;
    });
    setFilteredProducts(filtered);
  };
  const storageFilter = (volume) => {
    const filter = products.filter((product) => {
      return product.localStorage === volume;
    });
    setFilteredProducts(filter);
  };
  const displayFilter = (dyuym, dyuym2) => {
    const filter = products.filter((product) => {
      return product.display > dyuym && product.display < dyuym2;
    });
    setFilteredProducts(filter);
  };
  const processFilter =(proc)=>{
    const filter = products.filter((product) => {
      return product.processor.toLowerCase().includes(proc.toLowerCase())
    });
    setFilteredProducts(filter);
  }
  return (
    <div className="filters">
      <div className="filter-type">
        <div onClick={() => setNarx(!narx)}>Цена $</div>
        {narx && (
          <div className="price-filter">
            <div>
              <label htmlFor="minPrice">от</label>
              <input
                className="range-input"
                type="number"
                id="minPrice"
                value={minPrice}
                placeholder={min}
                onChange={(e) => setMinPrice(e.target.value)}
                onBlur={handlePriceChange}
              />
            </div>
            <div>
              <label htmlFor="maxPrice">до</label>
              <input
                className="range-input"
                type="number"
                id="maxPrice"
                value={maxPrice}
                placeholder={max}
                onChange={(e) => setMaxPrice(e.target.value)}
                onBlur={handlePriceChange}
              />
            </div>
          </div>
        )}
      </div>

      <div className="filter-type">
        <div onClick={() => setKorxona(!korxona)}>Производитель</div>
        {korxona && (
          <div className="brand-filter">
            {brands.map(
              (brand) =>
                products.filter((product) => product.brand === brand.key)
                  .length > 0 && (
                  <div onClick={() => chooseBrand(brand.key)} key={brand.key}>
                    {brand.key}
                  </div> 
                )
            )}
          </div>
        )}
      </div>

      <div className="filter-type">
        <div onClick={() => setPamyat(!pamyat)}>Встроенная память</div>
        {pamyat && (
          <div className="storage-filter">
            <span onClick={() => storageFilter(512)}>512 Гб</span>
            <span onClick={() => storageFilter(256)}>256 Гб</span>
            <span onClick={() => storageFilter(128)}>128 Гб</span>
            <span onClick={() => storageFilter(64)}>64 Гб</span>
            <span onClick={() => storageFilter(32)}>32 Гб</span>
            <span onClick={() => storageFilter(16)}>16 Гб</span>
            <span onClick={() => storageFilter(8)}>8 Гб</span>
            <span onClick={() => storageFilter(4)}>4 Гб</span>
          </div>
        )}
      </div>
      <div className="filter-type">
        <div onClick={() => setEkran(!ekran)}>Размер экрана</div>
        {ekran && (
          <div className="storage-filter">
            <span
              onClick={() =>
                setFilteredProducts(
                  products.filter((product) => product.display >= 6)
                )
              }
            >
              от 6 дюймов и выше
            </span>
            <span onClick={() => displayFilter(5.5, 5.9)}>
              от 5.5 дюймов до 5.9
            </span>
            <span onClick={() => displayFilter(5, 5.4)}>
              от 5 дюймов до 5.4
            </span>
            <span onClick={() => displayFilter(4.1, 4.9)}>
              от 4.1 дюймов до 4.9
            </span>
          </div>
        )}
      </div>
      <div className="filter-type">
        <div onClick={() => setProcessor(!processor)}>Процессор</div>
        {processor && (
          <div className="storage-filter">
            <span onClick={() => processFilter('samsung')}>
              Samsung Exynos
            </span>
            <span onClick={() => processFilter('mediatek')}>
              MediaTek
            </span>
            <span onClick={() => processFilter('snapdragon')}>
              Qualcomm Snapdragon
            </span>
            <span onClick={() => processFilter('spreadtrum')}>
              Spreadtrum
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Filter;
