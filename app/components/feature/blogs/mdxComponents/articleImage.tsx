type Props = {
  src: string;
  alt: string;
};

export const ArticleImage = async (props: Props) => {
  const isFullUrl = props.src.startsWith("http");
  const imagePath = props.src.replace("../../public/static/assets/", "");
  const imageUrl = `/static/assets/${imagePath}`;
  return (
    <figure class="full-width justify-center flex">
      <a href={isFullUrl ? props.src : imageUrl}>
        <img
          class={"object-contain max-h-[500px] max-w-full h-auto w-auto"}
          src={isFullUrl ? props.src : imageUrl}
          alt={props.alt}
          width={"auto"}
          height={"auto"}
        />
      </a>
    </figure>
  );
};
