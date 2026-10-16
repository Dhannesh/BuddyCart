const Head = ({
  title = "Explore Eazy Stickers",
  subtitle = "Browse our collection of stickers and find your favourites.",
}) => {
  return (
    <section className="container mx-auto px-4 pt-10 pb-2 text-center">
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h1>
      <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
        {subtitle}
      </p>
    </section>
  );
};
export default Head;
