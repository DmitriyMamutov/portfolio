import useTranslation from "next-translate/useTranslation";
import Button from "components/Button";
import Title from "components/Title";
import Link from "next/link";
import { HOMEPAGE_URL } from "config/common";
import Lottie from "./Lottie";

import styles from "./styles.module.scss";

const Hero = () => {
  const { t } = useTranslation("error");

  return (
    <section className={styles["hero"]}>
      <div className="container">
        <div className={styles["hero-content"]}>
          <div className={styles["hero-content__lottie"]}>
            <Lottie />
          </div>
          <Title level={1} size="h2">
            <div className={styles["hero-content__title"]}>
              {t("hero.title")}
            </div>
          </Title>
          <Link href={HOMEPAGE_URL}>
            <a>
              <Button className={styles["hero-content__button"]}>
                {t("hero.buttonText")}
              </Button>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
