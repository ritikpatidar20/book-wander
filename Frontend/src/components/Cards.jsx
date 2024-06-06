import React from "react";

function Cards({ item }) {
  // Destructure item properties
  const { name, author, image } = item;

  return (
    <div className="mt-4 my-3 p-3">
      <div className="card w-92 bg-base-100 shadow-xl transition-transform duration-200 transform hover:scale-110">
        <figure>
          <img src={image} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>By {author}</p>
          <div className="card-actions justify-between">
            {/* Example of dynamic badges (can be modified based on book data) */}
            <div className="badge badge-outline px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200 hover:cursor-pointer">
              {item.price}$
            </div>
            <div className="badge badge-outline px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200 hover:cursor-pointer">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
