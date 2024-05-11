import React from "react"
import Card from "../Card";

function Home({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCart,
  isLoading,
}) {

  const renderItems = () => {
    const filtredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase()),
    );
    return (isLoading ? [...Array(8)] : filtredItems).map((item, index) => (
      <Card
        key={index}
        onFavorite={(obj) => onAddToFavorite(obj)}
        onPlus={(obj) => onAddToCart(obj)}
        loading={isLoading}
        {...item}
      />
    ));
  };
  



  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
        <div className="search-block d-flex">
          <img src="https://raw.githubusercontent.com/Votum1703/Sneakers-2024/0d9debbb3746610a2215612cd5e425bc8a30592c/public/img/search.svg" alt="Search" />
          {searchValue && (
            <img
              onClick={() => setSearchValue('')}
              className="clear cu-p"
              src="https://raw.githubusercontent.com/Votum1703/Sneakers-2024/0d9debbb3746610a2215612cd5e425bc8a30592c/public/img/btn-remove.svg"
              alt="Clear"
            />
          )}
          <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
        </div>
      </div>

      <div className="d-flex flex-wrap">{renderItems()}</div>
    </div>
  );
}

export default Home;