import React, { useEffect, useState } from "react";
import { useFileCategory } from "../../context/FileCategoryProvider";
import { useParams } from "react-router-dom";

function FileTypeForm() {
  const {
    handleSubmit,
    handleDelete,
    handleUpdate,
    getFileCategory,
    fileCategory,
    fileCategoryLoading,
  } = useFileCategory();
  const { id } = useParams();
  const [data, setData] = useState({
    name: "",
    description: "",
  });

  const setEmpty = () => {
    setData({
      ...data,
      name: "",
      description: "",
    });
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (id) {
      handleUpdate(data, id);
    } else {
      handleSubmit(data);
    }
  };

  useEffect(() => {
    if (id) {
      getFileCategory(id);
    }
  }, [id]);

  useEffect(() => {
    if (id && fileCategory) {
      const { name, description } = fileCategory;
      setData({
        ...data,
        name: name ? name : "",
        description: description ? description : "",
      });
    }
  }, [id, fileCategory]);

  if (id && fileCategoryLoading) {
    return "Loading...";
  }
  return (
    <>
      <div className=" shadow-md rounded-lg bg-white  ">
        <div className=" p-3  text-xs text-gray-700 uppercase rounded-t-lg bg-gray-50">
          Add New
        </div>
        <form onSubmit={handleSave}>
          <div className="md:grid grid-cols-3 gap-3  p-3">
            <div className="mb-3">
              <label htmlFor="cat" className="myLabel">
                Category{" "}
              </label>
              <input
                id="cat"
                type="text"
                name="name"
                value={data.name}
                onChange={handleChange}
                className="myInput"
              />
            </div>

            <div className="mb-3 col-span-2">
              <label htmlFor="des" className="myLabel">
                Description
              </label>
              <input
                id="des"
                type="text"
                name="description"
                value={data.description}
                onChange={handleChange}
                className="myInput"
              />
            </div>
          </div>
          <div className="p-3 pt-0 gap-3 md:flex  ">
            <button className="myButton  ">
              {id ? "अपडेट गर्नुहोस्" : "सेभ गर्नुहोस्"}
            </button>
            <button
              type="reset"
              onClick={setEmpty}
              className="myButtonOutline text-red-600  "
            >
              रद्द गर्नुहोस्
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default FileTypeForm;
