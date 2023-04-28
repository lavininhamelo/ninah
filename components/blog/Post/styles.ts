import tw, { styled } from "twin.macro";

const ImageWrapper = styled.div`
  ${tw`w-auto border-transparent min-h-[200px] mb-6 rounded border border-solid bg-gradient-to-tr bg-opacity-50`}

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Title = styled.h2`
  ${tw`font-bold text-lg ml-2 px-6`}
`;

const Date = styled.p`
  ${tw`ml-2 px-6 text-gray-500 font-light text-base my-6`}
`;

const GradientBar = styled.div`
  ${tw`h-[5px] mt-auto rounded rounded-t-none bg-gradient-to-r`}
`;

export { ImageWrapper, Title, Date, GradientBar };