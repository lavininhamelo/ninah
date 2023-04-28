import tw, { styled } from "twin.macro";

export const Title = styled.h2`
  ${tw`
    text-xl font-semibold mb-6 px-4 mt-2
  `}
`;

export const List = styled.ul`
  ${tw`
    px-3
  `}
`;

export const Item = styled.li`
  ${tw`
     duration-300 ease-in-out
    text-sm
    font-light
    pb-2
    mb-6
    hover:text-primary
    hover:font-normal
  `}

  span {
    ${tw`text-primary mr-1 font-bold`}
  }

 
`;
