import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Formulário adesivos</title>
        <meta name="description" content="Formulário para compra de adesivos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.mainContent}>
        <div className={styles.cardForm}>
          <form>
            <div className={styles.headerForm}>
              <h1>
                Formulário <br />
                para compra de <br /> <b>Pacotes de adesivos</b>
              </h1>
            </div>
            <div className={styles.mainForm}>
              <div>
                <label className={styles.boldLabel}>Quais adesivos:</label>
                <div className={styles.containerCheckBox}>
                  <div>
                    <input type="checkbox" name="React" id="React" />
                    <label>React</label>
                  </div>
                  <div>
                    <input type="checkbox" name="React" id="React" />
                    <label>Vue</label>
                  </div>
                  <div>
                    <input type="checkbox" name="React" id="React" />
                    <label>Angular</label>
                  </div>
                </div>
              </div>
              <div className={styles.containerStickers}>
                <label className={styles.boldLabel}>
                  Quantos adesivos de cada?
                </label>
                <div>
                  <button>-</button>
                  <input />
                  <button>+</button>
                </div>
              </div>
              <div className={styles.containerObs}>
                <label className={styles.boldLabel}>Observações:</label>
                <textarea
                  placeholder="Alguma dúvida? Recado?"
                  rows={8}
                ></textarea>
              </div>
            </div>
            <div className={styles.containerSubmit}>
              <button type="submit">Enviar</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Home;
