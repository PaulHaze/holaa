import { FeatureCard } from '@/components/cards';

import { featuresData as data } from '@/data/features';

export function FeatureCards() {
  return (
    <div className="w-full rounded-[40px] bg-black px-4 py-10">
      <FeatureCard feature={data.features[0]} />
    </div>
  );
}
