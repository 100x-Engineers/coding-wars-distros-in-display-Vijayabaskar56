import { Field, Formik } from "formik";
import { object, string, number, reach } from "yup";
import InputField from "../components/InputField";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Image from "../components/Image";

const StepFour = () => {
  const navigate = useNavigate();

  const validation = object({
    name: string("Invalid Entry")
      .required("Name Required!")
      .max(20, "Name should be 20 letters"),
    email: string("Invalid Entry")
      .email("Invalid Entry")
      .required("Email Required"),
    phoneNumber: string()
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(10, "Must be exactly 10 digits")
      .max(10, "Must be exactly 10 digits"),
    githubProfile: string().url("Invalid URL"),
    linkedinProfile: string().url("Invalid URL"),
  });

  return (
    <>
      <section className="flex-col self-stretch w-full justify-start h-5/6">
        <h1 className="pb-5 text-2xl font-bold text-stone-50">
          Create your account
        </h1>
        <div className="flex-col items-center gap-8 w0ustify-center ">
          <section
            action
            className="inline-flex flex-col justify-between gap-8"
          >
            <Formik
              initialValues={{
                name: "",
                email: "",
                phoneNumber: "",
                githubProfile: "",
                linkedinProfile: "",
              }}
              validationSchema={validation}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setTimeout(() => {
                  console.log(values);
                  resetForm();
                  setSubmitting(false);
                }, 3000);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <form
                  onSubmit={handleSubmit}
                  className="inline-flex flex-col justify-between gap-8"
                >
                  <InputField
                    name="name"
                    type="text"
                    placeholder="Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    disabled={isSubmitting}
                    errors={errors.name}
                    touched={touched.name}
                  />
                  <InputField
                    name="email"
                    type="email"
                    placeholder="Email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    disabled={isSubmitting}
                    errors={errors.email}
                    touched={touched.email}
                  />
                  <InputField
                    name="phoneNumber"
                    type="text"
                    placeholder="Phone Number"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.phoneNumber}
                    disabled={isSubmitting}
                    errors={errors.phoneNumber}
                    touched={touched.phoneNumber}
                  />
                  <InputField
                    name="githubProfile"
                    type="text"
                    placeholder="GitHub Profile"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.githubProfile}
                    disabled={isSubmitting}
                    errors={errors.githubProfile}
                    touched={touched.githubProfile}
                  />
                  <InputField
                    name="linkedinProfile"
                    type="text"
                    placeholder="LinkedIn Profile"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.linkedinProfile}
                    disabled={isSubmitting}
                    errors={errors.linkedinProfile}
                    touched={touched.linkedinProfile}
                  />
                  <div className="m-auto h-2/6 pt-28">
                    <Button
                      varient="base"
                      buttonsize="md"
                      type="submit"
                      disabled={isSubmitting}
                      onClick={() => navigate("/logintwo")}
                    >
                      Create account
                    </Button>
                  </div>
                </form>
              )}
            </Formik>
          </section>
        </div>
      </section>
    </>
  );
};

export default StepFour;
