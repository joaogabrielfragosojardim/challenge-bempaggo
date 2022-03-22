import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { useForm } from "react-hook-form";

interface IData {
  stickersValue: number;
  checkbox: any;
  obs: string;
}

const Home: NextPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [values, setValues] = useState({
    stickersValues: 0,
    checkbox: [""],
    obs: "",
  });
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      stickersValue: 0,
      checkbox: false,
      obs: "",
    },
  });

  const onSubmit = (data: IData) => {
    setOpenModal(true);
    setValues({
      stickersValues: data.stickersValue,
      checkbox: data.checkbox,
      obs: data.obs,
    });
    setTimeout(() => {
      setOpenModal(false);
    }, 3000);
  };

  return (
    <div>
      <Head>
        <title>Formulário adesivos</title>
        <meta name="description" content="Formulário para compra de adesivos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.mainContent}>
        <div className={styles.cardForm}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.headerForm}>
              <h1>
                Formulário <br />
                para compra de <br /> <b>Pacotes de adesivos</b>
              </h1>
              <div>
                <Image
                  src="/box.png"
                  alt="box"
                  width={"100%"}
                  height={"100%"}
                ></Image>
              </div>
            </div>
            <div className={styles.mainForm}>
              <div>
                <label className={styles.boldLabel}>Quais adesivos:</label>
                <div className={styles.containerCheckBox}>
                  <div>
                    <input
                      type="checkbox"
                      id="React"
                      value="React"
                      {...register("checkbox", {
                        required: "Selecione ao menos um campo",
                      })}
                    />
                    <label>React</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="Vue"
                      {...register("checkbox", {
                        required: "Selecione ao menos um campo",
                      })}
                      value="Vue"
                    />
                    <label>Vue</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="Angular"
                      value="Angular"
                      {...register("checkbox", {
                        required: "Selecione ao menos um campo",
                      })}
                    />
                    <label>Angular</label>
                  </div>
                  <span className={styles.error}>
                    {errors.checkbox?.message}
                  </span>
                </div>
              </div>
              <div className={styles.containerStickers}>
                <label className={styles.boldLabel}>
                  Quantos adesivos de cada?
                </label>
                <div>
                  <button
                    type="button"
                    onClick={() => {
                      setValue("stickersValue", getValues("stickersValue") - 1);
                    }}
                  >
                    -
                  </button>
                  <input
                    id="teste"
                    disabled
                    {...register("stickersValue", {
                      min: {
                        value: 1,
                        message: "Quantidade deve ser maior que um",
                      },
                      required: "Selecione o campo",
                    })}
                  />

                  <button
                    type="button"
                    onClick={() => {
                      setValue("stickersValue", getValues("stickersValue") + 1);
                    }}
                  >
                    +
                  </button>
                </div>
                <span className={styles.error}>
                  {errors.stickersValue?.message}
                </span>
              </div>
              <div className={styles.containerObs}>
                <label className={styles.boldLabel}>Observações:</label>
                <textarea
                  placeholder="Alguma dúvida? Recado?"
                  rows={8}
                  {...register("obs")}
                ></textarea>
              </div>
            </div>
            <div className={styles.containerSubmit}>
              <button type="submit">Enviar</button>
            </div>
          </form>
        </div>
      </main>
      <div
        className={styles.popUp}
        style={{ display: openModal ? "flex" : "none" }}
      >
        <div>
          <ul>
            <b>Quais adesivos:</b>
            {values.checkbox.map((item: string) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <span>
            <b>Quantidade de adesivos: </b>
            {values.stickersValues}
          </span>
          <span>
            {!!values.obs ? (
              <>
                <b>Observaçoes: </b> {values.obs}
              </>
            ) : (
              ""
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
