import React from 'react'
import Part1 from './components/part1'
import Part2 from './components/Part2'
const Firstportion = () => {
  return (
    <div className="relative">

      <Part1 />

      <div className="relative z-10 -mt-32 rounded-t-3xl">
        <Part2 />
      </div>

    </div>
  );
};

export default Firstportion;
