import { FeatureCard } from '@/components/cards';

import { featuresData as data } from '@/data/features';

export function FeatureCards() {
  return (
    <div className="w-full rounded-[40px] bg-black/50 px-4 py-10">
      <h3 className="mb-5 text-center">{data.title}</h3>
      <div className="grid grid-cols-1 gap-4">
        {data.features.length &&
          data.features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        {/* <FeatureCard feature={data.features[0]} />
        <FeatureCard feature={data.features[1]} />
        <FeatureCard feature={data.features[2]} />
        <FeatureCard feature={data.features[3]} /> */}
      </div>
    </div>
  );
}
