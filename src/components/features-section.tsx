import {Goal, MonitorSmartphone, ShieldCheck ,Group,Code,} from "lucide-react";
import {FeatureCard} from "@/components/feature-card";

const features = [
    {
        title: "Code Collaboration",
        description: "Share your code snippets with teammates effortlessly and collaborate in real-time.",
        icon: <Group className={"size-7"} />,
    },
    {
        title: "Multi-Language Support",
        description: "Write and compile code in multiple programming languages all in one platform.",
        icon: <Code className={"size-7"} />,
    },
    {
        title: "Secure Code Storage",
        description: "Store your code snippets with robust encryption, ensuring privacy and security.",
        icon: <ShieldCheck className={"size-7"} />,
    },
];


export function FeaturesSection() {
    return (
        <>
            <div className={"bg-black text-white py-[72px] sm:py-24"}>
                <div className={"container"}>
                    <h1 className={"text-5xl sm:text-6xl font-bold text-center tracking-tighter pt-6"}>Everything you need</h1>
                    <div className={"max-w-3xl mx-auto"}>
                        <p className={"text-center mt-5 text-xl text-white/70"}>
                        Made an entire online compiler platform where people can share snippets of their code effortlessly.
                        </p>
                    </div>
                    <div className={"flex items-center justify-center mt-16"}>
                        <div className={"grid sm:grid-cols-3 gap-5 max-w-5xl"}>
                            {features.map((features, index) => (
                                <FeatureCard
                                    key={index} title={features.title}
                                    description={features.description} icon={features.icon}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
