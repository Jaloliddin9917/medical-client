import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import classes from "./Apply.module.scss";
import { useTranslation } from "next-i18next";
import { Label } from "../../components/Order-page/FormGenerator";
import InputText from "../../components/Order-page/InputText";
import InputMaska from "../../components/Order-page/InputMask";
import { useForm, Controller } from "react-hook-form";
import { SendMessage } from "../../lib";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Order = () => {
  const { t } = useTranslation();
  const notify = () => toast("Successfully sent");
  const notifyError = () => toast("Error");
  const { control, handleSubmit } = useForm({
    defaultValues: {
      type: "MEMBER_REQUEST",
    },
  });

  const sendmsg = SendMessage();
  const onSubmit = (data) => {
    sendmsg
      .mutateAsync(data)
      .then((res) => notify())
      .catch((err) => notifyError());
  };
  return (
    <>
      <Head>
        <title>{t("Apply")}</title>
        <meta
          name="description"
          content="Association of Bariatric and Metabolic Surgeons of Uzbekistan"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <div className={classes.heading}>
          <p>{t("Ariza formasi")}</p>
        </div>

        <div className={classes.forma}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={classes.forma_inputs}>
              <Label
                className={classes.item_input}
                required
                labelPosition="top"
                label={t("Ism")}
              >
                <Controller
                  className={classes.item}
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <InputText fullWidth placeholder={t("Ismi")} {...field} />
                  )}
                />
              </Label>
              <Label
                className={classes.item_input}
                required
                labelPosition="top"
                label={t("Familya")}
              >
                <Controller
                  className={classes.item}
                  name="lastName"
                  control={control}
                  render={({ field }) => (
                    <InputText
                      fullWidth
                      placeholder={t("Familiya")}
                      {...field}
                    />
                  )}
                />
              </Label>
              <Label
                className={classes.item_input}
                required
                labelPosition="top"
                label={t("E-pochta manzili")}
              >
                <Controller
                  className={classes.item}
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <InputText
                      fullWidth
                      placeholder={t("E-pochta manzili")}
                      {...field}
                    />
                  )}
                />
              </Label>
              <Label
                required
                labelPosition="top"
                label={t("Mobil telefon raqami")}
              >
                <Controller
                  className={classes.item}
                  name="phoneNumber"
                  control={control}
                  render={({ field }) => <InputMaska {...field} />}
                />
              </Label>
              <div>
                <button type="submit">{t("Bizga Qo'shiling")}</button>
              </div>
            </div>
            <ToastContainer position="top-center" />
          </form>
        </div>
      </div>

    </>
  );
};

export const getStaticProps = async (context) => {
  const locale = context.locale;

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};

export default Order;
