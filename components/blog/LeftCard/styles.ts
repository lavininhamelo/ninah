import tw, { styled } from "twin.macro";

export const CardContainer = styled.div`
  .card {
    ${tw`
    rounded-lg dark:border-[rgba(255,255,255,.05)] dark:bg-[rgba(150,150,255,.05)] hover:dark:bg-[rgba(150,150,255,.08)] hover:shadow-lg box-border flex flex-col border border-b-0 border-solid border-gray-200
    w-full overflow-hidden justify-center items-center relative shadow-sm transition duration-300 ease-out no-underline`}

    height: 120px;

    &:hover {
      ${tw`shadow-lg bg-transparent translate-y-1 scale-105 translate-x-0`}
    }
  }

  .card:hover .overlay {
    transform: scale(500) translateZ(0);
  }

  .card p {
    ${tw`text-base z-10 transition-colors duration-300 ease-out`}
  }

  span {
    ${tw`z-40 transition-all transform text-2xl translate-y-0`}
  }

  .overlay {
    ${tw` rounded-full absolute  z-0 transition-all duration-300 ease-out`}
    width: 1px;
    height: 1px;
  }
`;
