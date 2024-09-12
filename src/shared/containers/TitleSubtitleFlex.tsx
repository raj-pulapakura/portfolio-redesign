export default function TitleSubtitleFlex({
  title,
  subtitle,
  className,
}: { title: string; subtitle: string } & JSX.IntrinsicElements['div']) {
  return (
    <div
      className={`flex justify-center items-baseline mb-16 md:mb-18 lg:mb-20 xl:mb-24 ${className}`}
    >
      <h1
        className={`font-display text-primary font-bold  text-3xl lg:text-4xl 2xl:text-5xl text-center`}
      >
        {title}
      </h1>
    </div>
  );
}
