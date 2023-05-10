import tw, { styled } from 'twin.macro';

const Container = styled.footer`
  ${tw`relative w-full flex flex-col items-center justify-center min-h-[200px] max-w-[1200px] mt-12 px-2 z-[2]`}
`;

const Hr = styled.hr`
  ${tw`w-full border dark:border-zinc-800`}
`;

const Wrapper = styled.div`
  ${tw`py-4 w-full flex flex-col md:flex-row items-center justify-between`}
`;

const Copy = styled.p`
  ${tw`text-gray-500 my-2`}
`;






export { Container, Hr, Wrapper, Copy };