import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
    {
        value: "start-work",
        question: "When will my project officially begin?",
        answer: "Work begins immediately once the initial payment is confirmed. We follow a strict 'payment-first' workflow to ensure dedicated resources and a locked-in slot for your project."
    },
    {
        value: "guarantees",
        question: "Do you guarantee that my content/service will go viral?",
        answer: "No. We guarantee high-quality execution, technical excellence, and professional delivery. Viral success depends on market trends and algorithms beyond anyone's control. We focus on ROI and quality, not false promises."
    },
    {
        value: "rush-orders",
        question: "I need this project delivered urgently. Is that possible?",
        answer: "Yes, we offer priority delivery for tight deadlines. However, since this requires rearranging our production schedule and increasing labor hours, a 'Rush Fee' will be added to the total cost."
    },
    {
        value: "revisions",
        question: "What is your policy on changes and revisions?",
        answer: "Every project includes a specific number of revision rounds. Any changes that fall outside the original scope or requests made after the project is finalized will incur additional hourly or fixed-rate charges."
    },
    {
        value: "refunds",
        question: "What is your refund policy for services?",
        answer: "Due to the digital and labor-intensive nature of development and editing, we do not offer refunds once work has commenced. We encourage reviewing our portfolio to ensure our style aligns with your vision before hiring us."
    }
]
export function AccordionDemo() {
    return (
        <section className="w-full py-20 bg-transparent flex justify-center items-center">
            <div className="container max-w-4xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col items-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-light text-center mb-4 text-white tracking-tight">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 text-center max-w-2xl font-medium tracking-wide">
                        Everything you need to know about our services and processes.
                    </p>
                </div>
                <Accordion type="single" collapsible defaultValue="shipping" className="w-full space-y-4">
                    {faqs.map((faq) => (
                        <AccordionItem
                            key={faq.value}
                            value={faq.value}
                            className="border border-white/10 mb-5 bg-[#0a0a0a]/80 backdrop-blur-md rounded-2xl px-6 data-[state=open]:border-amber-500/50 transition-colors"
                        >
                            <AccordionTrigger className="text-lg font-medium text-white hover:text-amber-400 hover:no-underline transition-colors py-6 text-left">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-400 text-base pb-6 leading-relaxed">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}
