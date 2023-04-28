
enum GradientList {
  redYellow = " bg-gradient-to-tr from-red-500 to-yellow-500 ",
  bluePurple = " bg-gradient-to-tr from-blue-500 to-purple-500 ",
  greenBlue = " bg-gradient-to-tr from-green-500 to-blue-500 ",
  pinkPurple = " bg-gradient-to-tr from-pink-500 to-purple-500 ",
  yellowGreen = " bg-gradient-to-tr from-yellow-500 to-green-500 ",
  purplePink = " bg-gradient-to-tr from-purple-400 to-pink-500 ",
  pinkRed = " bg-gradient-to-tr from-pink-400 to-red-500 ",
}

enum BackgroundColorList {
    red = " bg-red-500 ",
    blue = " bg-blue-500 ",
    green = " bg-green-500 ",
    pink = " bg-pink-500 ",
    yellow = " bg-yellow-500 ",
    purple = " bg-purple-500 ",
    orange = " bg-orange-500 ",
    indigo = " bg-indigo-500 ",
    teal = " bg-teal-500 ",
    cyan = " bg-cyan-500 ",
    white = " bg-white ",
    black = " bg-black ",
    gray = " bg-gray-500 ",
    lime = " bg-lime-500 ",
}


enum TextColorList {
    red = " text-red-500 ",
    blue = " text-blue-500 ",
    green = " text-green-500 ",
    pink = " text-pink-500 ",
    yellow = " text-yellow-500 ",
    purple = " text-purple-500 ",
    orange = " text-orange-500 ",
    indigo = " text-indigo-500 ",
    teal = " text-teal-500 ",
    cyan = " text-cyan-500 ",
    white = " text-white ",
    black = " text-black ",
    gray = " text-gray-500 ",
    lime = " text-lime-500 ",
}

export type Gradient = keyof typeof GradientList;
export type Color = keyof typeof BackgroundColorList | keyof typeof TextColorList;

export const Gradient = (gradient: Gradient) => GradientList[gradient];
export const BackgroundColor = (backgroundColor: Color) => BackgroundColorList[backgroundColor];
export const TextColor = (textColor: Color) => TextColorList[textColor];

export const gradients: Gradient[] = [
    "redYellow",
    "bluePurple",
    "greenBlue",
    "pinkPurple",
    "yellowGreen",
    "purplePink",
    "pinkRed"
]

export const colors: Color[] = [
    "red",
    "blue",
    "green",
    "pink",
    "yellow",
    "purple",
    "orange",
    "indigo",
    "teal",
    "cyan",
    "white",
    "black",
    "gray",
    "lime"

]