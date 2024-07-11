import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Why We Use SQL Server | Pienteger®",
    description: "Learn why Pienteger® uses SQL Server for its database management.",
};
const SqlServer: React.FC = () => {
    return (
        <>
            <div className="md:px-40 px-5 pt-10 pb-5 flex flex-col gap-2">
                <h1>Why We Use SQL Server</h1>
                <section className="mb-6">
                    <h2 className="text-2xl mb-4">High Performance and Scalability</h2>
                    <p className="leading-relaxed">
                        SQL Server is renowned for its high performance and scalability, making it an ideal choice for both small applications and large enterprise systems. Its advanced indexing, query optimization, and in-memory processing capabilities ensure fast and efficient data retrieval and manipulation, even with large datasets.
                    </p>
                </section>
                <section className="mb-6">
                    <h2 className="text-2xl mb-4">Robust Security Features</h2>
                    <p className="leading-relaxed">
                        Security is a top priority with SQL Server, offering a comprehensive suite of features to protect your data. From advanced encryption methods to robust access controls and auditing capabilities, SQL Server ensures your data remains secure and compliant with industry standards.
                    </p>
                </section>
                <section className="mb-6">
                    <h2 className="text-2xl mb-4">Seamless Integration with Microsoft Ecosystem</h2>
                    <p className="leading-relaxed">
                        SQL Server integrates seamlessly with other Microsoft products and services, providing a unified and efficient environment for data management and application development. Whether you're using Azure for cloud storage, Power BI for analytics, or integrating with Microsoft 365 services, SQL Server offers unparalleled compatibility and ease of use.
                    </p>
                </section>
            </div>
        </>
    );
}

export default SqlServer;