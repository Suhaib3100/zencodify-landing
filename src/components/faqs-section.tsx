import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {Separator} from "@/components/ui/separator";


const FAQ = [
    {
        question: "What programming languages are supported?",
        answer:
            "Our platform supports a wide range of programming languages, including Python, JavaScript, Java, C++, and more. Check our documentation for the full list.",
    },
    {
        question: "Can I share my code with others?",
        answer:
            "Yes, you can easily share your code snippets via unique links or collaborate in real-time with your team.",
    },
    {
        question: "Is there a limit to the size of code I can upload?",
        answer:
            "There are no strict limits on the size of code you can upload, but extremely large files may take longer to process. For optimal performance, try breaking down your code into smaller, manageable snippets.",
    },
    {
        question: "Is my code and data secure?",
        answer:
            "Absolutely. We use advanced encryption methods and follow industry best practices to ensure your code and data are safe and secure.",
    },
    {
        question: "Can I integrate this platform with my existing tools?",
        answer:
            "Yes, we provide APIs and integrations to connect with popular developer tools like GitHub, GitLab, and more.",
    },
];

export function FAQsSection() {
    return (
        <>
            <div className={"bg-black text-white bg-gradient-to-b from-[#5D2CA8] to-black py-[72px] sm:py-24"}>
                <div className="container">
                    <h2 className={"text-5xl font-bold tracking-tight text-center"}>Frequently Asked Questions</h2>
                    <div className={"mt-12 max-w-4xl mx-auto"}>
                        <Separator/>
                        <Accordion type="single" collapsible>
                            {FAQ.map((item, index) => (
                                <AccordionItem key={index} value={item.question}>
                                    <AccordionTrigger className={"text-md lg:text-lg font-bold"}>{item.question}</AccordionTrigger>
                                    <AccordionContent className={"text-sm"}>
                                        {item.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </>
    )
}
