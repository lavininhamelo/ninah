import tw, { styled } from "twin.macro";

const ColofourBackground = `rgb(var(--colors-light)); background-size: 100% 1200px;
background-repeat: no-repeat;
background-position: center;
background-image:
radial-gradient(at 10% 40%, hsla(324,100%,68%,0.15) 0px, transparent 35%),
radial-gradient(at 50% 35%, hsla(189,73%,62%, 0.05) 0px, transparent 40%), 
radial-gradient(at 80% 20%, hsla(225,100%,68%,0.15) 0px, transparent 45%),
radial-gradient(at 40% 55%, hsla(0,100%,81%,0.05) 0px, transparent 20%),
radial-gradient(at 60% 55%, hsla(0,100%,81%,0.05) 0px, transparent 20%);`;

const Container = styled.section`
  ${tw`dark:border-[rgba(255,255,255,.1)] border border-gray-200 flex flex-col items-center justify-center rounded min-h-[300px] max-w-[1200px] md:min-h-[200px] w-full pb-8 mt-8 md:mt-4 lg:mt-2 z-0`}
  background-color: ${ColofourBackground};
`;

const Heading = styled.p`
  ${tw`uppercase`}
`;

const Title = styled.h1`
  ${tw`font-bold text-2xl mb-4 mt-0 text-center md:text-left`}
`;

export { Container, Heading, Title };
