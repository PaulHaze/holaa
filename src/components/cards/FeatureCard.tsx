import Image from 'next/image';

type FeatureCardProps = {
  feature: Feature;
};

export function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <div className="bg-feature-card group flex flex-col items-center gap-4 rounded-[30px] px-10 py-8 transition-all duration-400 sm:px-4">
      <Image
        src={feature.image}
        alt="icon"
        className="pb-1 transition-all duration-400 group-hover:scale-125"
      />
      <h5 className="mt-1 text-center uppercase lg:text-xl">{feature.title}</h5>
      <p className="text-center opacity-80">{feature.description}</p>
    </div>
  );
}
