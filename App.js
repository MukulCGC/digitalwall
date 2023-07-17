import React, { useState } from "react";
import "./App.css";

function App() {
  const [searchText, setSearchText] = useState("");
  const [newBoardName, setNewBoardName] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [createdBoard, setCreatedBoard] = useState(null);
  const [postSubject, setPostSubject] = useState("");
  const [postImage, setPostImage] = useState("");
  const [postText, setPostText] = useState("");
  const [showModal2, setShowModal2] = useState(false);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleCreateBoardClick = () => {
    setShowModal(true);
  };

  const handleBoardNameChange = (e) => {
    setNewBoardName(e.target.value);
  };

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  const handleCreateBoardSubmit = (e) => {
    e.preventDefault();
    console.log("New board created:", newBoardName, selectedColor);
    setCreatedBoard({ name: newBoardName, color: selectedColor });
    setNewBoardName("");
    setSelectedColor("");
    setShowModal(false);
  };
  const handleCreatePostClick = () => {
    setShowModal2(true);
  };

  const handlePostSubjectChange = (e) => {
    setPostSubject(e.target.value);
  };

  const handlePostImageChange = (e) => {
    setPostImage(e.target.value);
  };

  const handlePostTextChange = (e) => {
    setPostText(e.target.value);
  };

  const handleCreatePostSubmit = (e) => {
    e.preventDefault();
    console.log("New post created:", postSubject, postImage, postText);
    // Perform further actions with the created post data
    setPostSubject("");
    setPostImage("");
    setPostText("");
    setShowModal2(false);
  };

  const filteredBoards = [
    { id: 1, name: "Earth Changes and Journeys", color: "#CAF8FF" },
    { id: 2, name: "Eating Right", color: "#FFEDC1" },
  ].filter((board) =>
    board.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <>
      <nav className="bg-white border-gray-200 border-b-2">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <a href="https://www.toddleapp.com/" className="flex items-center">
            <img src="./logo.png" className="h-12 mr-3" alt="Toddle Logo" />
            {createdBoard ? (
              <>
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-#717171">
                  {createdBoard.name}
                </span>
              </>
            ) : (
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-#717171">
                toddle
              </span>
            )}
          </a>

          <div className="flex md:order-2">
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Search</span>
            </button>

            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 mb-2 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5  text-gray-500"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 px-14 mt-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-#717171 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
                value={searchText}
                onChange={handleSearchChange}
              />
            </div>

            {createdBoard ? (
              <div className="-mr-2 mt-1 ml-6 md:mt-0">
                <button
                  type="button"
                  className="text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  <svg
                    className=" w-5 h-5 ml-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                    ></path>
                  </svg>
                  bookmark
                </button>
              </div>
            ) : (
              <div className="-mr-2 mt-1 ml-6 md:mt-0">
                <button
                  type="button"
                  className="text-white bg-[#D33852] hover:bg-[#D33852] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2.5 md:ml-2 md:mb-2 focus:outline-none flex md:inline-flex md:items-center"
                  onClick={handleCreateBoardClick}
                >
                  <svg
                    className="h-6 mr-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m6-6H6"
                    ></path>
                  </svg>
                  <span>Create new board</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      <div className="flex">
        <h2 className="  font-bold mb-4 mt-16 ml-32 text-3xl">
          {createdBoard ? "Your posts" : "My Boards"}
        </h2>
        {createdBoard ? (
          <div className="justify-end mt-16 ml-[66rem] mr-10 ">
            <button
              type="button"
              className="text-white bg-[#D33852] hover:bg-#D33852 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2.5 focus:outline-none"
              onClick={handleCreatePostClick}
            >
              Create new post
            </button>
          </div>
        ) : null}
      </div>

      {showModal2 && (
        <div className="fixed inset-0 flex items-center justify-center z-50  ">
          <div className="fixed inset-0 bg-black backdrop-filter backdrop-blur-sm opacity-80"></div>
          <div className="bg-white rounded-lg p-6 shadow-lg relative z-10 w-[26rem] h-[36rem]">
            <label className="text-xl font-bold mb-4">Create a post</label>
            <h4 className="text-xs">Writing something for your post</h4>

            <form onSubmit={handleCreatePostSubmit}>
              <label className=" font-semibold mb-4 ">Subject</label>
              <div>
                <input
                  type="text"
                  className="border border-gray-300 rounded-md px-4 py-2 mb-4 mt-8 w-[23rem]"
                  placeholder="Subject"
                  value={postSubject}
                  onChange={handlePostSubjectChange}
                  required
                />

                <div class="flex items-center justify-center w-full">
                  <label
                    for="dropzone-file"
                    class="flex flex-col items-center justify-center w-full h-24 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer "
                  >
                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        aria-hidden="true"
                        class=" mt-4 w-5 h-8 -mb-1 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        ></path>
                      </svg>
                      <p class=" text-sm text-gray-500 dark:text-gray-400">
                        <span class="font-semibold">Click to upload</span> or
                        drag and drop
                      </p>
                      <p class="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>
                    <input id="dropzone-file" type="file" class="hidden" />
                  </label>
                </div>
              </div>

              <hr className="h-[.1rem] mt-7 mb-4 w-[23rem] bg-gray-300"/>
              <label className=" font-semibold mb-4 ">What's On Your Mind?</label>
              <div>
              <textarea
                className="border border-gray-300 rounded-md px-4 py-2 mt-3  mb-4 w-[23rem]"
                placeholder="Text"
                value={postText}
                onChange={handlePostTextChange}
                required
              ></textarea>
              </div>
              
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="text-white bg-[#D33852] hover:bg-#D33852 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2.5 focus:outline-none"
                >
                  Create post
                </button>
                <button
                  type="button"
                  className="text-gray-500 hover:text-gray-700 ml-4 focus:outline-none"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="flex justify-start items-center  ml-[5.4rem] mt-14 ">
        {filteredBoards.length === 0 ? (
          <p className="text-gray-500">No boards found.</p>
        ) : (
          <ul className="  flex ">
            {filteredBoards.map((board) => (
              <li
                key={board.id}
                className={`flex items-center justify-between p-3 ml-10 w-80 h-12 rounded-lg shadow-sm border-[0.1rem]`}
                style={{ borderColor: board.color }}
              >
                <div className="flex items-center">
                  <div
                    className="w-12 h-12  mr-4 -ml-3 rounded-lg"
                    style={{ backgroundColor: board.color }}
                  ></div>
                  <span>{board.name}</span>
                </div>

                <button
                  data-dropdown-toggle="dropdownDots"
                  className="inline-flex items-center  text-sm font-medium text-center ml-3 text-gray-900 bg-white rounded-lg focus:ring-1 focus:outline-none dark:text-white focus:ring-gray-50  dark:focus:ring-gray-100"
                  type="button"
                  onClick={handleDropdownToggle}
                >
                  <svg
                    className="w-6 h-6 text-gray-900 "
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 30 30"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
                  </svg>
                </button>
                {dropdownOpen && (
                  <div
                    id="dropdowndots"
                    className="absolute right-[35.5rem] mt-[6.1rem] w-48 bg-white rounded-md shadow-lg"
                  >
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="dropdown-menu"
                    >
                      <div className="flex">
                        <img
                          src="./edit-text.png"
                          alt=""
                          className="w-4 h-4 mt-[.53rem] ml-2 -mr-1"
                        />
                        <a
                          href="/"
                          className="block px-4 py-2 text-sm text-gray-700 font-semibold "
                          role="menuitem"
                        >
                          {" "}
                          Edit
                        </a>
                      </div>
                      <div className="flex">
                        <img
                          src="./delete.png"
                          alt=""
                          className="w-4 h-4 mt-[.53rem] ml-2 -mr-1"
                        />
                        <a
                          href="/"
                          className="block px-4 py-2 text-sm text-red-600 font-semibold"
                          role="menuitem"
                        >
                          Delete
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
          <div className="fixed inset-0 bg-black backdrop-filter backdrop-blur-sm opacity-80"></div>
          <div className="bg-white rounded-lg p-6 shadow-lg relative z-10">
            <h3 className="text-lg font-bold mb-4">
              Add a name for your board
            </h3>
            <form onSubmit={handleCreateBoardSubmit}>
              <input
                type="text"
                className="border border-gray-300 rounded-md px-20 mb-4"
                placeholder="Board name"
                value={newBoardName}
                onChange={handleBoardNameChange}
                required
              />
              <div className=" mb-4 mt-8">
                <label className="mr-2 text-lg font-bold">
                  Select post color:
                </label>
                <h4 className="text-xs">
                  Here are sometemplates to help you get started
                </h4>
                <div className="flex mt-6">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="color"
                      value="#CAF8FF"
                      checked={selectedColor === "#CAF8FF"}
                      onChange={handleColorChange}
                      className="mr-1 "
                    />
                    <div
                      className="w-4 h-4 rounded-full bg-blue-200 border border-blue-500 mr-1"
                      style={{ backgroundColor: "#CAF8FF" }}
                    ></div>
                    <span className="text-sm">Blue</span>
                  </div>
                  <div className="flex items-center ml-4">
                    <input
                      type="checkbox"
                      name="color"
                      value="#FFEDC1"
                      checked={selectedColor === "#FFEDC1"}
                      onChange={handleColorChange}
                      className="mr-1"
                    />
                  </div>

                  <div
                    className="w-4 h-4 rounded-full bg-yellow-200 border border-yellow-500 mr-1"
                    style={{ backgroundColor: "#FFEDC1" }}
                  ></div>
                  <span className="text-sm">Yellow</span>
                </div>
              </div>
              <div className="flex justify-end mt-16">
                <button
                  type="submit"
                  className=" text-white bg-[#D33852] hover:bg-#D33852 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2.5 focus:outline-none"
                >
                  Create board
                </button>
                <button
                  type="button"
                  className="text-gray-500 hover:text-gray-700 ml-4 focus:outline-none"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
