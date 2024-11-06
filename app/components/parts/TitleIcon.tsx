type Props = {
  iconUrl: string;
  size?: number;
};

export const TitleIcon = (props: Props) => {
  const size = props.size || 80;
  return (
    <div class={"flex justify-center"}>
      <img src={props.iconUrl} alt="article icon" width={size} height={size} />
    </div>
  );
};
