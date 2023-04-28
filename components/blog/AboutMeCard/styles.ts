import NextLink from "next/link";
import tw, { styled } from "twin.macro";

const Link = styled(NextLink)`
  ${tw`flex flex-col items-center text-center`}
`;

const Name = styled.h2`
  ${tw`text-xl font-bold my-4`}
`;

const Title = styled.h3`
  ${tw`text-sm font-medium`}
`;

const Description = styled.p`
  ${tw`mt-2 text-sm`}
`;

const MyPhoto = styled.img`
  ${tw`rounded-full w-5/12 my-4 h-auto`}
`;

export { Name, Title, Description, MyPhoto, Link };
