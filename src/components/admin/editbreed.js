import React from 'react'

function Editbreed() {
  return (
    <div>

<h3 className="text-center mt-4">Breed Data Edits</h3>
      <form className="container w-50 p-5 mb-5 text-center">
        <input
          type="text"
          className="form-control mt-3"
          placeholder="Breed Name"
          name="name"
          id="ename"
        />
        <input
          type="text"
          className="form-control mt-3"
          placeholder="description"
          name=" description"
          id="breedDescription"
        />
        <input
          type="text"
          className="form-control mt-3"
          placeholder="categoryId"
          name="categoryId"
          id="breedcategoryId"
        />

        <input
          type="text"
          className="form-control mt-3"
          placeholder="image"
          name="image"
          id="breedimage"
        />

        <input
          type="text"
          className="form-control mt-3"
          placeholder=" breedImages"
          name=" breedImages"
          id="breedimages"
        />
        <input
          type="text"
          className="form-control mt-3"
          placeholder=" breedImages"
          name=" breedImages"
          id="breedimages"
        />
        <input
          type="text"
          className="form-control mt-3"
          placeholder=" breedImages"
          name=" breedImages"
          id="breedimages"
        />
        <button className="btn btn-dark p-2 w-25 mt-4"> Update Breed Data</button>
      </form>



    </div>
  )
}

export default Editbreed