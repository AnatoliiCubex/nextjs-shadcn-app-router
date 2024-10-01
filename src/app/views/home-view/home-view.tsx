import { Button } from "~/app/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "~/app/components/ui/card";
import { useHomeViewLogic } from "~/app/views/home-view/home-view.logic";
import { useHomeViewStyle } from "~/app/views/home-view/home-view.style";

export default async function HomeView() {
  const { data } = await useHomeViewLogic();
  const styles = useHomeViewStyle();

  return (
    <div className={styles.container}>
      {data.products.map((product) => (
        <Card key={product.id} className={styles.card}>
          <CardTitle>{product.title}</CardTitle>
          <CardDescription>{product.description}</CardDescription>
          <CardFooter className={styles.cardFooter}>
            <div>${product.price}</div>
            <Button>View →</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
