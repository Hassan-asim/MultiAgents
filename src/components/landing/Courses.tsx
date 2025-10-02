import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import BATCG from '../../../public/batch.png'


const features = [
  {
    name: 'Agentic AI Course.',
    description: 'Advanced Prompt Engineering ',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Agentic AI Course..',
    description: 'Autonomous AI Agents',
    icon: LockClosedIcon,
  },
  {
    name: 'Generative AI Course.',
    description: 'AI Content Creation',
    icon: ServerIcon,
  },
]

export default function Courses() {
  return (
    <div className="bg-white py-24">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gradient-to-br from-primary to-secondary px-6 py-20 sm:rounded-3xl sm:px-10 sm:py-24 lg:py-24 xl:px-24">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0">
            <div className="lg:row-start-2 lg:max-w-md">
              <h2 className="text-3xl font-semibold tracking-tight text-balance text-primary-foreground sm:text-4xl">
                Boost your Skills. Join our Bootcamp today.
              </h2>
              <p className="mt-6 text-lg/8 text-primary-foreground/80">
                Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.
                Ac euismod vel sit maecenas.
              </p>
            </div>
            <Image
              alt="Product screenshot"
              src={BATCG}
              width={2432}
              height={1442}
              className="relative -z-20 max-w-xl min-w-full rounded-xl ring-1 shadow-xl ring-white/10 lg:row-span-4 lg:w-[64rem] lg:max-w-none"
            />
            <div className="max-w-xl lg:row-start-3 lg:mt-10 lg:max-w-md lg:border-t lg:border-white/10 lg:pt-10">
              <dl className="max-w-xl space-y-8 text-base/7 text-primary-foreground/80 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative">
                    <dt className="ml-9 inline-block font-semibold text-primary-foreground">
                      <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-accent" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}