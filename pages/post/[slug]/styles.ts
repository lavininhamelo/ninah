import tw, { styled } from "twin.macro";

const PostArea = styled.section`
  & > h1 {
    ${tw`text-4xl font-bold`}
  }

  & > p {
    ${tw`text-lg leading-[3rem]`}

    & > code:only-child {
      ${tw`bg-gray-100 px-4 py-3 rounded-md`}
    }

    & > code:nth-child(n + 2) {
      ${tw`text-blue-500 font-semibold`}
    }
  }

  & a {
    ${tw`text-primary font-bold`}
  }

  table {
    ${tw`border-collapse`}
  }

  th,
  td {
    ${tw`border border-gray-400 px-4 py-2`}
  }

  thead {
    ${tw`bg-gray-100`}
  }

  tbody {
    ${tw`bg-white`}
  }

  tr {
    ${tw`hover:bg-gray-100`}
  }

  & > ul {
    ${tw`list-disc ml-8`}
  }

  & > ol {
    ${tw`list-decimal ml-8`}
  }

  & > li {
    ${tw`mb-2`}
  }

  & > h2 {
    ${tw`text-3xl font-bold mb-4 mt-6`}
  }

  & > h3 {
    ${tw`text-2xl font-bold mb-4 mt-6`}
  }

  & > h4 {
    ${tw`text-xl font-bold mb-4 mt-6`}
  }

  & > h5 {
    ${tw`text-lg font-bold mb-4 mt-6`}
  }

  & > h6 {
    ${tw`text-base font-bold mb-4 mt-6`}
  }
`;

export { PostArea }