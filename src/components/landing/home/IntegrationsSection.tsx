// src/components/IntegrationsSection.jsx

export default function IntegrationsSection() {
    return (
        <section className="py-16 px-4">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Powerful Integrations</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {/* LinkedIn */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-orange-500/20 transition-shadow">
                        <img
                            src="https://picsum.photos/id/1075/100/60"
                            alt="LinkedIn"
                            className="mx-auto mb-4 h-12"
                        />
                        <p>LinkedIn Integration</p>
                    </div>
                    {/* Indeed */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-orange-500/20 transition-shadow">
                        <img
                            src="https://picsum.photos/id/1076/100/60"
                            alt="Indeed"
                            className="mx-auto mb-4 h-12"
                        />
                        <p>Indeed Partnership</p>
                    </div>
                    {/* SAP */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-orange-500/20 transition-shadow">
                        <img
                            src="https://picsum.photos/id/1077/100/60"
                            alt="SAP"
                            className="mx-auto mb-4 h-12"
                        />
                        <p>SAP Integration</p>
                    </div>
                    {/* Workday */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-orange-500/20 transition-shadow">
                        <img
                            src="https://picsum.photos/id/1078/100/60"
                            alt="Workday"
                            className="mx-auto mb-4 h-12"
                        />
                        <p>Workday Integration</p>
                    </div>
                </div>
            </div>
        </section>
    );
  }