import * as Joi from "joi";

export const validatorSearch=Joi.object({
    search:Joi.string().pattern(/^(?!\s*$)(?!.*[./\\]).{1,}$/).required().messages({
        "string.pattern.base": "Enter the name of the movie"}
    )})