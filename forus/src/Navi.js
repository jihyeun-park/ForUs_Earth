import React from "react";
import { Link } from "react-router-dom";

function Navi() {
  return (
    <>
      <Link to="/">
        <button>메인 화면으로</button>
      </Link>
      <Link to="/2">
        <button>로그인 화면으로</button>
      </Link>
    </>
  );
}

export default Navi;
