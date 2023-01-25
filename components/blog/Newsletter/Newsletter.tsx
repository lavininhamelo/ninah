import React from "react";

const colofourBackground = `rgb(var(--colors-light)); background-size: 100% 1200px;
background-repeat: no-repeat;
background-position: center;
background-image:
radial-gradient(at 10% 40%, hsla(324,100%,68%,0.15) 0px, transparent 35%),
radial-gradient(at 50% 35%, hsla(189,73%,62%, 0.05) 0px, transparent 40%), 
radial-gradient(at 80% 20%, hsla(225,100%,68%,0.15) 0px, transparent 45%),
radial-gradient(at 40% 55%, hsla(0,100%,81%,0.05) 0px, transparent 20%),
radial-gradient(at 60% 55%, hsla(0,100%,81%,0.05) 0px, transparent 20%);`;

export const Newsletter: React.FC = () => {
  return (
    <div
      style={{ backgroundColor: colofourBackground }}
      className="dark:border-[rgba(255,255,255,.1)] border border-gray-200 flex flex-col items-center justify-center rounded h-80 max-w-[1200px] w-full pb-8"
    >
      <p className="uppercase">Follow the blog </p>
      <p className="font-bold text-2xl mb-4">Subscribe in my newsletter</p>
      <div className="input flex w-96 bg-white h-12 rounded-lg border border-solid border-gray-300">
        <input
          type="text"
          placeholder="Your e-mail address..."
          className="w-full h-full rounded-lg font-light text-sm mx-4 outline-none"
        />
        <button className="bg-primary text-sm text-white h-full  rounded-lg px-4">Subscribe</button>
      </div>
    </div>
  );
};
