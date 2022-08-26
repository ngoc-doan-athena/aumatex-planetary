import tw from "twin.macro";

export const PrimaryButton = tw.button`tracking-wide font-semibold border-none bg-gradient-to-b from-primary-300 to-primary-900 text-black w-full py-4 rounded-md hover:from-primary-900 hover:to-primary-300 transition ease-in-out duration-300 ease-in-out focus:shadow-outline focus:outline-none text-center`;
export const SecondaryButton = tw.button`px-4 py-3 font-bold rounded bg-transparent border-primary-500 text-primary-500 hocus:border-primary-700 hocus:text-primary-700 focus:shadow-outline focus:outline-none transition duration-300 text-center`;
export const DisabledButton;
