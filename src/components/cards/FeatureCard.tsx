import Image from 'next/image';

type FeatureCardProps = {
  feature: Feature;
};

export function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <div className="feature-card flex flex-col items-center rounded-[30px] bg-stone-600 py-10">
      <Image src={feature.image} alt="icon" />
      <h4 className="feature-title uppercase">{feature.title}</h4>
      <p>{feature.description}</p>
    </div>
  );
}
