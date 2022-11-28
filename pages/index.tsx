import Home from "containers/Home";
import useTranslation from "next-translate/useTranslation";

export default function HomePage() {
  const { t } = useTranslation("index");

  return (
    <div>
      <Home />
    </div>
  );
}
