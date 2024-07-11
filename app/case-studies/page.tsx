import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Case Studies Pienteger® | Mission, Vision, and Values",
    description: "Case studies of Pienteger®. Learn how we help our clients achieve their goals.",
};
const CaseStudies: React.FC = () => {
    return (
        <>
            <div className="content">
                <h1>Case Studies</h1>
                <Link href="/case-studies/streamlining-workforce-management-for-a-large-corporation/" className="link-card mb-6">
                    <section>
                        <h2 className="text-2xl">Case Study: Streamlining Workforce Management for a Large Corporation</h2>
                        <p className="leading-relaxed">
                            Learn how Pienteger® helped a large corporation streamline workforce management with a .NET application on Azure.
                        </p>
                    </section>
                </Link>

            </div>
        </>
    );
}

export default CaseStudies;