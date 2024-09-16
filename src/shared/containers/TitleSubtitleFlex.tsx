export default function TitleSubtitleFlex({
  title,
  subtitle,
  className,
}: { title: string; subtitle: string } & JSX.IntrinsicElements['div']) {
  return (
    <div className={`flex justify-center items-baseline mb-10 ${className}`}>
      <h1
        className={`font-sans text-primary font-bold text-3xl lg:text-4xl 2xl:text-6xl text-center`}
      >
        {title}
      </h1>
    </div>
  );
}
