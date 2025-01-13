// import React from "react";

// import { Link } from "react-router-dom";

// const Navbar = ({ keyword, handleKeyPress, setKeyword, fetchMusicData }) => {
//   return (
//     <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
//       <div className="container-fluid">
//         <a className="navbar-brand" href="/v-music">
//           <i className="bi bi-music-note-list mx-3"></i> v-music
//         </a>
//         <div className="dropdown">
//           <button
//             className="btn btn-sm btn-secondary dropdown-toggle"
//             type="button"
//             data-bs-toggle="dropdown"
//             aria-expanded="false"
//           >
//             Liked Music
//           </button>
//           <ul className="dropdown-menu">
//             <li>
//               <a className="dropdown-item text-secondary" href="/">
//                 All Playlist
//               </a>
//             </li>
//             <li>
//               <Link className="dropdown-item" to="/likedMusic">
//                 Liked Music
//               </Link>
//             </li>
//             <li>
//               <button
//                 type="button"
//                 className="btn text-secondary"
//                 data-bs-toggle="modal"
//                 data-bs-target="#exampleModal"
//               >
//                 Create new
//               </button>
//             </li>
//           </ul>
//         </div>

//         <div
//           className="collapse navbar-collapse d-flex justify-content-center"
//           id="navbarSupportedContent"
//         >
//           <input
//             value={keyword}
//             onChange={(event) => setKeyword(event.target.value)}
//             onKeyDown={handleKeyPress}
//             className="form-control me-2 w-75"
//             type="search"
//             placeholder="Search"
//             aria-label="Search"
//           />
//           <button onClick={fetchMusicData} className="btn btn-outline-success">
//             Search
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { MusicContext } from "../Context";
import PinnedMusic from "./PinnedMusic";
import LikedMusic from "./LikedMusic";

const Navbar = ({ keyword, handleKeyPress, setKeyword, fetchMusicData }) => {
  const musicContext = useContext(MusicContext);
  const likedMusic = musicContext.likedMusic;
  const pinnedMusic = musicContext.pinnedMusic;
  const setResultOffset = musicContext.setResultOffset;
  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark sticky-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <i className="bi bi-music-note-list mx-3"></i> v-music
          </Link>
          <div>
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              className="btn btn-secondary btn-sm mx-1"
            >
              <i className="bi bi-pin-angle-fill"></i> {pinnedMusic && pinnedMusic.length}
            </button>
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#likedMusicModal"
              className="btn btn-secondary btn-sm mx-1"
            >
              <i className="bi bi-heart-fill"></i> {likedMusic.length}
            </button>
          </div>

          <div
            className="collapse navbar-collapse d-flex justify-content-center"
            id="navbarSupportedContent"
          >
            <input
              value={keyword}
              onChange={(event) => setKeyword(event.target.value)}
              onKeyDown={handleKeyPress}
              className="form-control me-2 w-75"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              onClick={() => {
                setResultOffset(0);
                fetchMusicData();
              }}
              className="btn btn-outline-success"
            >
              Search
            </button>
          </div>
        </div>
      </nav>

      <div
        className="modal fade modal-xl"
        id="exampleModal"
        tabIndex={1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Pinned Music
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <PinnedMusic />
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade modal-xl"
        id="likedMusicModal"
        tabIndex={1}
        aria-labelledby="likedMusicModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="likedMusicModalLabel">
                Liked Music
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <LikedMusic />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;