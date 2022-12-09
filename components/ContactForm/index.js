import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import cn from "classnames";
import axios from "axios";
import useTranslation from "next-translate/useTranslation";
import Button from "components/Button";
import * as Yup from "yup";
import { TextareaAutosize } from "@material-ui/core";
import Title from "components/Title";
import LottieLoader from "./LottieLoader";
import Confetti from "./Confetti";

import styles from "./styles.module.scss";

const FIELDS_NAMES = {
  NAME: "name",
  EMAIL: "email",
  MESSAGE: "message",
};

const fields = [
  {
    id: FIELDS_NAMES.NAME,
    name: FIELDS_NAMES.NAME,
    type: "text",
  },
  {
    id: FIELDS_NAMES.EMAIL,
    name: FIELDS_NAMES.EMAIL,
    type: "email",
  },
  {
    id: FIELDS_NAMES.MESSAGE,
    name: FIELDS_NAMES.MESSAGE,
    type: "text",
  },
];

const BannerForm = () => {
  const [completed, setCompleted] = useState(false);

  const { t } = useTranslation("common");

  const requestValidationSchema = Yup.object({
    name: Yup.string()
      .required(t("contactForm.required"))
      .matches(/^[aA-zZаА-яЯ\s]+$/, t("contactForm.items.name.valid"))
      .min(2, t("contactForm.items.name.valid"))
      .max(50, t("contactForm.items.name.valid")),
    email: Yup.string()
      .required(t("contactForm.required"))
      .email(t("contactForm.items.email.valid")),
    message: Yup.string().required(t("contactForm.required")),
  });

  return (
    <div className={styles["contact"]}>
      {completed && (
        <div className={styles["contact__confetti"]}>
          <Confetti />
        </div>
      )}
      <div
        className={cn(styles["contact-completed"], {
          [styles["contact-completed--visible"]]: completed,
        })}
      >
        <Title size="footer" level={4}>
          <div className={styles["contact-completed__title"]}>
            {t(`contactForm.completedTitle`)}
          </div>
        </Title>
        <div className={styles["contact-completed__subtitle"]}>
          {t(`contactForm.completedSubtitle`)}
        </div>
      </div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        validationSchema={requestValidationSchema}
        onSubmit={async (
          { name, email, message },
          { setSubmitting, resetForm },
        ) => {
          const formData = new FormData();
          formData.append(FIELDS_NAMES.NAME, name);
          formData.append(FIELDS_NAMES.EMAIL, email);
          formData.append(FIELDS_NAMES.MESSAGE, message);

          try {
            await axios
              .post(`https://portfolio-lending-backend.vercel.app/`, formData, {
                headers: { "Content-Type": "form/multipart" },
              })
              .then((r) => {
                if (r.status === 200) {
                  setCompleted(true);
                  setTimeout(() => {
                    setCompleted(false);
                  }, 6000);
                } else {
                  console.error();
                }
              });
          } catch (err) {
            console.error(err);
          }
          setSubmitting(false);
          resetForm();
        }}
      >
        {({ values, setFieldValue, setFieldTouched, errors, isSubmitting }) => {
          return (
            <Form
              className={cn(styles["contact-form"], "contact-form", {
                [styles["contact-form--completed"]]: completed,
              })}
            >
              <div className={styles["contact-form-block"]}>
                {fields.map(({ name, id, type }) => {
                  return (
                    <div
                      key={id}
                      className={cn(
                        styles["contact-form-block__input-wrapper"],
                      )}
                      data-text={t(`contactForm.items.${id}.placeholder`)}
                    >
                      {id === FIELDS_NAMES.MESSAGE ? (
                        <TextareaAutosize
                          name={name}
                          id={id}
                          type={type}
                          value={values.message}
                          placeholder={t(`contactForm.items.${id}.placeholder`)}
                          onChange={(e) => {
                            setFieldValue("message", e.target.value);
                          }}
                          onBlur={() => {
                            setFieldTouched("message");
                          }}
                        />
                      ) : (
                        <Field
                          name={name}
                          id={id}
                          type={type}
                          placeholder={t(`contactForm.items.${id}.placeholder`)}
                        />
                      )}
                      <ErrorMessage
                        name={name}
                        render={(msg) => (
                          <span
                            className={cn(styles["error-msg"], "error-msg", {
                              [styles["error-msg--active"]]: errors,
                            })}
                          >
                            {msg}
                          </span>
                        )}
                      />
                    </div>
                  );
                })}
              </div>
              {isSubmitting ? (
                <Button
                  className={styles["contact-form__button"]}
                  type="submit"
                  theme="footer"
                >
                  <LottieLoader />
                </Button>
              ) : (
                <Button type="submit" theme="footer" disabled={isSubmitting}>
                  {t("contactForm.buttonText")}
                </Button>
              )}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default BannerForm;
