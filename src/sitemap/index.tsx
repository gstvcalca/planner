export function SiteMapPage() {
  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex flex-col gap-3 items-center">
          <img src="/logo.svg" alt="Plann.er" />
          <h1 className="text-3xl font-bold underline underline-offset-8">Site map</h1>
        </div>

        <div className="space-y-4 flex flex-col">
          <h3 className="text-xl font-bold underline underline-offset-8">Login page</h3>
          <p>User creation</p>
          <p>User login</p>

          <h3 className="text-xl font-bold underline underline-offset-8">Feed page</h3>
          <p>Create a new trip</p>
          <p>See available trips</p>
          <p>See trips created by me</p>
          <p>See contacts list</p>

          <h3 className="text-xl font-bold underline underline-offset-8">Trip detail page</h3>
          <p>See trip owner</p>
          <p>See trip agenda</p>
          <p>See trip date</p>
          <p>See trip guest list</p>
        </div>
      </div>
    </div>
  );
}
