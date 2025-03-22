import tw, { styled } from "twin.macro";

const ImageWrapper = styled.div`
  ${tw`w-auto border-transparent min-h-[200px] mb-6 rounded border border-solid bg-gradient-to-tr bg-opacity-50 relative`}

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

const bgLight = "linear-gradient(121deg, rgba(246,218,225,1) 0%, rgba(255,255,255,0.2) 45%, rgba(255,255,255,0.2) 60%, rgba(246,218,225,1) 100%)"
const bgDark = "linear-gradient(45deg, rgb(66 32 47 / 100%) 0%, rgb(61,5,50,33%) 25%, rgb(69,33,49,10%) 50%,rgb(61,5,50,33%) 75%, rgb(61,5,50,33%) 100%)"

const Cover = styled.div`
${tw`flex justify-between flex-col h-full min-h-[200px] bg-[${bgLight}] dark:bg-[${bgDark}] dark:text-primary p-5`}

p {
 ${tw`leading-7 text-xl font-black max-w-[500px]`}
}
`;

const Logo = styled.span`
  ${tw`font-cursive`}
`;

export { ImageWrapper, Title, Date, GradientBar, Cover, Logo };