import React from 'react';

const Blogs = () => {
    return (
        <div className='mx-20 grid grid-cols-3'>
            <div className='border-4 border-red-400 rounded-lg p-5 m-5'>
                <h3 className='text-xl font-bold'>প্রশ্ন-1: Context Api কি?</h3>
                <br />
                <hr />
                <br />
                <p>উত্তর: আমরা জানি, এক component থেকে অন্য component ডাটা পাঠাতে চাইলে আমরা props এর মাধ্যমে পাঠিয়ে থাকি। তবে এক্ষেত্রে one directional rule মেনে চলতে হবে। অর্থাৎ ডাটা উপরের component থেকে আস্তে আস্তে নিচের component এ যায়। এই প্রক্রিয়া কে props drilling বলে। এই প্রক্রিয়া কঠিন ও সময় সাপেক্ষ। তাই এই প্রক্রিয়ার বিপরীতে যে প্রক্রিয়ার মাধ্যমে কোন ডাটা কে drilling এবং one directional rule ব্যতিত এক component থেকে অন্য এক বা একাধিক component এ প্রেরণ করা যায় তাকে Context Api বলে।</p>
            </div>
            <div className='border-4 border-red-400 rounded-lg p-5 m-5'>
                <h3 className='text-xl font-bold'>প্রশ্ন-2: Semantic tag কাকে বলে?</h3>
                <br />
                <hr />
                <br />
                <img className='mx-auto my-3' src="img_sem_elements.gif" alt="" />
                <p>উত্তর: Semantic tag বলতে html এর ঐসব ট্যাগ কে বুঝানো হয় যাদের অর্থ developer এবং browser এর কাছে স্পষ্ট থাকে। যেমন ধরা যাক, সংবাদপত্রের কোন খবর বা ব্লগ লিখতে চাইলে এর জন্য article tag ব্যবহার করি। ট্যাগের নাম দেখলেই developer ও browser এর বিষয়বস্তু বুঝতে পারে। উদাহরণ : header, nav, article, footer, main, section ইত্যাদি।</p>
            </div>
            <div className='border-4 border-red-400 rounded-lg p-5 m-5'>
                <h3 className='text-xl font-bold'>প্রশ্ন: Inline vs Inline-block?</h3>
                <br />
                <hr />
                <br />
                <p>উত্তর: Inline: Inline element হচ্ছে ঐসব ইলিমেন্ট যারা শুধুমাত্র যে জায়গায় অবস্থান করে সেই জায়গা টুকু দখল করে। এদের height, width দেওয়া যায় না। margin left, right এ দেওয়া গেলে ও top, bottom এ দেওয়া যায় না। উদাহরণ : anchor tag, span tag ইত্যাদি।
                    <br />
                    Inline-block: Inline element যখন block এর মতো আচরণ করে তখন তাকে Inline-block element বলে। এক্ষেত্রে inline element গুলো block এর মতো style ধারণ করে। কিন্তু এর inline বৈশিষ্ট্য বজায় থাকে।
                </p>
            </div>
        </div>
    );
};

export default Blogs;