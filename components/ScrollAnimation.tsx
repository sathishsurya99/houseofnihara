"use client";
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollAnimation() {
    const pathname = usePathname();

    useEffect(() => {
        const fadeSections = document.querySelectorAll('.fade-in-section');

        const appearOptions = {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        };

        const appearOnScroll = new IntersectionObserver(function (entries, observer) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    return;
                } else {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, appearOptions);

        fadeSections.forEach(section => {
            appearOnScroll.observe(section);
        });

        return () => {
            fadeSections.forEach(section => {
                appearOnScroll.unobserve(section);
            });
        };
    }, [pathname]);

    return null;
}
