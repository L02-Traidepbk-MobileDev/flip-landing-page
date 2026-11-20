import { useId, useState } from 'react';
import './FAQ.css';

const faqs = [
    {
        question: 'Flip là gì và dành cho ai?',
        answer:
            'Flip giúp bạn làm quen với những người cùng địa điểm qua ảnh khoảnh khắc ẩn danh. Phù hợp khi bạn muốn kết nối nhưng còn ngại bắt chuyện.',
    },
    {
        question: 'Tôi cần check-in để khám phá không?',
        answer:
            'Có. Bạn cần xác nhận vị trí, check-in và đăng một khoảnh khắc để bắt đầu khám phá những người cùng địa điểm.',
    },
    {
        question: 'Khoảnh khắc tồn tại trong bao lâu?',
        answer:
            'Mỗi khoảnh khắc tự hết hạn sau 2 giờ. Bạn có thể chia sẻ một bức ảnh cùng caption tối đa 50 ký tự.',
    },
    {
        question: 'Người khác có thấy vị trí chính xác của tôi?',
        answer:
            'Flip hiển thị địa điểm check-in, không hiển thị tọa độ hay khoảng cách chính xác giữa bạn và người khác.',
    },
    {
        question: 'Khi nào tôi có thể bắt đầu chat?',
        answer:
            'Khi bạn và người ấy cùng Like nhau, Flip tạo kết nối và mở cuộc trò chuyện.',
    },
    {
        question: 'Tôi có thể tải Flip ở đâu?',
        answer:
            'Phiên bản Android đang được phát triển. Khi phát hành, bạn có thể tải file APK tại mục Trải nghiệm Flip trên website này.',
    },
];

function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const sectionId = useId();

    function toggleQuestion(index: number) {
        setOpenIndex((previous) => (
            previous === index ? null : index
        ));
    }

    return (
        <section
            className="faq"
            id="faq"
            aria-labelledby={`${sectionId}-title`}
        >
            <div className="faq-container">
                <div className="faq-heading">
                    <p className="faq-label">
                        QUESTIONS ABOUT FLIP
                    </p>

                    <h2
                        className="faq-title"
                        id={`${sectionId}-title`}
                    >
                        Một chút thắc mắc.
                        <em>Trước một lời chào.</em>
                    </h2>

                    <p className="faq-description">
                        Những điều bạn có thể muốn biết trước
                        khi bắt đầu cùng Flip.
                    </p>
                </div>

                <div className="faq-list">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        const questionId = `${sectionId}-question-${index}`;
                        const answerId = `${sectionId}-answer-${index}`;

                        return (
                            <div
                                className={`faq-item ${isOpen ? 'is-open' : ''
                                    }`}
                                key={faq.question}
                            >
                                <h3 className="faq-question">
                                    <button
                                        className="faq-trigger"
                                        type="button"
                                        id={questionId}
                                        aria-expanded={isOpen}
                                        aria-controls={answerId}
                                        onClick={() => toggleQuestion(index)}
                                    >
                                        <span>{faq.question}</span>

                                        <span
                                            className="faq-icon"
                                            aria-hidden="true"
                                        />
                                    </button>
                                </h3>

                                <div
                                    className="faq-answer"
                                    id={answerId}
                                    aria-labelledby={questionId}
                                    role="region"
                                    hidden={!isOpen}
                                >
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default FAQSection;