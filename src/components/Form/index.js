import tw from "twin.macro";

import {
	InputBase as Input,
	InputPassword,
} from "../components/Input/index.js";

//============================//
//           Form             //
//============================//
const FormContainer = tw.div`w-full flex-1 mt-1`;
const Form = tw.form`mx-auto max-w-xs`;
const FormBlock = styled.div`
	${tw`first:mt-0 mt-4`}
	.input {
		${tw`mt-2`}
	}
`;
const FormPrompt = tw.p`transition duration-300 ease-in-out`;

//============================//
//           Input            //
//============================//
const InputBase = tw(Input)`px-8 py-4 first:mt-0 mt-1 shadow-none`;
const InputLabel = styled.label`
	${tw`mt-6 text-sm text-gray-600`}
	.require {
		${tw`text-state-danger`}
	}
`;

//============================//
//        Form Button         //
//============================//
const SubmitButton = styled.button`
	${tw`mt-8 tracking-wide text-base font-semibold border-none text-black w-full py-4 rounded-md focus:shadow-outline focus:outline-none text-center`}
`;