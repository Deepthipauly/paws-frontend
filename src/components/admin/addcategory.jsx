import React from 'react'

function Addcategory() {
  return (
    <div>

<h3 className="text-center mt-4">Add Category</h3>
      <form className="container w-50 p-5 mb-5 text-center">
        <input
          type="text"
          className="form-control mt-3"
          placeholder="categoryType"
          name="categoryType"
          id="categoryType"
        />
        <input
          type="text"
          className="form-control mt-3"
          placeholder="description"
          name=" description"
          id="CategoryDescription"
        />
        <input
          type="text"
          className="form-control mt-3"
          placeholder="image"
          name="image"
          id="image"
        />

        <input
          type="text"
          className="form-control mt-3"
          placeholder="categoryImages"
          name="categoryImages"
          id="categoryImages"
        />
         <input
          type="text"
          className="form-control mt-3"
          placeholder="categoryImages"
          name="categoryImages"
          id="categoryImages"
        />
         <input
          type="text"
          className="form-control mt-3"
          placeholder="categoryImages"
          name="categoryImages"
          id="categoryImages"
        />
        
        <button className="btn btn-dark p-2 w-25 mt-4"> Add Category </button>
      </form>


    </div>
  )
}

export default Addcategory