import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "./Button";

const LinkText: { placeholder: string; button: string } = {
  placeholder: "Shorten a link here...",
  button: "Shorten it!",
};

const FormStyles: string =
  "relative max-w-6xl m-auto flex flex-col gap-6 p-6 rounded-xl bg-primary2 bg-shortMobile bg-no-repeat bg-right-top md:flex-row md:p-12 md:bg-shortDesktop md:bg-cover";

const InputStyles: string = "p-3 rounded-md text-sm  lg:text-base w-full";

const FormLink = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      url: "",
    },
    validationSchema: Yup.object({
      url: Yup.string()
        .min(5, "Must be at least 5 characters")
        .required("Please add a link"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={onSubmit} className={FormStyles}>
      <div className="relative w-full md:flex-1">
        <input
          id="url"
          name="url"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.url}
          className={InputStyles}
          placeholder={LinkText.placeholder}
        />
        {formik.errors.url ? (
          <span className="text-red-500 text-sm lg:text-base absolute -bottom-6 lg:-bottom-7 left-1">
            {formik.errors.url}
          </span>
        ) : null}
      </div>
      <Button type="submit" style="rounded">
        {LinkText.button}
      </Button>
    </form>
  );
};
export default FormLink;
