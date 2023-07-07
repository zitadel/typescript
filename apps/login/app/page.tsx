export const runtime = "edge";

import { demos } from "#/lib/demos";
import Link from "next/link";

export default function Page() {
  return (
    <div className="space-y-8">
      <h1 className="text-xl font-medium">Pages</h1>

      <div className="space-y-10">
        {demos.map((section) => {
          return (
            <div key={section.name} className="space-y-5">
              <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                {section.name}
              </div>
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                {section.items.map((item) => {
                  return (
                    <Link
                      href={`/${item.slug}`}
                      key={item.name}
                      className="bg-background-light-400 dark:bg-background-dark-400 group block space-y-1.5 rounded-md px-5 py-3 hover:shadow-lg hover:dark:bg-white/10 border border-divider-light dark:border-divider-dark transition-all "
                    >
                      <div className="font-medium">{item.name}</div>

                      {item.description ? (
                        <div className="line-clamp-3 text-sm text-text-light-secondary-500 dark:text-text-dark-secondary-500">
                          {item.description}
                        </div>
                      ) : null}
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
