import tw, {styled} from 'twin.macro';


export const Container = styled.header<{ isDark: boolean }>((props) => ({
  ...tw` w-full h-[500px] flex flex-col items-center text-secondary dark:text-white`,
  backgroundColor: props.isDark ? colofourBackground : colofourBackgroundLight,
}));

export const Hello = styled.h2(() => tw`text-4xl font-bold`);
export const Span = styled.span(() => tw`text-primary dark:text-primary font-bold`);
export const Intro = styled.section(() => tw`text-center md:text-left flex items-center w-full max-w-[1200px] mt-20 px-2 sm:px-4 md:px-8 xl:px-0`);
export const Me = styled.main(() => tw`flex-1 md:min-w-[320px]`);
export const MyDescription = styled.h2(() => tw`md:max-w-[90%] leading-8 my-6`);
export const AboutMeButton = styled.button(() => tw`text-lg font-bold`);

// Custom Gradient
export const colofourBackgroundLight = `
hsla(189,0%,100%,1); 
background-image: 
radial-gradient(at 65% 92%, hsla(0,0%,100%,1) 0px, transparent 0%), 
radial-gradient(at 23% 86%, hsla(0,0%,100%,1) 0px, transparent 0%), 
radial-gradient(at 17% 57%, hsla(0,0%,100%,1) 0px, transparent 0%), 
radial-gradient(at 81% 61%, hsla(0,0%,100%,0.99) 0px, transparent 0%), 
radial-gradient(at 73% 9%, hsla(324,81%,68%,0.35) 0px, transparent 50%), 
radial-gradient(at 46% 43%, hsla(0,100%,81%,0.53) 0px, transparent 50%), 
radial-gradient(at 40% 14%, hsla(11,87%,64%,0.53) 0px, transparent 50%), 
radial-gradient(at 6% 14%, hsla(49,89%,66%,0.62) 0px, transparent 50%), 
radial-gradient(at 93% 3%, hsla(225,100%,73%,0.59) 0px, transparent 50%), 
radial-gradient(at 70% 40%, hsla(189,73%,62%,1) 0px, transparent 50%);`;

export const colofourBackground = `
rgb(var(--colors-light)); 
background-size: 100% 1200px;
background-repeat: no-repeat;
background-position: center;
background-image:
radial-gradient(at 10% 40%, hsla(324,100%,68%,0.15) 0px, transparent 35%),
radial-gradient(at 50% 35%, hsla(189,73%,62%, 0.05) 0px, transparent 40%), 
radial-gradient(at 80% 20%, hsla(225,100%,68%,0.15) 0px, transparent 45%),
radial-gradient(at 40% 55%, hsla(0,100%,81%,0.05) 0px, transparent 20%),
radial-gradient(at 60% 55%, hsla(0,100%,81%,0.05) 0px, transparent 20%);`;