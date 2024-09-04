import { FeatureCard } from '@/components/cards';

import { featuresData as data } from '@/data/features';

export function FeatureCards() {
  return (
    <div className="flex w-full items-center md:px-5 lg:px-10">
      <div className="rounded-[40px] bg-black/50 px-4 py-10 sm:px-10">
        <h3 className="mb-8 text-center">{data.title}</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-3">
          {data.features.length &&
            data.features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
        </div>
      </div>
    </div>
  );
}
