import React, { useState, useEffect } from "react";

const Board = (props: {
}) => {

  return (
    <div className="w-full max-w-screen-md xl:max-w-screen-lg p-4 mt-2 bg-white  rounded-sm">
      <h2 className="font-bold text-2xl">Data</h2>
      <div className="grid grid-cols-3">
        <div className="flex place-content-center place-items-center flex-col">
          <h3>POINT 1</h3>
        </div>
        <div className="flex place-content-center place-items-center flex-col">
          <h3>POINT 2</h3>
        </div>
        <div className="flex place-content-center place-items-center flex-col">
          <h3>POINT 3</h3>
        </div>
      </div>
      
    </div>
  );
};

export default Board;
