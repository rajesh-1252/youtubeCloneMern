import { BadRequestError } from "../error";

export const allValuesError = (feilds: string[]) => {
  feilds.map((item, index) => {
    if (!item) {
      throw new BadRequestError("Please provide all values");
    }
    console.log(item);
  });
};
