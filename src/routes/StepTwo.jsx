import { Field, Formik } from "formik";
import { object, string, number } from "yup";
import InputField from "../components/InputField";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";

const StepTwo = () => {
  const navigate = useNavigate();

  const validation = object({
    name: string("Invalid Entry")
      .required("Name Required!")
      .max(20, "Name should be 20 letter's"),
    email: string("Invalid Entry")
      .email("Invalid Entry")
      .required("Email Requried"),
    month: string().required("Selecte Month"),
    day: number().required("Select Date"),
    year: number().required("Select year"),
  });
  return (
    <>
      <div className="w-screen h-screen bg-black">
        <section className="flex-col px-5 py-5  self-stretch justify-start w-full h-5/6">
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
                  month: "",
                  day: "",
                  year: "",
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

                    <div className="m-auto h-2/6 pt-28">
                      <Button
                        varient="base"
                        buttonsize="md"
                        type="submmit"
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
      </div>
    </>
  );
};

export default StepTwo;
