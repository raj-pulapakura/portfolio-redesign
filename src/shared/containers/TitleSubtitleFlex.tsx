export default function TitleSubtitleFlex({
  title,
  className,
}: { title: string; subtitle: string } & JSX.IntrinsicElements['div']) {
  return (
    <div className={`flex justify-center items-baseline mb-10 `}>
      <h1
        className={`font-sans font-bold text-3xl lg:text-4xl 2xl:text-6xl text-center text-primary ${className}`}
      >
        {title}
      </h1>
    </div>
  );
}
