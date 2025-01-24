import zod from "zod";

const firstNameSchema = zod.string().min(5, "First name Should be atleast 5 letters").max(20, "First name Shouldn't be more than 20 letters");
const lastNameSchema = zod.string().min(5, "Sirname Should be atleast 5 letters").max(20, "Sirname Shouldn't be more than 20 letters");
const emailSchema = zod.string().email();
const usernameSchema = zod.string().min(5, "Username Should have at least 5 characters").max(30, "Username Shouldn't be more than 30 characters");
const passwordSchema = zod.string()
                .min(8, "Password Should be minimum 8 characters long")
                .max(44, "Password Shouldn't be more than 44 characters long")
                .regex(/[A-Z]/, "Password must contain atleast one Uppercase letter")
                .regex(/[a-z]/, "Password must contain atleast one lowercase letter")
                .regex(/\d/, "Password must contain at least one number")
                .regex(/[@$!%*?&]/, "Password must contain atleast one special character")
                .refine((val) => !/\s/.test(val), "Password must not contain spaces");



const signUpData = (name, value, errors) => {
  const {firstName, lastName, email, username, password } = errors;

  switch(name) {
    case "firstName":
      {
        errors.firstName = firstNameSchema.safeParse(value).success ? "" : firstNameSchema.safeParse(value).error.errors[0].message;
        break;
      }
    case "lastName":
      {
        errors.lastName = lastNameSchema.safeParse(value).success ? "" : lastNameSchema.safeParse(value).error.errors[0].message;
        break;
      }
    case "email":
      {
        errors.email = emailSchema.safeParse(value).success ? "" : "Invalid Email";
        break;
      }
    case "username":
      {
        errors.username = usernameSchema.safeParse(value).success ? "" : usernameSchema.safeParse(value).error.errors[0].message;
        break;
      }
    case "password":
      {
        errors.password = passwordSchema.safeParse(value).success ? "" : passwordSchema.safeParse(value).error.errors[0].message;
        break;
      }
  }


  return errors
};

export  { signUpData };
