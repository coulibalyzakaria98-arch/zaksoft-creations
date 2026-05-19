import { Skeleton } from '@/components/ui/skeleton';

interface PageSkeletonProps {
  header?: boolean;
  sidebar?: boolean;
  cards?: number;
}

export function PageSkeleton({ header = true, sidebar = false, cards = 0 }: PageSkeletonProps) {
  return (
    <div className="flex">
      {sidebar && (
        <div className="w-64 border-r p-4 space-y-4">
          {[...Array(8)].map((_, i) => (
            <Skeleton key={i} className="h-10 w-full rounded-lg" />
          ))}
        </div>
      )}
      
      <div className="flex-1 p-8">
        {header && (
          <div className="mb-8 space-y-2">
            <Skeleton className="h-8 w-48" />
            <Skeleton className="h-4 w-96" />
          </div>
        )}
        
        {cards > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(cards)].map((_, i) => (
              <div key={i} className="space-y-3">
                <Skeleton className="h-32 w-full rounded-xl" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-3 w-1/2" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
