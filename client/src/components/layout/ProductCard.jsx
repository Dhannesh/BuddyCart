import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ProductCard = ({ product }) => {
  const { imageUrl, name, description, price } = product;

  return (
    <Card className="group h-full overflow-hidden pt-0 transition-shadow hover:shadow-lg">
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={imageUrl}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-1">{name}</CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="mt-auto" />
      <CardFooter className="flex items-center justify-between">
        <span className="text-xl font-bold">
          ₹{Number(price).toLocaleString("en-IN")}
        </span>
        <Button size="sm">
          <ShoppingCart />
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
