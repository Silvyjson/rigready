// src/components/StatsSection.jsx
export default function StatsSection() {
    return (
        <section className="py-12 px-4 bg-gray-800">
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div className="p-4">
                        <h3 className="text-3xl font-bold text-orange-500">$140B</h3>
                        <p className="text-gray-400">Global Market Size</p>
                    </div>
                    <div className="p-4">
                        <h3 className="text-3xl font-bold text-orange-500">5.3M</h3>
                        <p className="text-gray-400">Industry Workforce</p>
                    </div>
                    <div className="p-4">
                        <h3 className="text-3xl font-bold text-orange-500">24%</h3>
                        <p className="text-gray-400">Growth Rate</p>
                    </div>
                    <div className="p-4">
                        <h3 className="text-3xl font-bold text-orange-500">150+</h3>
                        <p className="text-gray-400">Certifications Tracked</p>
                    </div>
                </div>
            </div>
        </section>
    );
  }