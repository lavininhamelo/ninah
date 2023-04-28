import tw, { styled } from "twin.macro";

const Container = styled.div`
    ${tw`flex flex-col items-center justify-center h-12 w-full`}
`;

const InputContainer = styled.div`
  ${tw`flex w-full bg-white rounded-lg border border-solid border-gray-300 focus-within:border-primary focus-within:rounded-xl focus-within:border-[1.5px] transition duration-200`}

  label > {
    display: none;
  }
`;

const InputField = styled.input`
  ${tw`w-full h-11 rounded-lg font-light text-sm mx-4 outline-none min-w-[200px]`}
`;

const InputError = styled.div`
  ${tw`w-full h-full rounded-lg text-xs text-negative font-medium mt-2 ml-1 outline-none min-w-[200px]`}
`;

export { InputContainer, InputField, InputError, Container };
