import React, { useState, useRef, useEffect } from "react";

function AccordionItem({ title, content, isOpen, onClick }) {
    const contentRef = useRef(null);
    const [height, setHeight] = useState("0px");

    useEffect(() => {
        if (contentRef.current) {
            setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
        }
    }, [isOpen]);

    return (
        <div className="border border-[var(--text-primary)]/15 my-6 bg-[var(--secondary-background)] rounded-lg">
            <button
                className="w-full flex justify-between items-center py-3 font-semibold text-left text-md lg:text-lg text-[var(--text-secondary)] m-3 cursor-pointer"
                onClick={onClick}
            >
                {title}
                <span className="mr-8 text-2xl">{isOpen ? "−" : "+"}</span>
            </button>

            <div
                ref={contentRef}
                style={{ maxHeight: height }}
                className="overflow-hidden transition-all duration-300 ease-in-out"
            >
                <div className="p-3 text-[var(--text-light)]">{content}</div>
            </div>
        </div>
    );
}

export default function FAQs() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const data = [
        { title: "What is web domain and hosting?", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum neque doloribus necessitatibus iusto maxime, omnis eaque ipsum at voluptatibus architecto animi cumque voluptas enim, obcaecati consequuntur? Corrupti ad perferendis similique commodi. Illum eius provident quam alias eos in ipsa inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum neque doloribus necessitatibus iusto maxime, omnis eaque ipsum at voluptatibus architecto animi cumque voluptas enim, obcaecati consequuntur? Corrupti ad perferendis similique commodi. Illum eius provident quam alias eos in ipsa inventore! " },
        { title: "Which website is best for hosting?", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum neque doloribus necessitatibus iusto maxime, omnis eaque ipsum at voluptatibus architecto animi cumque voluptas enim, obcaecati consequuntur? Corrupti ad perferendis similique commodi. Illum eius provident quam alias eos in ipsa inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum neque doloribus necessitatibus iusto maxime, omnis eaque ipsum at voluptatibus architecto animi cumque voluptas enim, obcaecati consequuntur? Corrupti ad perferendis similique commodi. Illum eius provident quam alias eos in ipsa inventore! " },
        { title: "Why SEO is important for all businesses website", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum neque doloribus necessitatibus iusto maxime, omnis eaque ipsum at voluptatibus architecto animi cumque voluptas enim, obcaecati consequuntur? Corrupti ad perferendis similique commodi. Illum eius provident quam alias eos in ipsa inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum neque doloribus necessitatibus iusto maxime, omnis eaque ipsum at voluptatibus architecto animi cumque voluptas enim, obcaecati consequuntur? Corrupti ad perferendis similique commodi. Illum eius provident quam alias eos in ipsa inventore!" },
        { title: "Why cloud service is better for businesses", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum neque doloribus necessitatibus iusto maxime, omnis eaque ipsum at voluptatibus architecto animi cumque voluptas enim, obcaecati consequuntur? Corrupti ad perferendis similique commodi. Illum eius provident quam alias eos in ipsa inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum neque doloribus necessitatibus iusto maxime, omnis eaque ipsum at voluptatibus architecto animi cumque voluptas enim, obcaecati consequuntur? Corrupti ad perferendis similique commodi. Illum eius provident quam alias eos in ipsa inventore!" },

    ];

    return (
        <div className="bg-[var(--primary-background)] text-[var(--text-primary)] pt-20 pb-8">
            <div className="max-w-8xl">
                <div>
                    {data.map((item, index) => (
                        <AccordionItem
                            key={index}
                            title={item.title}
                            content={item.content}
                            isOpen={openIndex === index}
                            onClick={() => toggleAccordion(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
