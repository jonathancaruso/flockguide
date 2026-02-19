interface BreedProfileProps {
  name: string
  eggProduction: string
  eggColor: string
  temperament: string
  size: string
  weight: string
  coldHardiness: string
  heatTolerance: string
  beginnerFriendly: number // 1-5 rating
  broodiness: string
  purpose: string
}

export function BreedProfile({
  name,
  eggProduction,
  eggColor,
  temperament,
  size,
  weight,
  coldHardiness,
  heatTolerance,
  beginnerFriendly,
  broodiness,
  purpose,
}: BreedProfileProps) {
  const stars = '★'.repeat(beginnerFriendly) + '☆'.repeat(5 - beginnerFriendly)

  return (
    <div className="my-8 bg-white border border-farm-200 rounded-xl overflow-hidden shadow-sm">
      <div className="bg-farm-600 text-white px-6 py-4">
        <h3 className="text-xl font-bold">{name} at a Glance</h3>
      </div>
      <div className="divide-y divide-farm-100">
        {[
          ['Purpose', purpose],
          ['Egg Production', eggProduction],
          ['Egg Color', eggColor],
          ['Temperament', temperament],
          ['Size', `${size} (${weight})`],
          ['Cold Hardiness', coldHardiness],
          ['Heat Tolerance', heatTolerance],
          ['Broodiness', broodiness],
          ['Beginner Friendly', stars],
        ].map(([label, value]) => (
          <div key={label} className="flex px-6 py-3">
            <span className="font-medium text-gray-700 w-40 flex-shrink-0">{label}</span>
            <span className="text-gray-600">{value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
