import { Container } from "@/components/ui/Container";
import { Breadcrumb, type BreadcrumbItem } from "@/components/ui/Breadcrumb";
import { SafeImage } from "@/components/ui/SafeImage";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  breadcrumb,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  image: string;
  imageAlt: string;
  breadcrumb?: BreadcrumbItem[];
}) {
  return (
    <section className="relative flex min-h-[52vh] items-end overflow-hidden bg-espresso-950 text-ivory-100 md:min-h-[60vh]">
      <SafeImage
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-espresso-950 via-espresso-950/70 to-espresso-950/30" />
      <Container className="relative z-10 pb-16 pt-32">
        {breadcrumb && (
          <div className="mb-6">
            <Breadcrumb items={breadcrumb} inverted />
          </div>
        )}
        {eyebrow && (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl text-4xl leading-tight text-ivory-50 md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ivory-200/90 md:text-lg">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
