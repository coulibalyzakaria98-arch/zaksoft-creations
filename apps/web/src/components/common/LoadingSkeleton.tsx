export function CardSkeleton() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 animate-pulse">
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-2"></div>
      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
    </div>
  );
}

export function ImageSkeleton() {
  return (
    <div className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse"></div>
  );
}

export function DashboardSkeleton() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[1,2,3,4].map(i => <CardSkeleton key={i} />)}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="h-64 bg-gray-100 dark:bg-gray-800 rounded-xl animate-pulse"></div>
        <div className="h-64 bg-gray-100 dark:bg-gray-800 rounded-xl animate-pulse"></div>
      </div>
    </div>
  );
}
