import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Why We Use Azure | Pienteger®",
    description: "Learn why Pienteger® uses Azure for its cloud infrastructure.",
};
const Azure: React.FC = () => {
    return (
        <>
            <div className="md:px-40 px-5 pt-10 pb-5 flex flex-col gap-2">
                <h1>Why We Use Azure</h1>
                <section className="mb-6">
                    <h2 className="text-2xl mb-4">Global Reach and Reliability</h2>
                    <p className="leading-relaxed">
                        Azure offers a global network of data centers, providing unparalleled reach and reliability. This extensive infrastructure ensures that our applications are always available and performant, regardless of where our users are located. The robust service-level agreements (SLAs) guarantee uptime and reliability, making Azure a trusted choice for mission-critical applications.
                    </p>
                </section>
                <section className="mb-6">
                    <h2 className="text-2xl mb-4">Comprehensive Security and Compliance</h2>
                    <p className="leading-relaxed">
                        Security is at the core of Azure, offering advanced security features and compliance certifications to protect your data and applications. From built-in firewalls and threat detection to encryption and identity management, Azure ensures that your resources are secure and compliant with global standards and regulations.
                    </p>
                </section>
                <section className="mb-6">
                    <h2 className="text-2xl mb-4">Seamless Integration with Microsoft Ecosystem</h2>
                    <p className="leading-relaxed">
                        Azure integrates seamlessly with other Microsoft products and services, providing a cohesive and efficient development environment. Whether it's leveraging Azure DevOps for CI/CD pipelines, using Azure Active Directory for identity management, or integrating with Microsoft 365 for enhanced productivity, Azure ensures a unified and streamlined experience.
                    </p>
                </section>
            </div>
        </>
    );
}

export default Azure;