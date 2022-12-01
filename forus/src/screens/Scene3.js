import React, { useState } from "react";
import { Button } from "antd";

import Scene4 from "./Scene4";
import Fail from "./Fail";

import styled from "styled-components";

function Scene3() {
  const [viewCalendar, setViewCalendar] = useState(true);

  return (
    <div className="contentWrapper">
      <div className="mainButtonWrapper">
        <Button onClick={() => setViewCalendar(true)}>달력</Button>
        <Button onClick={() => setViewCalendar(false)}>타임라인</Button>
      </div>
      <div className="mainComponentWrapper">
        {viewCalendar ? <Scene4 /> : <Fail />}
      </div>
    </div>
  );
}

export default Scene3;
