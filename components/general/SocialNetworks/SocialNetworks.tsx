import React from "react";
import tw, { styled } from "twin.macro";

const Icon = styled.img`
  ${tw`rounded-full h-8 my-4 w-auto mx-2`}
`;

const SocialNetworks: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <a href="https://twitter.com/ninah_melo" target="_blank" rel="noreferrer">
        <Icon src="/social-icons/twitter.svg" />
      </a>
      <a href="https://github.com/lavininhamelo" target="_blank" rel="noreferrer">
        <Icon src="/social-icons/github.svg" />
      </a>
      <a href="https://linkedin.com/in/laviniamelo" target="_blank" rel="noreferrer">
        <Icon src="/social-icons/linkedin.svg" />
      </a>
      <a href="https://dribbble.com/laviniamelo" target="_blank" rel="noreferrer">
        <Icon src="/social-icons/dribbble.svg" />
      </a>
    </div>
  );
};

export default SocialNetworks;
