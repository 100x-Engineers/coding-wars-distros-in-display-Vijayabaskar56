import { Field, Formik } from "formik";
import { object, string, number } from "yup";
import InputField from "../components/InputField";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Image from "../components/Image";

const StepTwo = () => {
  const navigate = useNavigate();

  const validation = object({
    college_name: string("Invalid Entry")
      .required("Name Required!")
      .max(20, "Name should be 20 letter's"),
    school_name: string("Invalid Entry")
      .required("Name Required!")
      .max(20, "Name should be 20 letter's"),

    degree_title:string("Invalid Entry")
    .required("Name Required!")
    .max(20, "Name should be 20 letter's")

        
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
                college_name: "",
                school_name: "",
                degree_title:""
             
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
                    name="college_name"
                    type="text"
                    placeholder="College"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    disabled={isSubmitting}
                    errors={errors.name}
                    touched={touched.name}
                  />
                  <InputField
                    name="school_name"
                    type="text"
                    placeholder="School"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    disabled={isSubmitting}
                    errors={errors.email}
                    touched={touched.email}
                  />
                 
                  <div className="m-auto h-2/6 pt-28 bg-yellow-200">
                    <Button
                      varient="Button"
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
    </>
  );
};

export default StepTwo;
