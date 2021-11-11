import Chevron from "./Chevron";

const menuItems = [
    {
        id: 0,
        name: "Tracker"
    },
    {
        id: 1,
        name: "Week 1",
        content: true
    },
    {
        id: 2,
        name: "Week 2",
        content: true
    },
];

function Course() {
    return (
      <main className="bg-custom-background fade grid grid-cols-1 md:grid-cols-2 md:max-w-3xl lg:grid-cols-3 xl:max-w-6xl mx-auto">
        <section className="hidden lg:inline-flex cols-span-1">
          <div className="sticky w-full h-full border-l border-r border-green-600 ">
            <>
              <div className="divide-y divide-green-600">
                {menuItems.map((item) => (
                    <div 
                        key={item.id}
                        id={item.id}
                        className="flex text-custom-textColor font-semibold text-2xl justify-between p-4"
                    >
                        {item.name}
                        {item.content ? (<Chevron />) : ("")}
                    </div>
                ))}
              </div>
            </>
          </div>
        </section>

        <section className="col-span-2">
          <div className="w-full">
              <div className="bg-red-500 w-2/5 h-2/5"></div>
          </div>
        </section>
      </main>
    );
}

export default Course