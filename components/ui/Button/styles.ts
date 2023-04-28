import tw, { styled } from "twin.macro";

const ButtonContainer = styled.button`
  ${tw`relative min-h-[40px]  pl-3 pr-5 text-white text-sm bg-primary font-medium 
    rounded-lg transition-all duration-300 ease-in-out cursor-pointer
    hover:bg-primary hover:shadow-lg hover:bg-opacity-95
    active:bg-opacity-90 active:shadow-none 
  `}

  &::before {
    content: "";
    ${tw`absolute w-4 h-4 bg-primary`}
    right: 0.7rem;
    bottom: 37%;
    animation: 0.5s both ease-in-out infinite;
    height: 4px;
    width: 4px;
    background-color: white;
    border-radius: 100px;
  }

  &:hover::before {
    animation-name: bounce;
    transition: all 0.3s ease;
  }

  @keyframes bounce {
    0% {
      bottom: 37%;
    }

    50% {
      bottom: 70%;
    }

    100% {
      bottom: 37%;
    }
  }

  @keyframes bounce-hover {
    0% {
      transform: translate(0, 0);
    }

    25% {
      transform: translate(0, -5px);
    }

    50% {
      transform: translate(0, 0);
    }

    75% {
      transform: translate(0, 5px);
    }

    100% {
      transform: translate(0, 0);
    }
  }
`;

export { ButtonContainer };
