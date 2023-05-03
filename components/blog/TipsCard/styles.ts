import tw, { styled } from "twin.macro";

const Title = styled.h2`
  ${tw`font-bold text-lg pb-6 pt-2 px-6`}
`;

const GradientBar = styled.div`
  ${tw`h-[5px] rounded rounded-t-none bg-gradient-to-r`}
`;

export { Title, GradientBar };