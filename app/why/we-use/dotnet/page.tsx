import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Why We Use .NET | Pienteger®",
    description: "Learn why Pienteger® uses .NET for its development projects.",
};

const Dotnet: React.FC = () => {
    return (
        <>
            <div className="md:px-40 px-5 pt-10 pb-5 flex flex-col gap-2">
                <h1>Why We Use .NET</h1>
                <section className="mb-6">
                    <h2 className="text-2xl mb-4">Power and Performance</h2>
                    <p className="leading-relaxed">
                        .NET is a robust and high-performance framework that allows us to build scalable and reliable applications. Its powerful features like Just-In-Time compilation, garbage collection, and efficient memory management ensure our applications run smoothly and efficiently.
                    </p>
                </section>
                <section className="mb-6">
                    <h2 className="text-2xl mb-4">Enterprise-Level Support</h2>
                    <p className="leading-relaxed">
                        Backed by Microsoft, .NET provides extensive support for enterprise-level applications. The continuous updates, security patches, and comprehensive documentation ensure that we are always up-to-date and secure. The large community and dedicated support channels further strengthen our development process.
                    </p>
                </section>
                <section className="mb-6">
                    <h2 className="text-2xl mb-4">Strength in Enterprise Applications</h2>
                    <p className="leading-relaxed">
                        .NET's versatility and scalability make it an ideal choice for enterprise applications. Its ability to handle large-scale systems, integrate seamlessly with various databases and services, and support multiple programming languages allows us to meet the complex needs of our clients efficiently.
                    </p>
                </section>
                <section className="mb-6">
                    <h2 className="text-2xl mb-4">Easy Integration with .NET Ecosystem</h2>
                    <p className="leading-relaxed">
                        .NET seamlessly integrates with a wide array of Microsoft technologies, providing a cohesive and efficient development environment. Whether it's connecting with PowerApps for low-code development, utilizing Microsoft Graph for accessing data across Microsoft 365 services, or integrating with Azure for cloud solutions, .NET ensures smooth and reliable interactions. This compatibility allows our clients to leverage their existing investments in Microsoft technologies, enhancing productivity and reducing time-to-market for their applications.
                    </p>
                </section>
            </div>
        </>
    );
}

export default Dotnet;